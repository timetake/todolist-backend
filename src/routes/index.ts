import { Router } from 'express';
import todoRouter from '@routes/todos';

const baseRouter = Router();

baseRouter.use('/todos', todoRouter);

export default baseRouter;
