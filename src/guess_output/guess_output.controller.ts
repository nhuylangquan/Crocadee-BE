import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { QuestionsService } from './guess_output.service';
import { GetQuestionsDto } from './dto/get-questions.dto';
import { ValidateAnswerDto } from './dto/validate-answer.dto';

@Controller('guess_output')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  async getQuestions(@Query() query: GetQuestionsDto) {
    return this.questionsService.getQuestionsBySeed(query.seed);
  }

  @Post('validate')
  async validateAnswer(@Body() body: ValidateAnswerDto) {
    return this.questionsService.validateAnswer(body.id, body.answer);
  }
}
