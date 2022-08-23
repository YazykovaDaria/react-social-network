import * as yup from 'yup';

export const validationLoginScheema = yup.object().shape({
  email: yup.string().email('add valid email').required('required to field'),
  password: yup.string().min(6, 'minimum six symbols').required('required to field'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords do\'t match').required('required to field'),
  rememberMe:yup.boolean()
})