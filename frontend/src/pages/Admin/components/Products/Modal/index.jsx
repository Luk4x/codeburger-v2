import { yupResolver } from '@hookform/resolvers/yup';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MaterialModal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { Alert } from '../../../../../components/Alert';
import { useBasicData } from '../../../../../hooks/BasicData';
import { codeBurgerAPI } from '../../../../../services/api';
import { formatPrice } from '../../../../../utils/formatNumber';
import { toast } from '../../../../../utils/toast';
import { schema } from './data';
import {
  basicStyle,
  StyledHeader,
  StyledForm,
  StyledImageInput,
  StyledSideInputs
} from './styles';

export function Modal({ data, ...props }) {
  const { categories, updateProducts } = useBasicData();

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    values: data
      ? {
          name: data.name,
          price: data.price,
          category_id: data.category_id,
          offer: data.offer
        }
      : { category_id: categories[0].id, offer: false }
  });

  useMemo(() => {
    if (data) {
      fetch(data.url)
        .then(res => res.blob())
        .then(async blob => {
          const file = new File([blob], `image.${blob.type.split('/')[1]}`, {
            type: blob.type
          });

          setValue('file', file);
        });
    }
  }, [data]);

  const onSubmit = async formData => {
    const formattedFormData = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formattedFormData.append(key, value);
    });

    const request = () => {
      if (data) {
        return codeBurgerAPI.put(`/products/${data.id}`, formattedFormData);
      }

      return codeBurgerAPI.post('/products', formattedFormData);
    };

    toast.promise(
      request(),
      successData => {
        const { product, updatedProducts } = successData.data;

        updateProducts(updatedProducts);

        return `Produto ${product.name} ${data ? 'editado' : 'criado'} com sucesso!`;
      },
      `${data ? 'Editando' : 'Criando'} produto...`
    );
  };

  return (
    <MaterialModal
      {...props}
      aria-labelledby="modal de produtos"
      aria-describedby="modal de produtos"
    >
      <Box sx={basicStyle}>
        <StyledHeader>
          <h4>{data ? 'Editar Produto' : 'Novo Produto'}</h4>
          <button onClick={props?.onClose}>
            <CloseIcon />
          </button>
        </StyledHeader>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledImageInput>
            {watch('file') ? (
              <img
                src={URL.createObjectURL(watch('file'))}
                alt="Imagem do Produto"
              />
            ) : (
              <span>
                <ImageOutlinedIcon fontSize="inherit" />
              </span>
            )}
            <input
              type="file"
              accept="image/png, image/jpeg"
              id="product-image-input"
              onChange={e => {
                const fileList = e.target.files;

                if (fileList.length > 0) {
                  setValue('file', fileList[0]);
                }
              }}
            />
            {errors?.file?.message && (
              <Alert variant="error">{errors?.file?.message}</Alert>
            )}
          </StyledImageInput>
          <StyledSideInputs>
            <TextField
              id="product-name"
              label="Nome"
              variant="filled"
              value={watch('name')}
              onChange={e => setValue('name', e.target.value)}
              style={{ width: '100%' }}
            />
            {errors?.name?.message && (
              <Alert variant="error">{errors?.name?.message}</Alert>
            )}
            <TextField
              id="product-price"
              label="Preço"
              variant="filled"
              value={formatPrice(watch('price') || 0)}
              onChange={e => {
                const convertedToNumber = Number(
                  e.target.value.split('$')[1].replace(',', '.')
                );

                setValue('price', convertedToNumber);
              }}
              style={{ width: '100%' }}
            />
            {errors?.price?.message && (
              <Alert variant="error">{errors?.price?.message}</Alert>
            )}
            <FormControl variant="filled" sx={{ width: '100%' }}>
              <InputLabel id="category-select-label">Categoria</InputLabel>
              <Select
                value={watch('category_id') || categories[0].id}
                onChange={e => setValue('category_id', Number(e.target.value))}
              >
                {categories.map(({ id, name }) => (
                  <MenuItem value={id} key={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {errors?.category_id?.message && (
              <Alert variant="error">{errors?.category_id?.message}</Alert>
            )}
            <div>
              <span>
                <Switch
                  checked={watch('offer')}
                  onChange={e => setValue('offer', e.target.checked)}
                />
                <p>Em oferta</p>
              </span>
              <Button
                startIcon={data ? <EditOutlinedIcon /> : <AddIcon />}
                variant="contained"
                sx={{
                  height: '2.5rem',
                  textTransform: 'capitalize',
                  fontSize: '0.9375rem'
                }}
                type="submit"
              >
                {data ? 'Atualizar Produto' : 'Criar Produto'}
              </Button>
            </div>
          </StyledSideInputs>
        </StyledForm>
      </Box>
    </MaterialModal>
  );
}
