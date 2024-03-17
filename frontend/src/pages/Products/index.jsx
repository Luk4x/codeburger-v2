import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import ProductsBanner from '../../assets/products-banner.svg';
import { Carousel } from '../../components';
import { Card } from '../../components/Card';
import { useBasicData } from '../../hooks';
import { formatPrice } from '../../utils/formatNumber';
import {
  StyledBanner,
  StyledEmpty,
  StyledSection,
  StyledProducts,
  StyledCategory
} from './styles';

export function Products() {
  const { state } = useLocation();
  const { categories, products, updateCart } = useBasicData();
  const [activeCategory, setActiveCategory] = useState(state?.categoryId || 0);

  const filteredProducts =
    activeCategory === 0
      ? products
      : products.filter(({ category_id }) => activeCategory === category_id);

  return (
    <>
      <StyledBanner
        src={ProductsBanner}
        alt="Banner do CodeBurger, com um Hamburger em cima de uma mesa"
      />
      <StyledSection $background="#EFEFEF">
        <Carousel>
          {[{ id: 0, name: 'Todos' }, ...categories].map(({ id, name }) => (
            <StyledCategory
              $active={activeCategory === id}
              type="button"
              key={id}
              onClick={() => {
                setActiveCategory(id);
              }}
            >
              {name}
            </StyledCategory>
          ))}
        </Carousel>
        {filteredProducts.length > 0 ? (
          <StyledProducts>
            {filteredProducts.map(product => (
              <Card
                key={product.id}
                image={{ src: product.url, alt: product.name, $size: 190 }}
                button={{
                  label: 'Adicionar',
                  onClick: () => updateCart(product)
                }}
                title={{
                  label: product.name,
                  style: { fontWeight: 'normal' }
                }}
                description={{
                  label: formatPrice(product.price)
                }}
                content={{
                  style: {
                    justifyContent: 'space-between'
                  }
                }}
                props={{
                  style: {
                    width: 400,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    justifyContent: 'space-between',
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '0.875rem',
                    boxShadow: ' 0 30px 60px 0 #3939391A',
                    height: 220
                  }
                }}
              />
            ))}
          </StyledProducts>
        ) : (
          <StyledEmpty>
            Não há nenhum produto disponível
            {activeCategory === 0 ? '.' : ' para esta categoria.'}
          </StyledEmpty>
        )}
      </StyledSection>
    </>
  );
}
