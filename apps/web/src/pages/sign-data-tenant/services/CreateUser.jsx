import axios from 'axios';

export const register = async (
  email,
  username,
  password,
  setLoading,
  openSuccessModal,
  openErrorModal,
) => {
  try {
    setLoading(true);
    await axios.post('http://localhost:8000/api/auth/tenant-registration', {
      email,
      username,
      password,
    });
    setLoading(false);
    openSuccessModal();
    console.log('success');
  } catch (err) {
    setLoading(false);
    openErrorModal();
    console.log('ini errornya', err.message);
  }
};
