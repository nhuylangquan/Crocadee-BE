import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { Demo, DemoSchema } from './demo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Demo.name, schema: DemoSchema }]),
  ],
  controllers: [DemoController],
  providers: [DemoService],
})
export class DemoModule {}
