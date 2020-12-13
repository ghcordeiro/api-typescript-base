import UserService from './UserService';
import FakeUserRepository from '../repositories/fakes/UserRepositoryFake';

describe('User', () => {
  const fakeUserRepository = new FakeUserRepository();

  const userService = new UserService(fakeUserRepository);

  it('Deve criar um novo usuário', async () => {
    const user = await userService.create({
      login: 'user',
      password: '123',
      name: 'User'
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('User');
    expect(user.login).toBe('user');
  });

  it('Deve retornar um usuário', async () => {
    const users = await userService.findAll();
    expect(users.length).toBe(1);
  });

  it('Deve retornar um usuário', async () => {
    const user = await userService.create({
      login: 'user',
      password: '123',
      name: 'User'
    });

    const userSaved = await userService.findById(user.id);
    expect(userSaved).toHaveProperty('id');
    expect(userSaved?.name).toBe('User');
    expect(userSaved?.login).toBe('user');
  });

})
