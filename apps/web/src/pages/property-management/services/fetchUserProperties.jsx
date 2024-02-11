import axios from 'axios';

export const fetchUserProperties = async (tenantId) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/property/tenant-property/${tenantId}`,
    );

    const properties = response?.data?.data;
    return properties;
  } catch (error) {
    console.log('ini errornya bang', error);
    console.error(error);
  }
};
