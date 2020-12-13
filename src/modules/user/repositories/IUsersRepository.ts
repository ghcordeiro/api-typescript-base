import IUserCreateDTO from '@modules/user/dtos/IUserCreateDTO';
import User from '../infra/database/model/User';

export default interface IUsersRepository {
  create(data: IUserCreateDTO): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByLogin(login: string): Promise<User | undefined>;
}
