import { Router } from 'express';
import {
  createPropertyController,
  deletePropertyController,
  getPropertyController,
  updatePropertyController,
  findCategoryController,
  findCityController,
} from '../controllers/property.controller';
const propertyRouter = Router();

propertyRouter.get('/', getPropertyController);
propertyRouter.get('/details/:id', getPropertyController);
propertyRouter.post('/create', createPropertyController);
propertyRouter.patch('/:id', updatePropertyController);
propertyRouter.delete('/:id', deletePropertyController);
propertyRouter.get('/province', findCategoryController);
propertyRouter.get('/city/:id', findCityController);

export { propertyRouter };
