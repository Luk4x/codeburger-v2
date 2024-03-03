import styled from 'styled-components';

export const StyledContainer = styled.div`
  min-width: 16.25rem;

  & > div {
    height: 100vh;
    position: fixed;
    width: 16.25rem;
    padding: 3rem 1rem;
    background: #1e1e1e;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > nav {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

export const StyledButton = styled.button`
  background: ${({ $isActive }) => ($isActive ? '#323232' : 'none')};
  width: 100%;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  color: ${({ $isActive }) => ($isActive ? '#9758a6' : '#fff')};
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 150ms ease-in-out;

  &:hover {
    background: #323232;
  }
`;
