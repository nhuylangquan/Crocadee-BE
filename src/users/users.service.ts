import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

interface CreateUserInput {
  username: string;
  email: string;
  password: string;
}

export interface UserResponse {
  id: string;
  username: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<UserDocument> {
    try {
      return await this.userModel.create(createUserInput);
    } catch (error) {
      if (this.isDuplicateKeyError(error)) {
        throw new ConflictException('Username or email already exists.');
      }

      throw error;
    }
  }

  async findByUsernameOrEmail(
    username: string,
    email: string,
  ): Promise<UserDocument | null> {
    return this.userModel
      .findOne({
        $or: [{ username }, { email }],
      })
      .exec();
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email: email.toLowerCase() }).exec();
  }

  async findByPasswordResetToken(token: string): Promise<UserDocument | null> {
    return this.userModel
      .findOne({
        passwordResetToken: token,
        passwordResetExpires: { $gt: new Date() },
      })
      .exec();
  }

  async findByLogin(login: string): Promise<UserDocument | null> {
    return this.userModel
      .findOne({
        $or: [{ username: login }, { email: login.toLowerCase() }],
      })
      .select('+password')
      .exec();
  }

  async setResetToken(
    userId: string,
    tokenHash: string,
    expires: Date,
  ): Promise<void> {
    await this.userModel
      .updateOne(
        { _id: userId },
        { passwordResetToken: tokenHash, passwordResetExpires: expires },
      )
      .exec();
  }

  async findByResetTokenHash(tokenHash: string): Promise<UserDocument | null> {
    // passwordResetToken has `select: false`, so it must be explicitly re-selected
    return this.userModel
      .findOne({ passwordResetToken: tokenHash })
      .select('+passwordResetToken')
      .exec();
  }

  async updatePasswordAndClearResetToken(
    userId: string,
    hashedPassword: string,
  ): Promise<void> {
    await this.userModel
      .updateOne(
        { _id: userId },
        {
          password: hashedPassword,
          $unset: { passwordResetToken: '', passwordResetExpires: '' },
        },
      )
      .exec();
  }

  toResponse(user: UserDocument): UserResponse {
    return {
      id: String(user._id),
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  private isDuplicateKeyError(error: unknown): error is { code: number } {
    return (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      error.code === 11000
    );
  }
}
