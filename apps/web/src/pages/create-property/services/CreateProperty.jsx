import axios from 'axios';

export const property = async (
  propertyName,
  propertyCategoryId,
  description,
  address,
  cityId,
  setLoading,
  openSuccessModal,
  openErrorModal,
) => {
  try {
    setLoading(true);
    await axios.post('http://localhost:8000/api/auth/tenant-registration', {
      propertyName,
      propertyCategoryId,
      description,
      address,
      cityId,
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
