import { StyledButton } from './styles';

export function Button({ children, ...buttonProps }) {
  return <StyledButton {...buttonProps}>{children}</StyledButton>;
}
