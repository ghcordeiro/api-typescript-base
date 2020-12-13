import 'reflect-metadata';
import { Request, Response } from 'express';

import UserService from '@modules/user/services/UserService';

import { container } from 'tsyringe';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, password, login } = request.body;

    const createUser = container.resolve(UserService);

    const user = await createUser.create(
      { name, password, login }
    );

    return response.json(user);
  }

  public async findAll(request: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(UserService);

    const users = await listUsers.findAll();

    return response.json(users);
  }

  public async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const user = container.resolve(UserService);

    const users = await user.findById(id);

    return response.json(users);
  }
}
