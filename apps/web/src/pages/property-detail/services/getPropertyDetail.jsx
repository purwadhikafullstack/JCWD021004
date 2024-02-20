import axios from 'axios';

export const getPropertyDetails = async (propertyId) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/property/details/${propertyId}`,
    );

    const property = response?.data?.data;

    return property;
  } catch (error) {
    console.log('ini errornya bang', error);
    console.error(error);
  }
};
