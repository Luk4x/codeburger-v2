import * as Yup from 'yup';

export const inputs = [
  {
    label: 'Nome',
    type: 'name'
  },
  {
    label: 'E-mail',
    type: 'email'
  },
  {
    label: 'Senha',
    type: 'password'
  },
  {
    label: 'Confirmar Senha',
    type: 'confirmPassword'
  }
];

export const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório.'),
  email: Yup.string()
    .email('Este e-mail é inválido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string()
    .required('A senha é obrigatória.')
    .min(6, 'A senha deve ter pelo menos 6 dígitos.'),
  confirmPassword: Yup.string()
    .required('Confirme a sua senha.')
    .oneOf([Yup.ref('password')], 'As senhas não conferem.')
});
