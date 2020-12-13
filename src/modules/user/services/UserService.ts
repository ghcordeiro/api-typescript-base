import 'reflect-metadata'
import { inject, injectable } from 'tsyringe';

import IUsersRepository from '@modules/user/repositories/IUsersRepository';
import IUserCreateDTO from '@modules/user/dtos/IUserCreateDTO'
import User from '../infra/database/model/User';
import { hash } from 'bcryptjs';

@injectable()
class UserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async create({ name, password, login }: IUserCreateDTO): Promise<User> {

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({ name, password: hashedPassword, login });

    return user;
  }

  public async findAll(): Promise<User[]> {

    const users = await this.usersRepository.findAll();

    return users;
  }

  public async findById(id: string): Promise<User | undefined> {

    const users = await this.usersRepository.findById(id);

    return users;
  }

}

export default UserService;
