import { Controller, Get, Query } from '@nestjs/common';
import { RearrangeService } from './rearrange.service';
import { GetRearrangeQuestionsDto } from './dto/get-rearrange-questions.dto';

@Controller('rearrange')
export class RearrangeController {
  constructor(private readonly rearrangeService: RearrangeService) {}

  @Get()
  async getQuestions(@Query() query: GetRearrangeQuestionsDto) {
    return this.rearrangeService.getQuestionsBySeed(query.seed);
  }
}
