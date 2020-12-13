import IUserCreateDTO from "@modules/user/dtos/IUserCreateDTO";
import User from "@modules/user/infra/database/model/User";
import { hash } from "bcryptjs";
import { uuid } from "uuidv4";
import IUsersRepository from "../IUsersRepository";

class FakeUserRepository implements IUsersRepository  {
  private users: User[] = [];

  public async create(data: IUserCreateDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      id: uuid(),
      name: data.name,
      login: data.login,
      password: data.password
    });

    this.users.push(user);

    return user;
  }

  public async findAll(): Promise<User[]> {
    return this.users;
  }

  public async findById(id: string): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }

  public async findByLogin(login: string): Promise<User | undefined> {
    return this.users.find(u => u.login === login);
  }

}

export default FakeUserRepository;
