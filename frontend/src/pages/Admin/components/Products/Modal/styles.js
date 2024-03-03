import styled from 'styled-components';

export const basicStyle = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -30%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #323232;
  margin-bottom: 0.75rem;

  & > h4 {
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
  }

  & > button {
    background: none;
    color: #fff;
    transition: all 150ms ease-in-out;
    width: 2.25rem;
    height: 2.25rem;
    cursor: pointer;
    border-radius: 4px;
    display: grid;
    place-items: center;

    &:hover {
      background: #323232;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 1rem;
`;

export const StyledImageInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 55%;

  & > span {
    border: 2px dashed #9758a6;
    border-radius: 8px;
    color: #9758a6;
    height: 17.5rem;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: 3.75rem;
  }

  & > img {
    width: 100%;
    height: 17.5rem;
    border-radius: 8px;
    object-fit: cover;
  }

  & > input[type='file'] {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 17.5rem;
    cursor: pointer;
  }
`;

export const StyledSideInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 1rem;

  & > div {
    display: flex;
    justify-content: space-between;

    & > span {
      position: relative;
      left: -0.5rem;
      display: flex;
      color: #fff;
      flex-direction: column-reverse;
      align-items: start;

      & > p {
        position: relative;
        left: 0.5rem;
      }
    }

    & > button {
      margin-top: 0.5625rem;
    }
  }
`;
