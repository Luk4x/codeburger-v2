import styled from 'styled-components';

const variants = {
  error: '#CB1D1D'
};

export const StyledContainer = styled.div`
  width: 100%;
  height: 2.125rem;
  border-radius: 4px;
  display: grid;
  place-items: center;
  background: ${({ $variant }) => `${variants[$variant]}66`};

  & > p {
    width: 100%;
    text-align: center;
    font-size: 0.8125rem;
    color: #fff;
  }
`;
