import HamburgerIcon from '../../assets/hamburger-icon.svg';
import { Button } from '../Button';
import { StyledContainer, StyledImage, StyledContent } from './styles';

export function Card({ props, image, content, button, title, description }) {
  return (
    <StyledContainer {...props} $hasImage={!!image.src}>
      <StyledImage
        {...(image.src
          ? { ...image }
          : { src: HamburgerIcon, alt: 'Ícone de Hamburger' })}
      />
      <StyledContent {...content}>
        {title && <h2 {...title}>{title.label}</h2>}
        <div>
          {description && <p {...description}>{description.label}</p>}
          {button && <Button {...button}>{button.label}</Button>}
        </div>
      </StyledContent>
    </StyledContainer>
  );
}
