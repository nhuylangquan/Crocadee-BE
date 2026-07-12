import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createHash } from 'crypto';
import { RearrangeQuestion, Difficulty } from './rearrange.schema';

export interface RearrangeQuestionResponse {
  id: string;
  q: string;
  lines: string[];
}

export interface ValidateRearrangeResult {
  correct: boolean;
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

/**
 * Fisher-Yates shuffle using a seeded RNG.
 */
function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

@Injectable()
export class RearrangeService {
  constructor(
    @InjectModel(RearrangeQuestion.name)
    private rearrangeModel: Model<RearrangeQuestion>,
  ) {}

  async getQuestionsBySeed(
    seed?: string,
  ): Promise<RearrangeQuestionResponse[]> {
    const count = await this.rearrangeModel.countDocuments();
    if (count === 0) {
      throw new NotFoundException('No rearrange questions available');
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

    const questions = await this.rearrangeModel.find().lean();

    // Use a separate seeded rng for shuffling lines within each question
    const shuffleRng = mulberry32(numericSeed + 999);

    return selectedIndices.map((idx) => {
      const q = questions[idx];
      const shuffled = seededShuffle(q.lines, shuffleRng);
      return {
        id: q._id.toString(),
        q: q.q,
        lines: shuffled,
      };
    });
  }

  async getQuestionsByDifficulty(
    difficulty: Difficulty,
    seed?: string,
  ): Promise<RearrangeQuestionResponse[]> {
    const count = await this.rearrangeModel.countDocuments({ difficulty });
    if (count === 0) {
      throw new NotFoundException(
        `No rearrange questions found for difficulty: ${difficulty}`,
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

    const questions = await this.rearrangeModel.find({ difficulty }).lean();

    const shuffleRng = mulberry32(numericSeed + 999);

    return selectedIndices.map((idx) => {
      const q = questions[idx];
      const shuffled = seededShuffle(q.lines, shuffleRng);
      return {
        id: q._id.toString(),
        q: q.q,
        lines: shuffled,
      };
    });
  }

  async validateAnswer(
    id: string,
    userLines: string[],
  ): Promise<ValidateRearrangeResult> {
    const question = await this.rearrangeModel.findById(id).lean();
    if (!question) {
      throw new NotFoundException('Question not found');
    }

    const correct =
      JSON.stringify(question.lines) === JSON.stringify(userLines);

    return { correct };
  }
}
