import {
  createPropertyService,
  deletePropertyService,
  getPropertyService,
  updatePropertyService,
  findCategoryService,
  findCityService,
} from '../services/property.services';

export const getPropertyController = async (req, res) => {
  try {
    const { name, gender, group, category, sortBy, orderBy, page, pageSize } =
      req.query;
    const { id } = req.params;
    const result = await getPropertyService(
      name,
      gender,
      group,
      category,
      id,
      sortBy,
      orderBy,
      page,
      pageSize,
    );
    return res.status(200).json({
      message: 'Get Property Success',
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const createPropertyController = async (req, res) => {
  try {
    const { user_id } = req.user;
    const {
      propertyName,
      selectedCategory,
      description,
      address,
      selectedCity,
    } = req.body;

    const result = await createPropertyService(
      propertyName,
      selectedCategory,
      description,
      address,
      selectedCity,
      user_id,
    );
    return res.status(200).json({
      message: 'Create Property Success',
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const updatePropertyController = async (req, res) => {
  try {
    const { name, price, description, productCategoryId } = req.body;
    const { id } = req.params;
    const result = await updatePropertyService(
      name,
      price,
      description,
      productCategoryId,
      id,
    );
    return res.status(201).json({
      message: 'Update Property Success',
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const deletePropertyController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deletePropertyService(id);
    return res.status(200).json({
      message: 'Delete Property Success',
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const findCategoryController = async (req, res) => {
  try {
    const result = await findCategoryService();

    return res.status(200).json({
      message: 'success',
      data: result,
    });
  } catch (err) {
    console.log('error controller', err);
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const findCityController = async (req, res) => {
  try {
    const result = await findCityService();

    return res.status(200).json({
      message: 'success',
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
