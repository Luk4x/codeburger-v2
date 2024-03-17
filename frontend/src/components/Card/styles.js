import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledImage = styled.img`
  min-width: ${({ $size }) => `${$size}px`};
  width: 100%;
  height: ${({ $size }) => `${$size}px`};
  object-fit: cover;
  background: ${({ $hasImage }) => ($hasImage ? 'none' : '#9758A6CC')};
  border-radius: 8px;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 1.375rem;
    font-weight: 700;
    color: #424242;
  }

  p {
    margin: 0.25rem 0;
    font-size: 1.25rem;
    font-weight: 500;
    color: #212121;
  }
`;
