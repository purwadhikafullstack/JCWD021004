import {
  createPropertyQuery,
  getTenantPropertyQuery,
  getPropertyDetailQuery,
  deletePropertyQuery,
  getPropertyByName,
  getPropertyQuery,
  updatePropertyQuery,
  findCategoryQuery,
  findCityQuery,
  findPropertyByCityQuery,
} from '../queries/property.queries';

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

export const getPropertyDetailService = async (property_id) => {
  try {
    const res = await getPropertyDetailQuery(property_id);

    return res;
  } catch (err) {
    throw err;
  }
};

export const getTenantPropertyService = async (tenant_id) => {
  try {
    const res = await getTenantPropertyQuery(tenant_id);
    return res;
  } catch (err) {
    throw err;
  }
};

export const createPropertyService = async (
  propertyName,
  selectedCategory,
  description,
  address,
  selectedCity,
  id,
) => {
  try {
    const check = await getPropertyByName({ propertyName });
    if (check) throw new Error('Property with that name is already exist');

    const res = await createPropertyQuery(
      propertyName,
      selectedCategory,
      description,
      address,
      selectedCity,
      id,
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

export const findCityService = async () => {
  try {
    const res = await findCityQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

export const findPropertyByCityService = async (selectedCity) => {
  try {
    const res = await findPropertyByCityQuery(selectedCity);
    return res;
  } catch (err) {
    throw err;
  }
};
