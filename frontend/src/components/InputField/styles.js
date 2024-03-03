import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > label {
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: #fff;
  }

  & > input {
    border-radius: 4px;
    box-shadow: 3px 3px 10px 0px #4a90e230;
    background: #fff;
    font-size: 0.875rem;
    padding: 0 0.625rem;
    line-height: 1.125rem;
    height: 2.5rem;
    width: 100%;
  }
`;
