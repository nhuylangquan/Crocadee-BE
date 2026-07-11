import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createHash } from 'crypto';
import { Question, Difficulty } from './guess_output.schema';

export interface QuestionResponse {
  q: string;
  o: { a: string; b: string; c: string; d: string };
  c: number;
  ex: string;
}

/**
 * Seeded pseudo-random number generator (mulberry32).
 */
function mulberry32(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Convert a hex string to a numeric seed.
 */
function hexToSeed(hex: string): number {
  let num = 0;
  for (let i = 0; i < hex.length && i < 8; i++) {
    num = (num << 4) | parseInt(hex[i], 16);
  }
  return num;
}

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<Question>,
  ) {}

  async getQuestionsBySeed(seed?: string): Promise<QuestionResponse[]> {
    const count = await this.questionModel.countDocuments();
    if (count === 0) {
      throw new NotFoundException('No questions available');
    }

    const take = Math.min(15, count);

    // If no seed provided, use random
    const seedStr = seed ?? Math.random().toString(36).substring(2, 15);
    const hash = createHash('md5').update(seedStr).digest('hex');
    const numericSeed = hexToSeed(hash);
    const rng = mulberry32(numericSeed);

    // Fisher-Yates shuffle on indices using seeded RNG
    const indices = Array.from({ length: count }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const selectedIndices = indices.slice(0, take).sort((a, b) => a - b);

    const questions = await this.questionModel.find().lean();

    return selectedIndices.map((idx) => {
      const q = questions[idx];
      return {
        q: q.q,
        o: q.o,
        c: q.c,
        ex: q.ex,
      };
    });
  }

  async getQuestionsByDifficulty(
    difficulty: Difficulty,
    seed?: string,
  ): Promise<QuestionResponse[]> {
    const count = await this.questionModel.countDocuments({ difficulty });
    if (count === 0) {
      throw new NotFoundException(
        `No questions found for difficulty: ${difficulty}`,
      );
    }

    const take = Math.min(15, count);

    const seedStr = seed ?? Math.random().toString(36).substring(2, 15);
    const hash = createHash('md5').update(seedStr).digest('hex');
    const numericSeed = hexToSeed(hash);
    const rng = mulberry32(numericSeed);

    const indices = Array.from({ length: count }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const selectedIndices = indices.slice(0, take).sort((a, b) => a - b);

    const questions = await this.questionModel.find({ difficulty }).lean();

    return selectedIndices.map((idx) => {
      const q = questions[idx];
      return {
        q: q.q,
        o: q.o,
        c: q.c,
        ex: q.ex,
      };
    });
  }
}
