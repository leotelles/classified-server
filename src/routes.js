import { Router } from 'express';

import CategoryController from './app/controllers/CategoryController';
import AdvertsController from './app/controllers/AdvertsController';

const routes = new Router();

routes.get('/categories', CategoryController.mainCategory);
routes.get('/categories/:id', CategoryController.subCategory);
routes.post('/categories', CategoryController.store);
routes.get('/categories-all', CategoryController.allCategories);

routes.get('/adverts/:category', AdvertsController.index);
routes.post('/adverts', AdvertsController.store);
routes.get('/ad/:id', AdvertsController.detail);
routes.get('/adverts-all', AdvertsController.allAdverts);

export default routes;
