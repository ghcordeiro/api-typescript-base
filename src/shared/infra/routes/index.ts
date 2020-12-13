import { Router } from 'express';

import usersRouter from '@modules/user/infra/http/routes/users.routes';
import sessionsRouter from './sessions.routes';
import ensureAuthenticate from '../middlewares/ensureAuthenticate';

const routes = Router();
routes.use('/sessions', sessionsRouter);

routes.use(ensureAuthenticate);
routes.use('/user', usersRouter);

export default routes;
