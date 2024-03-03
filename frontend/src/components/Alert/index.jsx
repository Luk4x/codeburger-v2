import { StyledContainer } from './styles';

export function Alert({ children, variant, ...containerProps }) {
  return (
    <StyledContainer $variant={variant} {...containerProps}>
      <p>{children}</p>
    </StyledContainer>
  );
}
