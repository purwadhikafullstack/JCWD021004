import { Op } from 'sequelize';
import Property from '../models/property.model';
import City from '../models/city.model';
import PropertyCategory from '../models/propertyCategory.model';

export const getPropertyQuery = async () => {
  try {
    return res;
  } catch (err) {
    throw err;
  }
};

export const getPropertyDetailQuery = async (property_id) => {
  try {
    // Assuming Property is your Sequelize model
    return await Property.findOne({ where: { property_id: property_id } });
  } catch (err) {
    throw err;
  }
};

export const getTenantPropertyQuery = async (tenant_id) => {
  try {
    return await Property.findAll({ where: { tenant_id: tenant_id } });
  } catch (err) {
    throw err;
  }
};

export const getPropertyByName = async ({ name = null }) => {
  try {
    const res = await Property.findOne({
      where: {
        name: name,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const createPropertyQuery = async (
  name,
  category_id,
  description,
  address,
  city_id,
  id = null,
) => {
  try {
    const res = await Property.create({
      name,
      category_id,
      description,
      address,
      city_id,
      tenant_id: id,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const updatePropertyQuery = async (
  name,
  price,
  description,
  productCategoryId,
  id,
) => {
  try {
    const toBeUpdated = {};
    if (name) toBeUpdated.name = name;
    if (price) toBeUpdated.price = price;
    if (description) toBeUpdated.description = description;
    if (productCategoryId) toBeUpdated.productCategoryId = productCategoryId;

    const res = await Product.update(
      {
        ...toBeUpdated,
      },
      {
        where: {
          id: {
            [Op.eq]: id,
          },
        },
      },
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const deletePropertyQuery = async (id) => {
  try {
    const res = await Property.destroy({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const findCategoryQuery = async () => {
  try {
    return await PropertyCategory.findAll();
  } catch (err) {
    throw err;
  }
};

export const findCityQuery = async () => {
  try {
    return await City.findAll();
  } catch (err) {
    throw err;
  }
};

export const findPropertyByCityQuery = async (selectedCity) => {
  try {
    const properties = await Property.findAll({
      where: {
        city_id: selectedCity,
      },
    });
    return properties;
  } catch (err) {
    throw err;
  }
};
