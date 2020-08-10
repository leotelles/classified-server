import { Router } from 'express';

import CategoryController from './app/controllers/CategoryController';

const routes = new Router();

routes.get('/categories', CategoryController.index);

export default routes;
