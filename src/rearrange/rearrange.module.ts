import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RearrangeController } from './rearrange.controller';
import { RearrangeService } from './rearrange.service';
import { RearrangeQuestion, RearrangeQuestionSchema } from './rearrange.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RearrangeQuestion.name, schema: RearrangeQuestionSchema },
    ]),
  ],
  controllers: [RearrangeController],
  providers: [RearrangeService],
})
export class RearrangeModule {}
