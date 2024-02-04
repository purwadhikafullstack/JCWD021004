import * as Yup from 'yup';

export const SignUpScheme = Yup.object().shape({
  email: Yup.string().email('email is invalid').required('email is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});
