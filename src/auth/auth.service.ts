import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import * as crypto from 'crypto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UserDocument } from '../users/user.schema';
import { UserResponse, UsersService } from '../users/users.service';

export interface AuthResponse {
  accessToken: string;
  tokenType: 'Bearer';
  user: UserResponse;
}

const PASSWORD_SALT_ROUNDS = 10;

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<AuthResponse> {
    if (
      registerDto.confirmPassword &&
      registerDto.password !== registerDto.confirmPassword
    ) {
      throw new BadRequestException('Passwords do not match.');
    }

    const existingUser = await this.usersService.findByUsernameOrEmail(
      registerDto.username,
      registerDto.email,
    );

    if (existingUser) {
      throw new ConflictException('Username or email already exists.');
    }

    const hashedPassword = await hash(
      registerDto.password,
      PASSWORD_SALT_ROUNDS,
    );
    const user = await this.usersService.create({
      username: registerDto.username,
      email: registerDto.email,
      password: hashedPassword,
    });

    return this.buildAuthResponse(user);
  }

  async login(loginDto: LoginDto): Promise<AuthResponse> {
    const user = await this.usersService.findByLogin(loginDto.username);

    if (!user) {
      throw new UnauthorizedException('Invalid username or password.');
    }

    const isPasswordValid = await compare(loginDto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid username or password.');
    }

    return this.buildAuthResponse(user);
  }

  private async buildAuthResponse(user: UserDocument): Promise<AuthResponse> {
    const accessToken = await this.jwtService.signAsync({
      sub: String(user._id),
      username: user.username,
      email: user.email,
    });

    return {
      accessToken,
      tokenType: 'Bearer',
      user: this.usersService.toResponse(user),
    };
  }

  async forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<void> {
    const user = await this.usersService.findByEmail(forgotPasswordDto.email);
    if (!user) {
      return;
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    const passwordResetExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 phút

    user.passwordResetToken = passwordResetToken;
    user.passwordResetExpires = passwordResetExpires;
    await user.save();

    const resetUrl = `http://localhost:5173/reset-password?token=${resetToken}`;
    console.log(`[Forgot Password] Reset URL for ${user.email}: ${resetUrl}`);
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<void> {
    const hashedToken = crypto
      .createHash('sha256')
      .update(resetPasswordDto.token)
      .digest('hex');

    const user = await this.usersService.findByPasswordResetToken(hashedToken);

    if (!user) {
      throw new BadRequestException('Token is invalid or has expired');
    }

    user.password = await hash(
      resetPasswordDto.newPassword,
      PASSWORD_SALT_ROUNDS,
    );
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
  }
}
