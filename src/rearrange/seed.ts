import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { seedRearrangeQuestions } from './rearrange.seed';
import { RearrangeQuestion } from './rearrange.schema';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const rearrangeModel = app.get<Model<RearrangeQuestion>>(
    getModelToken(RearrangeQuestion.name),
  );

  const count = await rearrangeModel.countDocuments();
  if (count > 0) {
    console.log(
      `Database already has ${count} rearrange questions. Dropping existing data...`,
    );
    await rearrangeModel.deleteMany({});
  }

  await rearrangeModel.insertMany(seedRearrangeQuestions);
  console.log(
    `Successfully seeded ${seedRearrangeQuestions.length} rearrange questions.`,
  );

  await app.close();
}

bootstrap().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
