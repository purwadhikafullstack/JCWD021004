import Product from '../models/product.model';
import ProductCategory from '../models/productCategory.model';
import { Op } from 'sequelize';
import Size from '../models/size.model';
import ProductImage from '../models/productImage.model';
import Stock from '../models/stock.model';
import Colour from '../models/colour.model';
import PropertyCategory from '../models/propertyCategory.model';

export const getPropertyQuery = async (
  name = null,
  gender = null,
  group = null,
  category = null,
  id = null,
  sortBy = 'name',
  orderBy = 'ASC',
  page = null,
  pageSize = null,
) => {
  const offset = (page - 1) * pageSize;
  try {
    const filter = {};
    if (id)
      filter.where = {
        id: {
          [Op.eq]: id,
        },
      };
    if (name)
      filter.where = {
        ...filter.where,
        name: {
          [Op.like]: `%${name}%`,
        },
      };

    if (gender) {
      if (group) {
        if (category) {
          filter.where = {
            ...filter.where,
            [Op.and]: [
              {
                '$category.parent.parent.name$': gender,
              },
              {
                '$category.parent.name$': group,
              },
              {
                '$category.name$': category.replace(/-/g, ' '),
              },
            ],
          };
        } else {
          filter.where = {
            ...filter.where,
            [Op.and]: [
              {
                '$category.parent.parent.name$': gender,
              },
              {
                '$category.parent.name$': group,
              },
            ],
          };
        }
      } else {
        filter.where = {
          ...filter.where,
          '$category.parent.parent.name$': gender,
        };
      }
    }
    const res = await Product.findAndCountAll({
      attributes: ['id', 'name', 'price', 'description'],
      include: [
        {
          model: ProductCategory,
          as: 'category',
          attributes: ['id', 'name'],
          include: [
            {
              model: ProductCategory,
              as: 'parent',
              include: [
                {
                  model: ProductCategory,
                  as: 'parent',
                },
                {
                  model: Size,
                  as: 'size',
                },
              ],
            },
            {
              model: Size,
              as: 'size',
            },
          ],
        },
        {
          model: ProductImage,
          as: 'picture',
        },
        {
          model: Stock,
          as: 'stocks',
          include: [{ model: Colour, as: 'colour' }],
        },
      ],
      order: [[`${sortBy}`, `${orderBy}`]],
      ...filter,
      subQuery: false,
      limit: id ? 1000 : +pageSize,
      offset: offset,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const getPropertyByName = async ({ name = null }) => {
  try {
    const res = await Product.findOne({
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
  name = null,
  price = null,
  description = null,
  productCategoryId = null,
) => {
  try {
    const res = await Product.create({
      name,
      price,
      description,
      productCategoryId,
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
    const res = await Product.destroy({
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

export const findCityQuery = async (id) => {
  try {
    return await City.findAll({
      where: {
        city_id: id,
      },
    });
  } catch (err) {
    throw err;
  }
};
