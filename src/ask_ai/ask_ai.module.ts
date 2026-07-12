import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AskAiController } from './ask_ai.controller';
import { AskAiService } from './ask_ai.service';

@Module({
  imports: [ConfigModule],
  controllers: [AskAiController],
  providers: [AskAiService],
})
export class AskAiModule {}
