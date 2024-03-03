import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import LoginImage from '../../assets/login.svg';
import LogoImage from '../../assets/logo.svg';
import { InputField, Button, Alert } from '../../components';
import { useBasicData } from '../../hooks';
import { codeBurgerAPI } from '../../services/api';
import { toast } from '../../utils/toast';
import { schema, inputs } from './data';
import { StyledContainer, StyledSideImage, StyledForm } from './styles';

export function Login() {
  const { updateUser } = useBasicData();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async formData => {
    const { data, status } = await toast.promise(
      codeBurgerAPI.post('sessions', { ...formData }),
      successData => `Bem-vindo(a) de volta, ${successData.data.name}!`
    );

    if (status === 200) {
      updateUser(data);

      setTimeout(() => {
        if (data.admin) {
          navigate('/gestao');
          return;
        }

        navigate('/');
      }, 800);
    }
  };

  return (
    <StyledContainer>
      <StyledSideImage src={LoginImage} alt="Hamburger em cima de uma mesa" />
      <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
        <img src={LogoImage} alt="Logo do CodeBurger" />
        <h1>Entre e Faça um Pedido!</h1>
        {inputs.map(({ label, type }) => (
          <div key={label}>
            <InputField
              label={label}
              inputProps={{ type, ...register(type) }}
            />
            {errors?.[type] && (
              <Alert variant="error">{errors[type]?.message}</Alert>
            )}
          </div>
        ))}
        <Button type="submit">Entrar</Button>
        <p>
          Não possui uma conta? <Link to="/cadastrar">Cadastre-se</Link>
        </p>
      </StyledForm>
    </StyledContainer>
  );
}
