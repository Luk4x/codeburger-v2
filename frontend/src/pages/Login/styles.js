import styled from 'styled-components';

import BackgroundImage from '../../assets/background.svg';

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('${BackgroundImage}');
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSideImage = styled.img`
  height: 70%;
  border-radius: 10px 0 0 10px;
`;

export const StyledForm = styled.form`
  background: #373737;
  box-shadow: 0px 4px 15px 0px #4a90e23d;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 1.5625rem 4.6875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  & > h1 {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: #fff;
    margin: 30px auto 0 auto;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  & > p {
    font-size: 0.875rem;
    line-height: 1rem;
    color: #fff;

    & > a {
      color: #fff;
    }
  }
`;
