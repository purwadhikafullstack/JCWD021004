import axios from 'axios';

export const getCategory = async () => {
  try {
    const response = await axios.get(
      'http://localhost:8000/api/property/property-category',
    );
    const category = response?.data?.data;

    return category;
  } catch (err) {
    console.log(err);
  }
};

export const getCity = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/api/property/city`);
    const city = response?.data?.data;
    return city;
  } catch (err) {
    console.log(err);
  }
};
