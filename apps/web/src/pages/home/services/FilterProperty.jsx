import axios from 'axios';

export const FilterProperty = async (selectedCityId) => {
  try {
    const response = await axios.get(
      'http://localhost:8000/api/property/search',
      {
        params: { selectedCity: selectedCityId },
      },
    );

    const properties = response?.data?.data;
    return properties;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
