import { useNavigate } from 'react-router-dom';

import CategoryTitle from '../../assets/category-title.svg';
import HomeBanner from '../../assets/home-banner.svg';
import OffersTitle from '../../assets/offers-title.svg';
import { Carousel } from '../../components';
import { Card } from '../../components/Card';
import { useBasicData } from '../../hooks';
import { formatPrice } from '../../utils/formatNumber';
import { StyledBanner, StyledEmpty, StyledSection } from './styles';

export function Home() {
  const { categories, offers, updateCart } = useBasicData();
  const navigate = useNavigate();

  return (
    <>
      <StyledBanner
        src={HomeBanner}
        alt="Banner do CodeBurger, com um Hamburger em cima de uma mesa"
      />
      <StyledSection $background="#EFEFEF">
        <img src={CategoryTitle} alt="Categorias" />
        {categories.length > 0 ? (
          <Carousel>
            {categories.map(({ id, url, name }) => (
              <Card
                key={id}
                image={{ src: url, alt: name, $size: 220 }}
                button={{
                  label: name,
                  onClick: () =>
                    navigate('/produtos', { state: { categoryId: id } })
                }}
                props={{
                  style: {
                    width: 280,
                    margin: '0 1rem'
                  }
                }}
              />
            ))}
          </Carousel>
        ) : (
          <StyledEmpty>Nenhuma categoria disponível.</StyledEmpty>
        )}
      </StyledSection>
      <StyledSection>
        <img src={OffersTitle} alt="Ofertas" />
        {offers.length > 0 ? (
          <Carousel>
            {offers.map(product => (
              <Card
                key={product.id}
                image={{ src: product.url, alt: product.name, $size: 220 }}
                button={{
                  label: 'Comprar',
                  onClick: () => {
                    updateCart(product);
                    navigate('/carrinho');
                  }
                }}
                title={{ label: product.name }}
                description={{ label: formatPrice(product.price) }}
                props={{
                  style: {
                    width: 280,
                    height: '100%',
                    margin: '0 1rem'
                  }
                }}
              />
            ))}
          </Carousel>
        ) : (
          <StyledEmpty>Não há nenhuma oferta no momento.</StyledEmpty>
        )}
      </StyledSection>
    </>
  );
}
