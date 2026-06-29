import {
  BadRequestException,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcryptjs';
import { AuthService } from './auth.service';
import { UserDocument } from '../users/user.schema';
import { UserResponse, UsersService } from '../users/users.service';

interface CreateUserInput {
  username: string;
  email: string;
  password: string;
}

type UsersServiceMock = {
  findByUsernameOrEmail: jest.Mock<
    Promise<UserDocument | null>,
    [string, string]
  >;
  findByLogin: jest.Mock<Promise<UserDocument | null>, [string]>;
  create: jest.Mock<Promise<UserDocument>, [CreateUserInput]>;
  toResponse: jest.Mock<UserResponse, [UserDocument]>;
};

type JwtServiceMock = {
  signAsync: jest.Mock<Promise<string>, [Record<string, string>]>;
};

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: UsersServiceMock;
  let jwtService: JwtServiceMock;

  const safeUser: UserResponse = {
    id: 'user-id',
    username: 'alice',
    email: 'alice@example.com',
  };

  const userDocument = {
    _id: 'user-id',
    username: 'alice',
    email: 'alice@example.com',
    password: 'hashed-password',
  } as unknown as UserDocument;

  beforeEach(() => {
    usersService = {
      findByUsernameOrEmail: jest.fn<
        Promise<UserDocument | null>,
        [string, string]
      >(),
      findByLogin: jest.fn<Promise<UserDocument | null>, [string]>(),
      create: jest.fn<Promise<UserDocument>, [CreateUserInput]>(),
      toResponse: jest
        .fn<UserResponse, [UserDocument]>()
        .mockReturnValue(safeUser),
    };
    jwtService = {
      signAsync: jest
        .fn<Promise<string>, [Record<string, string>]>()
        .mockResolvedValue('signed-token'),
    };

    authService = new AuthService(
      usersService as unknown as UsersService,
      jwtService as unknown as JwtService,
    );
  });

  it('registers a user with a hashed password and returns auth payload', async () => {
    usersService.findByUsernameOrEmail.mockResolvedValue(null);
    usersService.create.mockImplementation((createUserInput) =>
      Promise.resolve({
        ...userDocument,
        password: createUserInput.password,
      }),
    );

    const result = await authService.register({
      username: 'alice',
      email: 'alice@example.com',
      password: 'secret123',
      confirmPassword: 'secret123',
    });

    expect(usersService.create).toHaveBeenCalledTimes(1);
    const [createUserInput] = usersService.create.mock.calls[0];

    expect(createUserInput).toMatchObject({
      username: 'alice',
      email: 'alice@example.com',
    });
    expect(createUserInput.password).not.toBe('secret123');
    expect(result).toEqual({
      accessToken: 'signed-token',
      tokenType: 'Bearer',
      user: safeUser,
    });
  });

  it('rejects register requests with mismatched password confirmation', async () => {
    await expect(
      authService.register({
        username: 'alice',
        email: 'alice@example.com',
        password: 'secret123',
        confirmPassword: 'different',
      }),
    ).rejects.toBeInstanceOf(BadRequestException);
  });

  it('rejects register requests when username or email already exists', async () => {
    usersService.findByUsernameOrEmail.mockResolvedValue(userDocument);

    await expect(
      authService.register({
        username: 'alice',
        email: 'alice@example.com',
        password: 'secret123',
        confirmPassword: 'secret123',
      }),
    ).rejects.toBeInstanceOf(ConflictException);
    expect(usersService.create).not.toHaveBeenCalled();
  });

  it('logs in with valid credentials and returns auth payload', async () => {
    usersService.findByLogin.mockResolvedValue({
      ...userDocument,
      password: await hash('secret123', 10),
    });

    const result = await authService.login({
      username: 'alice',
      password: 'secret123',
    });

    expect(jwtService.signAsync).toHaveBeenCalledWith({
      sub: 'user-id',
      username: 'alice',
      email: 'alice@example.com',
    });
    expect(result).toEqual({
      accessToken: 'signed-token',
      tokenType: 'Bearer',
      user: safeUser,
    });
  });

  it('rejects login requests with an invalid password', async () => {
    usersService.findByLogin.mockResolvedValue({
      ...userDocument,
      password: await hash('secret123', 10),
    });

    await expect(
      authService.login({
        username: 'alice',
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(UnauthorizedException);
  });
});
