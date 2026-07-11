import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { RearrangeService } from './rearrange.service';
import { GetRearrangeQuestionsDto } from './dto/get-rearrange-questions.dto';
import { ValidateRearrangeAnswerDto } from './dto/validate-rearrange-answer.dto';

@Controller('rearrange')
export class RearrangeController {
  constructor(private readonly rearrangeService: RearrangeService) {}

  @Get()
  async getQuestions(@Query() query: GetRearrangeQuestionsDto) {
    return this.rearrangeService.getQuestionsBySeed(query.seed);
  }

  @Post('validate')
  async validateAnswer(@Body() body: ValidateRearrangeAnswerDto) {
    return this.rearrangeService.validateAnswer(body.id, body.lines);
  }
}
