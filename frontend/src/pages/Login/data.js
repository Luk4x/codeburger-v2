import * as Yup from 'yup';

export const inputs = [
  {
    label: 'E-mail',
    type: 'email'
  },
  {
    label: 'Senha',
    type: 'password'
  }
];

export const schema = Yup.object().shape({
  email: Yup.string()
    .email('Este e-mail é inválido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string().required('A senha é obrigatória.')
});
