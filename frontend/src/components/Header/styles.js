import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20rem 0 12.5rem;
  gap: 2rem;
  height: 72px;

  & > nav {
    display: flex;
    gap: 2rem;
  }

  @media screen and (max-width: 900px) {
    padding: 0 8rem 0 1rem;
  }
`;

export const StyledLinkButton = styled.button`
  color: #222;
  background: none;
  transition: all 150ms ease-in-out;
  font-size: 0.9375rem;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &:hover {
    color: #9758a6;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    color: #9758a6;
    font-weight: 500;
    border-color: #9758a6;
  `}
`;

export const StyledContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  img {
    width: 26px;
    height: 22px;
    object-fit: fill;
  }

  & > div:first-child {
    height: 30px;
    display: flex;
    padding-right: 1.5rem;
    border-right: 1px solid #222;
    align-items: center;
  }
`;

export const StyledCartButton = styled.button`
  background: none;
  position: relative;
  cursor: pointer;

  ${props =>
    props['data-cart-length'] > 0 &&
    `
    &::after {
      content: attr(data-cart-length);
      background: #9758a6;
      width: 1.25rem;
      height: 1.25rem;
      font-size: 0.75rem;
      position: absolute;
      display: grid;
      border-radius: 50%;
      color: #fff;
      place-items: center;
      top: -0.625rem;
      right: -0.625rem;
    }
  `}
`;

export const StyledUserInfo = styled.div`
  position: absolute;
  height: 40px;
  overflow: hidden;
  top: -0.8125rem;
  right: -7.6875rem;
  background: #fff;
  padding: 1rem 0.75rem 1.25rem 0.75rem;
  border-radius: 8px;
  transition: all 150ms ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.75rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    & > p {
      color: #222;
      font-size: 0.9375rem;
      font-weight: 300;
    }
  }

  & > button {
    background: none;
    color: #9758a6;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
  }

  & > button:hover {
    text-decoration: underline;
  }

  &:hover {
    height: ${({ isExtended }) => (isExtended ? 104 : 80)}px;
    box-shadow: 0px 10px 40px 0px #00000018;
  }
`;
