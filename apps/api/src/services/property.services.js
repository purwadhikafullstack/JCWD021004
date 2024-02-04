import {
  createPropertyQuery,
  deletePropertyQuery,
  getPropertyByName,
  getPropertyQuery,
  updatePropertyQuery,
  findCategoryQuery,
  findCityQuery,
} from '../queries/product.queries';

export const getPropertyService = async (
  name,
  gender,
  group,
  category,
  id,
  sortBy,
  orderBy,
  page,
  pageSize,
) => {
  try {
    const res = await getPropertyQuery(
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

    return res;
  } catch (err) {
    throw err;
  }
};

export const createPropertyService = async (
  name,
  price,
  description,
  productCategoryId,
) => {
  try {
    const check = await getPropertyByName({ name });
    console.log('name', name);
    if (check) throw new Error('Product with that name is already exist');

    const res = await createPropertyQuery(
      name,
      price,
      description,
      productCategoryId,
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const updatePropertyService = async (
  name,
  price,
  description,
  productCategoryId,
  id,
) => {
  try {
    const check = await getPropertyQuery(id);

    if (!check) throw new Error('Product didnt exist');

    const res = await updatePropertyQuery(
      name,
      price,
      description,
      productCategoryId,
      id,
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const deletePropertyService = async (id) => {
  try {
    const check = await getPropertyQuery(id);
    if (!check) throw new Error('Product doesnt exist');
    const res = await deletePropertyQuery(id);
    return res;
  } catch (err) {
    throw err;
  }
};

export const findCategoryService = async () => {
  try {
    const res = await findCategoryQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

export const findCityService = async (id) => {
  try {
    const res = await findCityQuery(id);
    return res;
  } catch (err) {
    throw err;
  }
};
