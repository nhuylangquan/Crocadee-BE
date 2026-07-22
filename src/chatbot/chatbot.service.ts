import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { CppConcept, cppConcepts } from './data/cpp-concepts.data';
import { errorPatterns } from './data/error-patterns.data';

export interface ConceptResponse {
  answer: string;
  followUpQuestions: string[];
}

export interface DebugResponse {
  diagnosis: string;
  fixSuggestion: string;
  explanation: string;
}

@Injectable()
export class ChatbotService {
  private readonly logger = new Logger(ChatbotService.name);
  private readonly genAI: GoogleGenerativeAI | null = null;
  private readonly modelName = 'gemini-2.0-flash-lite';
  private readonly systemInstruction = `
[ROLE]
Bạn là Trợ Lý Khái Niệm C++ (C++ Concept Assistant) - một gia sư lập trình AI vô cùng thân thiện, chu đáo và nhiệt tình.

[CONTEXT]
Người dùng đang tham gia khóa học C++ thực hành (Practice Lab) và đặt câu hỏi về các bài học hoặc khái niệm lập trình.

[INSTRUCTIONS]
Hãy trò chuyện bằng tiếng Việt thân thiện, tự nhiên. Sử dụng xưng hô "mình" - "bạn" và dùng các từ cảm thán như "nha", "nhé", kèm theo các emoji dễ thương (😊, ✨, 🧠, 💻, 💡).
Trả lời đúng trọng tâm câu hỏi của người dùng và luôn đưa ra ví dụ code C++ thực tế ngắn gọn.

[RESPONSE FORMAT]
Phản hồi của bạn BẮT BUỘC phải tuân theo cấu trúc JSON sau:
{
  "answer": "Nội dung trả lời bằng Markdown chi tiết của bạn. Sử dụng các tiêu đề chính:\\nChào bạn! Mình rất vui được hỗ trợ...\\n\\n### 💡 Khái Niệm Cốt Lõi\\n...\\n\\n### ⚙️ Nguyên Lý Hoạt Động\\n...\\n\\n### 🧠 Mô Hình Tư Duy\\n...\\n\\n### 💻 Ví Dụ Nhanh\\n\`\`\`cpp\\n...\\n\`\`\`\\n\\n### ❓ Suy Ngẫm Thêm\\n...\\n\\n*Chúc bạn học tốt C++ nhé!*",
  "followUpQuestions": [
    "Câu hỏi gợi ý 1 liên quan đến chủ đề vừa thảo luận",
    "Câu hỏi gợi ý 2 liên quan đến chủ đề vừa thảo luận"
  ]
}
`;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('GEMINI_API_KEY');
    if (apiKey) {
      this.genAI = new GoogleGenerativeAI(apiKey);
      this.logger.log('Gemini client initialized for Chatbot');
    } else {
      this.logger.warn(
        'GEMINI_API_KEY not set. Falling back to local data matching.',
      );
    }
  }

  async askConcept(
    question: string,
    lessonTitle?: string,
  ): Promise<ConceptResponse> {
    const normalizedQuestion = this.normalize(question);
    const normalizedLessonTitle = this.normalize(lessonTitle);

    if (!normalizedQuestion) {
      return {
        answer:
          'Chào bạn! Bạn vui lòng gửi câu hỏi liên quan đến bài học C++ hiện tại để mình hỗ trợ tốt nhất nha! 😊',
        followUpQuestions: [],
      };
    }

    // If Gemini is available, query Gemini for dynamic response
    if (this.genAI) {
      try {
        const model = this.genAI.getGenerativeModel({
          model: this.modelName,
          systemInstruction: this.systemInstruction,
        });

        const promptText = `Câu hỏi: ${question}\nBài học hiện tại: ${lessonTitle || 'Không có'}`;
        const result = await model.generateContent({
          contents: [{ role: 'user', parts: [{ text: promptText }] }],
          generationConfig: {
            responseMimeType: 'application/json',
          },
        });

        const text = result.response.text();
        if (text) {
          const parsed = JSON.parse(text) as ConceptResponse;
          if (
            parsed &&
            parsed.answer &&
            Array.isArray(parsed.followUpQuestions)
          ) {
            return parsed;
          }
        }
      } catch (error) {
        this.logger.error(
          'Error calling Gemini API for chatbot. Falling back to local search.',
          error instanceof Error ? error.stack : String(error),
        );
      }
    }

    // Local Search Fallback (if Gemini fails or key is missing)
    const bestMatch = cppConcepts
      .map((concept) => ({
        concept,
        score: this.calculateConceptScore(
          concept,
          normalizedQuestion,
          normalizedLessonTitle,
        ),
      }))
      .sort((first, second) => second.score - first.score)[0];

    if (!bestMatch || bestMatch.score === 0) {
      return {
        answer:
          'Hì, mình chưa rõ câu hỏi này lắm. Bạn có thể thử hỏi về các khái niệm quen thuộc như biến (variable), vòng lặp (loop), hàm (function), mảng (array) hoặc con trỏ (pointer) để mình giải đáp chi tiết nha! 👇',
        followUpQuestions: ['Biến là gì?', 'Vòng lặp là gì?', 'Con trỏ là gì?'],
      };
    }

    return {
      answer: this.formatConceptAnswer(bestMatch.concept),
      followUpQuestions: bestMatch.concept.followUps,
    };
  }

  debugCode(code: string, errorMessage: string): DebugResponse {
    const matchedPattern = errorPatterns.find((errorPattern) =>
      errorPattern.pattern.test(errorMessage),
    );

    if (matchedPattern) {
      return {
        diagnosis: matchedPattern.diagnosis,
        fixSuggestion: matchedPattern.fixHint,
        explanation: matchedPattern.explanation,
      };
    }

    const staticAnalysisResult = this.analyzeCode(code);

    if (staticAnalysisResult) {
      return staticAnalysisResult;
    }

    return {
      diagnosis:
        'I could not identify the exact error from the available compiler output.',
      fixSuggestion:
        'Check the complete compiler error message, the line number, and the code around that line.',
      explanation:
        'More detailed compiler output helps the Debug Assistant match the error to a known pattern.',
    };
  }

  private normalize(value?: string): string {
    return (value ?? '').toLowerCase().trim();
  }

  private calculateConceptScore(
    concept: CppConcept,
    question: string,
    lessonTitle: string,
  ): number {
    let score = 0;

    // 1. Check matching keywords in the user's question
    for (const keyword of concept.keywords) {
      const normalizedKeyword = this.normalize(keyword);
      if (question.includes(normalizedKeyword)) {
        score += 10 + normalizedKeyword.length;
      }
    }

    // 2. If the user asks a generic question (e.g. "giải thích", "ví dụ", "hướng dẫn")
    // and the concept matches the current lesson, we give it a boost.
    const isGenericQuestion =
      /giải thích|chi tiết|ví dụ|hướng dẫn|cụ thể|là gì|explain|what is|how to|example/i.test(
        question,
      );
    const matchesCurrentLesson =
      lessonTitle &&
      (lessonTitle.includes(this.normalize(concept.topic)) ||
        this.normalize(concept.topic).includes(lessonTitle));

    if (isGenericQuestion && matchesCurrentLesson) {
      score += 5;
    }

    // 3. Small tie-breaker if it's the current lesson
    if (matchesCurrentLesson) {
      score += 1;
    }

    return score;
  }

  private formatConceptAnswer(concept: CppConcept): string {
    return `Chào bạn! Mình rất vui được hỗ trợ giải thích về chủ đề này. Dưới đây là nội dung chi tiết nha:

### 💡 Khái Niệm Cốt Lõi
${concept.coreDefinition}

### ⚙️ Nguyên Lý Hoạt Động
${concept.whyItWorks}

### 🧠 Mô Hình Tư Duy
${concept.mentalModel}

### 💻 Ví Dụ Nhanh
\`\`\`cpp
${concept.codeExample}
\`\`\`

### ❓ Suy Ngẫm Thêm
${concept.thinkAboutThis}

*Chúc bạn học tốt C++ nhé! Nếu cần hỏi thêm bất cứ điều gì, cứ nhắn mình ở góc dưới nha!* 😊`;
  }

  private analyzeCode(code: string): DebugResponse | null {
    const usesInputOutput = /\b(cout|cin)\b/.test(code);
    const hasIostream = /#include\s*<iostream>/.test(code);

    if (usesInputOutput && !hasIostream) {
      return {
        diagnosis:
          'The code uses cout or cin without including the iostream library.',
        fixSuggestion:
          'Add #include <iostream> at the top of the file. Then use std::cout/std::cin or add using namespace std;.',
        explanation: 'cout and cin are provided by the iostream library.',
      };
    }

    const hasInfiniteWhileLoop = /while\s*\(\s*true\s*\)/.test(code);
    const hasInfiniteForLoop = /for\s*\(\s*;\s*;\s*\)/.test(code);

    if (hasInfiniteWhileLoop || hasInfiniteForLoop) {
      return {
        diagnosis: 'The code contains a loop that may never stop.',
        fixSuggestion:
          'Add a condition that becomes false, or use break when the stopping condition is reached.',
        explanation:
          'A loop continues forever when its condition never becomes false.',
      };
    }

    return null;
  }
}
