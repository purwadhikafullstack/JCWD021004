import axios from 'axios';

export const login = async (email, password) => {
  try {
    await axios.post('http://localhost:8000/api/auth/login', {
      email,
      password,
    });
    console.log('Success');
  } catch (err) {
    console.log('ini errornya', err.message);
  }
};
