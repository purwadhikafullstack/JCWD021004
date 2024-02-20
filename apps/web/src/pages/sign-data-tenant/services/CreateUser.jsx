import axios from 'axios';

export const register = async (
  email,
  setLoading,
  openSuccessModal,
  openErrorModal,
) => {
  try {
    setLoading(true);
    await axios.patch('http://localhost:8000/api/auth/tenant-registration', {
      email,
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
