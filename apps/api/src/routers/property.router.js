import { Router } from 'express';
import {
  createPropertyController,
  deletePropertyController,
  getPropertyController,
  getTenantPropertyController,
  getPropertyDetailController,
  updatePropertyController,
  findCategoryController,
  findCityController,
  findPropertyByCityController,
} from '../controllers/property.controller';
import { verifyToken } from '../middleware/auth.middleware';
const propertyRouter = Router();

propertyRouter.get('/', getPropertyController);
propertyRouter.get('/tenant-property/:tenant_id', getTenantPropertyController);
propertyRouter.get('/details/:property_id', getPropertyDetailController);
propertyRouter.post('/create', verifyToken, createPropertyController);
propertyRouter.patch('/:id', updatePropertyController);
propertyRouter.delete('/:id', deletePropertyController);
propertyRouter.get('/property-category', findCategoryController);
propertyRouter.get('/city', findCityController);
propertyRouter.get('/search', findPropertyByCityController);

export { propertyRouter };
