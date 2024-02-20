import * as Yup from 'yup';

export const SignUpScheme = Yup.object().shape({
  propertyName: Yup.string().required('Property Name is required'),
  description: Yup.string().required('Description is required'),
  address: Yup.string().required('Address is required'),
});
