import styled from 'styled-components';

import { StyledSection as BaseStyledSection } from '../Home/styles';
export { StyledBanner, StyledEmpty } from '../Home/styles';

export const StyledSection = styled(BaseStyledSection)`
  padding: 1.5rem 0 6.25rem;
  gap: 3rem;
`;

export const StyledCategory = styled.button`
  font-size: 1.0625rem;
  color: ${({ $active }) => ($active ? '#9758a6' : '#9a9a9d')};
  transition: all 150ms ease-in-out;
  padding-bottom: 8px;
  border-bottom: 2px solid
    ${({ $active }) => ($active ? '#9758a6' : 'transparent')};
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    color: #9758a6;
  }
`;

export const StyledProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 1.75rem;
  width: 85%;

  @media screen and (max-width: 1480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;
