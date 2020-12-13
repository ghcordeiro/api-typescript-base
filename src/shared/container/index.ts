import { container } from 'tsyringe';

import IUsersRepository from '@modules/user/repositories/IUsersRepository';
import UsersRepository from '@modules/user/infra/database/repositories/UserRepository';

//Users
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
