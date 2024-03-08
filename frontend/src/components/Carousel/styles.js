import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;

  .rec.rec-arrow {
    color: #efefef;
    background: #9758a6;
    border: 2px solid transparent;
    padding-bottom: 3.375rem;
    padding-left: 0.125rem;
    border-radius: 0.5rem;
  }

  .rec.rec-arrow:hover {
    border-color: #9758a6;
    background: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border-color: transparent;
    background: #efefef;
    color: gray;
    opacity: 0.8;
  }

  & > div {
    max-width: 90%;
  }
`;
