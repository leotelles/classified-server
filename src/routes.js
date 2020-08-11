import { Router } from 'express';

import CategoryController from './app/controllers/CategoryController';

const routes = new Router();

routes.get('/categories', CategoryController.mainCategory);
routes.get('/categories/:id', CategoryController.subCategory);
routes.get('/subcategories', CategoryController.subCategories);

export default routes;
