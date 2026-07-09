import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
// import { QuestionsService } from './questions.service';
import { seedQuestions } from './questions.seed';
import { Question } from './questions.schema';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionModel = app.get<Model<Question>>(getModelToken(Question.name));

  const count = await questionModel.countDocuments();
  if (count > 0) {
    console.log(
      `Database already has ${count} questions. Dropping existing data...`,
    );
    await questionModel.deleteMany({});
  }

  await questionModel.insertMany(seedQuestions);
  console.log(`Successfully seeded ${seedQuestions.length} questions.`);

  await app.close();
}

bootstrap().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
