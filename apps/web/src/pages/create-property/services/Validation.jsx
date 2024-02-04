import * as Yup from 'yup';

export const SignUpScheme = Yup.object().shape({
  email: Yup.string().email('email is invalid').required('email is required'),
  propertyName: Yup.string().required('Property Name is required'),
  propertyCategory: Yup.string().required('Property Category is required'),
  description: Yup.string().required('Description is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
});
