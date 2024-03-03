import HamburgerIcon from '../../assets/hamburger-icon.svg';
import { Button } from '../Button';
import { StyledContainer, StyledImage, StyledContent } from './styles';

export function Card({ props, image, button, title, description }) {
  return (
    <StyledContainer {...props} $hasImage={!!image.src}>
      <StyledImage
        {...(image.src
          ? { ...image }
          : { src: HamburgerIcon, alt: 'Ícone de Hamburger' })}
      />
      <StyledContent>
        {title && <h2 {...title}>{title.label}</h2>}
        {description && <p {...description}>{description.label}</p>}
        {button && <Button {...button}>{button.label}</Button>}
      </StyledContent>
    </StyledContainer>
  );
}
