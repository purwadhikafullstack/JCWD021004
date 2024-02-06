import { Router } from 'express';
import {
  createPropertyController,
  deletePropertyController,
  getPropertyController,
  updatePropertyController,
  findCategoryController,
  findCityController,
} from '../controllers/property.controller';
import { verifyToken } from '../middleware/auth.middleware';
const propertyRouter = Router();

propertyRouter.get('/', getPropertyController);
propertyRouter.get('/details/:id', getPropertyController);
propertyRouter.post('/create', verifyToken, createPropertyController);
propertyRouter.patch('/:id', updatePropertyController);
propertyRouter.delete('/:id', deletePropertyController);
propertyRouter.get('/property-category', findCategoryController);
propertyRouter.get('/city', findCityController);

export { propertyRouter };
