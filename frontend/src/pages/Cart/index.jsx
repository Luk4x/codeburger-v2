import CartBanner from '../../assets/cart-banner.svg';
import HamburgerIcon from '../../assets/hamburger-icon.svg';
import { Button } from '../../components';
import { useBasicData } from '../../hooks';
import { codeBurgerAPI } from '../../services/api';
import { formatPrice } from '../../utils/formatNumber';
import { toast } from '../../utils/toast';
import {
  StyledBanner,
  StyledEmpty,
  StyledSection,
  StyledCart,
  StyledCartInfo,
  StyledSummary
} from './styles';

const getTax = () => {
  const savedTax = JSON.parse(localStorage.getItem('tax'));

  if (savedTax) {
    return savedTax;
  }

  const tax = Math.round(Math.random() * (120 - 5 + 1) + 5);
  localStorage.setItem('tax', JSON.stringify(tax));
  return tax;
};

export function Cart() {
  const { cart, updateCart } = useBasicData();

  const deliveryTax = getTax();

  const totalPrice = cart.reduce(
    (acc, { price, quantity }) => acc + price * quantity,
    0
  );

  const onSubmit = async e => {
    e.preventDefault();

    const data = cart.map(({ id, quantity }) => ({ id, quantity }));

    await toast.promise(
      codeBurgerAPI.post('orders', { products: data }),
      successData =>
        `Seu pedido foi feito, ${successData.data.user.name}! Agora é só esperar.`,
      'Fazendo pedido...'
    );
  };

  return (
    <>
      <StyledBanner
        src={CartBanner}
        alt="Banner da página de carrinho do CodeBurger, com um Hamburger em cima de uma mesa"
      />
      <StyledSection $background="#EFEFEF">
        {cart.length > 0 ? (
          <div>
            <StyledCart>
              {cart.map((product, i) => (
                <StyledCartInfo key={product.id}>
                  <div className="preview">
                    {i === 0 && <span>Itens</span>}
                    <div>
                      <img
                        src={product.url || HamburgerIcon}
                        alt={product.name}
                      />
                      <p>{product.name}</p>
                    </div>
                  </div>
                  <div>
                    {i === 0 && <span>Preço</span>}
                    <p>{formatPrice(product.price)}</p>
                  </div>
                  <div className="action">
                    {i === 0 && <span>Quantidade</span>}
                    <div>
                      <button onClick={() => updateCart(product, true)}>
                        -
                      </button>
                      <p>{product.quantity}</p>
                      <button onClick={() => updateCart(product)}>+</button>
                    </div>
                  </div>
                  <div>
                    {i === 0 && <span>Total</span>}
                    <p>{formatPrice(product.price * product.quantity || 0)}</p>
                  </div>
                </StyledCartInfo>
              ))}
            </StyledCart>
            <StyledSummary>
              <div>
                <h3>Resumo do pedido</h3>
                <div className="space">
                  <span>Itens</span>
                  <p>{formatPrice(totalPrice)}</p>
                </div>
                <div className="space">
                  <span>Taxa de entrega</span>
                  <p>{formatPrice(deliveryTax)}</p>
                </div>
              </div>
              <form onSubmit={onSubmit}>
                <div className="space">
                  <span>Total</span>
                  <p>{formatPrice(totalPrice + deliveryTax)}</p>
                </div>
                <Button type="submit">Finalizar</Button>
              </form>
            </StyledSummary>
          </div>
        ) : (
          <StyledEmpty>Seu carrinho está vazio.</StyledEmpty>
        )}
      </StyledSection>
    </>
  );
}
