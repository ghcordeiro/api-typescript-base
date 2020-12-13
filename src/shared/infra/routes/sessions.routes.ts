import { Router } from 'express';
import { container } from 'tsyringe';
import AuthenticateUserService from '../../services/AuthenticateService';

const sesstionsRouter = Router();

sesstionsRouter.post('/', async (request, response) => {
  const { password, login } = request.body;

  const authenticateUser = container.resolve(AuthenticateUserService);

  const { user, token } = await authenticateUser.execute({
    password,
    login
  });

  return response.status(200).json({ user, token });
});

export default sesstionsRouter;
