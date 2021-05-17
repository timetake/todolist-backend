import { Router } from 'express';
import {
  getAllTodos,
  createTodos,
  completeTodo,
  incompleteTodo,
  deleteTodos,
} from './controller';

const todoRouter = Router();

todoRouter.get('/', getAllTodos);
todoRouter.post('/', createTodos);
todoRouter.put('/completed', completeTodo);
todoRouter.put('/incomplete', incompleteTodo);
todoRouter.delete('/', deleteTodos);

export default todoRouter;
