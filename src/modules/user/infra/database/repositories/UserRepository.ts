import IUserCreateDTO from "@modules/user/dtos/IUserCreateDTO";
import IUsersRepository from "@modules/user/repositories/IUsersRepository";
import User from "../model/User";

class UsersRepository implements IUsersRepository {

  constructor() {
  }

  public async create({ name, password, login }: IUserCreateDTO): Promise<User> {
    throw new Error("Method not implemented.");
  }

  public async findAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

  public async findById(id: string): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }

  public async findByLogin(login: string): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }

}

export default UsersRepository;
