import styled from 'styled-components';

export const tableContainerStyle = {
  margin: '2.25rem 1.5rem',
  width: 'calc(100% - 3rem)'
};

export const tableHeadStyle = {
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  fontSize: '0.75rem',
  opacity: 0.6
};

export const tableEmptyStyle = {
  fontSize: '1.125rem',
  fontWeight: '500',
  textAlign: 'center',
  padding: '2.25rem 0'
};

export const StyledContainer = styled.section`
  width: 100%;
  height: 100%;

  & > nav {
    margin-left: 1.5rem;
    margin-top: 3rem;
    display: flex;
  }
`;

export const StyledProductImage = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  object-fit: cover;
  border-radius: 0.5rem;

  ${({ $hasImage }) =>
    !$hasImage &&
    `
    background: #9758A6CC;
  `}
`;

export const StyledFilterButton = styled.button`
  width: 10rem;
  height: 2.5rem;
  background: none;
  color: #fff;
  font-size: 0.875rem;
  cursor: pointer;
  text-transform: capitalize;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid transparent;
  transition: all 150ms ease-in-out;

  &:hover {
    color: #9758a6;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    color: #9758a6;
    border-color: #9758a6;
    font-weight: 500;
  `}
`;
