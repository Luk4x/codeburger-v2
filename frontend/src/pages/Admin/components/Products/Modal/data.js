import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório.'),
  price: Yup.number().required('O preço é obrigatório.'),
  category_id: Yup.number().required('A categoria é obrigatória.'),
  file: Yup.mixed()
    .required('A imagem é obrigatória.')
    .test(
      'fileSize',
      'A imagem pode ter no máximo 10MB.',
      file => file?.size <= 10 * 1000000
    ),
  offer: Yup.boolean()
});
