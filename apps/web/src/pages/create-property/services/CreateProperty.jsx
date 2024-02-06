import axios from 'axios';

export const property = async (
  propertyName,
  selectedCategory,
  description,
  address,
  selectedCity,
  setLoading,
  openSuccessModal,
  openErrorModal,
) => {
  const token = localStorage.getItem('token');
  try {
    setLoading(true);
    await axios.post(
      'http://localhost:8000/api/property/create',
      {
        propertyName,
        selectedCategory,
        description,
        address,
        selectedCity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    setLoading(false);
    openSuccessModal();
    console.log('success');
  } catch (err) {
    console.log(err);
    setLoading(false);
    openErrorModal();
    console.log('ini errornya', err.message);
  }
};
