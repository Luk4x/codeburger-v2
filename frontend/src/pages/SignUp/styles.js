import styled from 'styled-components';

import BackgroundImage from '../../assets/background.svg';

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem 0;
  background: url('${BackgroundImage}');
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

  @media screen and (max-width: 1320px) {
    align-items: normal;
  }

  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: 70%;

  @media screen and (max-width: 1320px) {
    grid-template-columns: 1fr;
    height: fit-content;
    width: 70%;
  }

  @media screen and (max-width: 870px) {
    width: 80%;
  }

  @media screen and (max-width: 760px) {
    width: 94%;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const StyledSideImage = styled.img`
  border-radius: 10px 0 0 10px;
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media screen and (max-width: 1320px) {
    height: 380px;
    min-width: 37.5rem;
    border-radius: 10px 10px 0 0;
  }

  @media screen and (max-width: 640px) {
    min-width: 100%;
    border-radius: 0;
  }
`;

export const StyledForm = styled.form`
  background: #373737;
  box-shadow: 0px 4px 15px 0px #4a90e23d;
  border-radius: 0 10px 10px 0;
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
    text-align: center;

    & > a {
      color: #fff;
    }
  }

  @media screen and (max-width: 1320px) {
    width: 100%;
    min-width: 37.5rem;
    height: fit-content;
    border-radius: 0 0 10px 10px;

    button {
      width: 200px;
      align-self: end;
    }
  }

  @media screen and (max-width: 640px) {
    min-width: 100%;
    border-radius: 0;
    height: 100%;

    button {
      width: 100%;
    }
  }
`;
