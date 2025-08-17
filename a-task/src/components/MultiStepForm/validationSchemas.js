import * as Yup from 'yup';

export const validationSchemas = [
  Yup.object({
    firstName: Yup.string().min(2, 'Too short').required('First name is required'),
    lastName: Yup.string().min(2, 'Too short').required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  }),
  Yup.object({
    username: Yup.string()
      .matches(/^[a-zA-Z0-9_]+$/, 'Letters, numbers and underscores only')
      .min(3, 'Must be at least 3 characters')
      .required('Username is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[0-9]/, 'Must contain a number')
      .matches(/[A-Z]/, 'Must contain an uppercase letter')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
  }),
  Yup.object({
    qualification: Yup.string().required('Qualification is required'),
    gender: Yup.string().oneOf(['male', 'female', 'other'], 'Select a gender').required('Gender is required'),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms'),
  }),
  Yup.object(), // Review step - no validation
];
