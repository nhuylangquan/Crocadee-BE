import { Controller, Get, Query } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { GetQuestionsDto } from './dto/get-questions.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  async getQuestions(@Query() query: GetQuestionsDto) {
    return this.questionsService.getQuestionsBySeed(query.seed);
  }
}
