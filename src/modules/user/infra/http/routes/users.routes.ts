import { Router } from 'express';

import UsersController from '@modules/user/infra/http/controller/UserController';
const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', usersController.findAll);
usersRouter.get('/:id', usersController.findById);
usersRouter.post('/', usersController.create);

export default usersRouter;
