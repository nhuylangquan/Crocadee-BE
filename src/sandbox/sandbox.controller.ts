import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { SandboxService } from './sandbox.service';
import { ExecuteCodeDto } from './dto/execute-code.dto';

@Controller('sandbox')
export class SandboxController {
  constructor(private readonly sandboxService: SandboxService) {}

  @Post('execute')
  @HttpCode(HttpStatus.OK)
  async executeCode(@Body() executeCodeDto: ExecuteCodeDto) {
    if (executeCodeDto.language === 'cpp') {
      return this.sandboxService.executeCpp(executeCodeDto.code);
    }

    return {
      success: false,
      error: 'Unsupported language',
    };
  }
}
