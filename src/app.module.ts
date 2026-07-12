import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DemoModule } from './demo/demo.module';
import { AuthModule } from './auth/auth.module';
import { QuestionsModule } from './guess_output/guess_output.module';
import { RearrangeModule } from './rearrange/rearrange.module';
import { AskAiModule } from './ask_ai/ask_ai.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    DemoModule,
    AuthModule,
    QuestionsModule,
    RearrangeModule,
    AskAiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
