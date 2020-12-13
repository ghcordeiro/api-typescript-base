import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import auth from '../../config/auth';
import AppError from '@shared/errors/AppError';
import { inject } from 'tsyringe';
import IUsersRepository from '@modules/user/repositories/IUsersRepository';
import User from '@modules/user/infra/database/model/User';

interface Request {
  login: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({ password, login }: Request): Promise<Response> {

    const user = await this.usersRepository.findByLogin(login);

    if (!user) {
      throw new AppError('Incorrect login/password combination', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect login/password combination', 401);
    }

    const token = sign({}, auth.jwt.secret, {
      subject: user.id,
      expiresIn: auth.jwt.expiresIn,
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
