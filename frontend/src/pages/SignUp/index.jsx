import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast as ReactToast } from 'react-toastify';

import LogoImage from '../../assets/logo.svg';
import SignUpImage from '../../assets/signup.svg';
import { InputField, Button, Alert } from '../../components';
import { useBasicData } from '../../hooks';
import { codeBurgerAPI } from '../../services/api';
import { toast } from '../../utils/toast';
import { schema, inputs } from './data';
import {
  StyledContainer,
  StyledSideImage,
  StyledForm,
  StyledWrapper
} from './styles';

export function SignUp() {
  const { updateUser } = useBasicData();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async ({ confirmPassword: _, ...formData }) => {
    const { data: signUpData, status: signUpStatus } = await toast.promise(
      codeBurgerAPI.post('users', { ...formData })
    );

    if (!signUpData || signUpStatus !== 201) {
      return;
    }

    const { data: loginData, status: loginStatus } = await toast.promise(
      codeBurgerAPI.post('sessions', { ...formData }),
      successData =>
        `Primeira vez por aqui? Estamos à disposição, ${successData.data.name}!`
    );

    if (!loginData && loginStatus !== 200) {
      ReactToast.success(
        `Sua conta foi criada, ${signUpData.data.name}. Faça Login!`
      );
      navigate('/entrar');
      return;
    }

    updateUser(loginData);
    setTimeout(() => {
      if (loginData.admin) {
        navigate('/gestao');
        return;
      }

      navigate('/');
    }, 800);
  };

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledSideImage
          src={SignUpImage}
          alt="Carnes de hamburger sendo preparadas"
        />
        <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
          <img src={LogoImage} alt="Logo do CodeBurger" />
          <h1>Crie uma conta!</h1>
          {inputs.map(({ label, type }) => (
            <div key={label}>
              <InputField
                label={label}
                inputProps={{
                  type: type === 'confirmPassword' ? 'password' : type,
                  ...register(type)
                }}
              />
              {errors?.[type] && (
                <Alert variant="error">{errors[type]?.message}</Alert>
              )}
            </div>
          ))}
          <Button type="submit">Cadastrar</Button>
          <p>
            Já possui uma conta? <Link to="/entrar">Faça Login</Link>
          </p>
        </StyledForm>
      </StyledWrapper>
    </StyledContainer>
  );
}
