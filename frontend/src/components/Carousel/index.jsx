import RECarousel from 'react-elastic-carousel';

import { StyledContainer } from './styles';

export function Carousel({ children, containerProps, carouselProps }) {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ];

  return (
    <StyledContainer {...containerProps}>
      <RECarousel breakPoints={breakpoints} {...carouselProps}>
        {children}
      </RECarousel>
    </StyledContainer>
  );
}
