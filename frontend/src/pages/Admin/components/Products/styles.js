export {
  StyledProductImage,
  tableContainerStyle,
  tableHeadStyle,
  tableEmptyStyle
} from '../Orders/styles';

import styled from 'styled-components';

export const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;

  & > button {
    width: 12.5rem;
    margin-top: 3rem;
    margin-right: 1.5rem;
  }
`;

export const StyledActionButton = styled.button`
  background: none;
  color: #fff;
  margin: 0 0.375rem;
  border-radius: 4px;
  transition: all 150ms ease-in-out;
  width: 2.25rem;
  height: 2.25rem;
  cursor: pointer;
  display: inline-grid;
  place-items: center;

  &:hover {
    background: #323232;
  }
`;
