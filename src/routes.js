import { Router } from 'express';

import CategoryController from './app/controllers/CategoryController';
import AdvertsController from './app/controllers/AdvertsController';

const routes = new Router();

routes.get('/categories', CategoryController.mainCategory);
routes.get('/categories/:id', CategoryController.subCategory);
routes.post('/categories', CategoryController.store);

routes.get('/adverts/:id', AdvertsController.index);
routes.post('/adverts', AdvertsController.store);

export default routes;
