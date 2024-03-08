import styled from 'styled-components';

export const StyledBanner = styled.img`
  width: 100%;
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.25rem;
  padding: 2.875rem 0 3.875rem;
  background: ${({ $background }) => $background || '#fff'};
`;

export const StyledEmpty = styled.h2`
  margin: 0 1.5rem;
  font-size: 2rem;
  font-weight: 700;
  color: #424242;
`;
