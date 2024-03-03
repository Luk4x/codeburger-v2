import { StyledContainer } from './styles';

export function InputField({ label, labelProps, inputProps }) {
  return (
    <StyledContainer>
      {label && <label {...labelProps}>{label}</label>}
      <input {...inputProps} />
    </StyledContainer>
  );
}
