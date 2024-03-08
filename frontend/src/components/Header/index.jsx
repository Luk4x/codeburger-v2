import { useNavigate, useLocation } from 'react-router-dom';

import CartIcon from '../../assets/cart-icon.svg';
import UserIcon from '../../assets/user-icon.svg';
import { useBasicData } from '../../hooks';
import {
  StyledHeader,
  StyledContent,
  StyledUserInfo,
  StyledCartButton,
  StyledLinkButton
} from './styles';

export function Header() {
  const { cart, user, logout } = useBasicData();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navData = [
    { name: 'Home', path: '' },
    { name: 'Produtos', path: 'produtos' }
  ];

  return (
    <StyledHeader>
      <nav>
        {navData.map(({ name, path }, i) => (
          <StyledLinkButton
            onClick={() => navigate(`/${path}`)}
            key={path}
            $isActive={i === 0 ? pathname === '/' : pathname.includes(path)}
          >
            {name}
          </StyledLinkButton>
        ))}
      </nav>
      <StyledContent>
        <div>
          <StyledCartButton
            data-cart-length={cart.length}
            onClick={() => navigate('/carrinho')}
          >
            <img src={CartIcon} alt="Ícone de carrinho" />
          </StyledCartButton>
        </div>
        <StyledUserInfo isExtended={user?.admin}>
          <div>
            <img src={UserIcon} alt="Ícone de usuário" />
            <p>{user?.name}</p>
          </div>
          {user?.admin && (
            <button onClick={() => navigate('/gestao')}>Gestão</button>
          )}
          <button onClick={logout}>Sair</button>
        </StyledUserInfo>
      </StyledContent>
    </StyledHeader>
  );
}
