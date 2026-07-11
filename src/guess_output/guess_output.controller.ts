import { Controller, Get, Query } from '@nestjs/common';
import { QuestionsService } from './guess_output.service';
import { GetQuestionsDto } from './dto/get-questions.dto';

@Controller('guess_output')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  async getQuestions(@Query() query: GetQuestionsDto) {
    return this.questionsService.getQuestionsBySeed(query.seed);
  }
}
