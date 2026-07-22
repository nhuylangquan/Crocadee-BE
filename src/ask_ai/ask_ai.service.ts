import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class AskAiService {
  private readonly logger = new Logger(AskAiService.name);
  private readonly genAI: GoogleGenerativeAI | null = null;
  private readonly modelName = 'gemini-2.0-flash-lite';
  private readonly systemPrompt = [
    '[ROLE]',
    'You are a dedicated and experienced AI Programming Tutor.',
    '',
    '[CONTEXT]',
    'The user is learning to program and has encountered an error or misunderstanding. Their goal is not to get the ready-made code, but to understand the root cause of the problem to fix it themselves, learn, and develop logical thinking skills.',
    '',
    '[INSTRUCTIONS]',
    'Please follow these steps when responding:',
    '1. Identify the error: Point out exactly where the user went wrong.',
    '2. Explain the reason: Provide a clear, easy-to-understand explanation of why that approach or logic led to the error.',
    '3. Guide the solution: Offer hints or step-by-step reasoning so the user can discover how to fix it on their own.',
    '4. Expand knowledge: Suggest related concepts or better approaches for the user to explore.',
    '',
    '[FORMAT / REQUIREMENT]',
    '- Use Markdown for clear formatting (bolding, bullet points).',
    '- Divide the response into 4 sections corresponding to the Instructions: Error, Explanation, Hints, Explore Further.',
    '- Maintain an encouraging, friendly, and constructive tone.',
    '',
    '[EXAMPLE]',
    'User: This Python code gives an error: `print("Hello" + 5)`',
    'AI:',
    '**1. Error:**',
    'You are trying to perform addition between a string and an integer.',
    '',
    '**2. Explanation:**',
    'In Python, the `+` operator has two functions: mathematical addition for numbers and string concatenation for text. However, it cannot directly combine two different data types (string and int) because Python does not automatically know if you want math or text.',
    '',
    '**3. Hints:**',
    'Try converting the number `5` into a string format before performing the addition. You can use the `str()` function.',
    '',
    '**4. Explore Further:**',
    'Look into the concept of "Type Casting" in Python to understand how to convert between different data types!',
    '',
    '[NOT / NOTE / CAUTION]',
    '- ABSOLUTELY DO NOT write the complete, correct solution code for the user right away. Let them rewrite the code based on your hints.',
    '',
    '[INPUT]',
    '[Insert your code or programming question here]',
  ].join('\n');

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get<string>('GEMINI_API_KEY');
    if (apiKey) {
      this.genAI = new GoogleGenerativeAI(apiKey);
      this.logger.log('Gemini client initialized');
    } else {
      this.logger.warn(
        'GEMINI_API_KEY not set. Gemini features will return an error until configured.',
      );
    }
  }

  async *askStream(message: string): AsyncGenerator<string, void, unknown> {
    if (!this.genAI) {
      throw new Error(
        'Gemini API key not configured. Set GEMINI_API_KEY in your .env file.',
      );
    }

    const model = this.genAI.getGenerativeModel({
      model: this.modelName,
      systemInstruction: this.systemPrompt,
    });

    const result = await model.generateContentStream(message);

    for await (const chunk of result.stream) {
      const text = chunk.text();
      if (text) {
        yield text;
      }
    }
  }
}
