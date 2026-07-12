import { Controller, Post, Body, Res } from '@nestjs/common';
import type { Response } from 'express';
import { AskAiService } from './ask_ai.service';
import { AskDto } from './dto/ask.dto';

@Controller('ask_ai')
export class AskAiController {
  constructor(private readonly askAiService: AskAiService) {}

  @Post()
  async ask(@Body() body: AskDto, @Res() res: Response) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no');

    try {
      const generator = this.askAiService.askStream(body.message);

      for await (const chunk of generator) {
        res.write(`data: ${JSON.stringify({ text: chunk })}\n\n`);
      }

      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
      res.end();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      res.write(`data: ${JSON.stringify({ error: message })}\n\n`);
      res.end();
    }
  }
}
