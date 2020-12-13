import FakeUserRepository from '@modules/user/repositories/fakes/UserRepositoryFake';
import UserService from '@modules/user/services/UserService';
import AppError from '@shared/errors/AppError';
import AuthenticateService from './AuthenticateService';

describe('User', () => {
  const fakeUserRepository = new FakeUserRepository();

  const autheticateService = new AuthenticateService(fakeUserRepository);
  const userService = new UserService(fakeUserRepository);

  const user = {
    login: 'user',
    password: '123',
    name: 'User'
  }

  it('Deve criar um novo usuário e realizar a autenticação', async () => {

    await userService.create(user);

    const auth = await autheticateService.execute({
      login: user.login,
      password: user.password
    });

    expect(auth).toHaveProperty('token');
  });

  it('Deve retornar erro "Incorrect login/password combination" para o usuário incorreto', async () => {
    try {
      await autheticateService.execute({
        login: 'usuário',
        password: 'loremipsum'
      })
    } catch(e) {
      expect(e.message).toBe('Incorrect login/password combination');
    }
  });

  it('Deve retornar erro "Incorrect login/password combination" para a senha incorreta', async () => {
    try {
      await autheticateService.execute({
        login: 'user',
        password: 'loremipsum'
      })
    } catch(e) {
      expect(e.message).toBe('Incorrect login/password combination');
    }
  });

})
