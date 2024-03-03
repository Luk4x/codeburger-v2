import styled from 'styled-components';

export const StyledButton = styled.button`
  background: #9758a6;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: #eee;
  cursor: pointer;
  border-radius: 4px;
  height: 2.5rem;
  width: 100%;
  transition: opacity ease-in-out 0.2s;
  box-shadow: 0px 5px 10px 0px #9758a638;

  &:hover {
    opacity: 0.9;
  }
`;
