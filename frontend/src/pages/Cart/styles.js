import styled from 'styled-components';

import { StyledSection as BaseStyledSection } from '../Home/styles';
export { StyledBanner, StyledEmpty } from '../Home/styles';

export const StyledSection = styled(BaseStyledSection)`
  & > div {
    width: 90%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;

    @media screen and (max-width: 1180px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const StyledCart = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledCartInfo = styled.div`
  display: grid;
  grid-template-columns: 1.2fr repeat(3, 0.8fr);

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > span {
      opacity: 0.8;
      border-bottom: 2px solid #9a9a9d;
      font-size: 1.0625rem;
      padding-bottom: 0.5rem;
      text-align: center;
      color: #9a9a9d;
      width: 100%;
      margin-bottom: 1.5rem;
    }

    & > p {
      margin-top: 0.25rem;
      font-size: 1.125rem;
      font-weight: 500;
      color: #000000;
    }
  }

  .preview {
    align-items: start;

    & > div {
      display: flex;
      gap: 8px;

      & > img {
        height: 8.4375rem;
        width: 8.4375rem;
        object-fit: cover;
        border-radius: 8px;
      }

      & > p {
        margin-top: 0.25rem;
        font-size: 1rem;
        font-weight: 400;
        color: #000000;
      }
    }
  }

  .action {
    & > div {
      margin-top: 2px;
      display: flex;
      align-items: center;
      gap: 1rem;

      & > p {
        font-size: 1rem;
        font-weight: 400;
        color: #000000;
      }

      & > button {
        padding-bottom: 1.75rem;
        background: none;
        font-size: 1.5rem;
        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

export const StyledSummary = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  h3 {
    font-size: 0.875rem;
    font-weight: 500;
    color: #222222;
    margin-bottom: 1rem;
  }

  .space {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-weight: 300;
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  }

  & > div:last-child,
  form {
    span,
    p {
      font-weight: 500;
      font-size: 1.125rem;
    }
  }

  @media screen and (max-width: 1180px) {
    form {
      display: flex;
      flex-direction: column;
    }

    button {
      width: 12.5rem;
      margin-top: 2.5rem;
      align-self: end;
    }
  }
`;
