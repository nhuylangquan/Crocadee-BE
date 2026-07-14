import { Body, Controller, Post } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';

interface ConceptRequest {
  question: string;
  lessonTitle?: string;
}

interface DebugRequest {
  code: string;
  errorMessage: string;
}

@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post('concept')
  askConcept(@Body() body: ConceptRequest) {
    return this.chatbotService.askConcept(body.question, body.lessonTitle);
  }

  @Post('debug')
  debugCode(@Body() body: DebugRequest) {
    return this.chatbotService.debugCode(body.code, body.errorMessage);
  }
}
