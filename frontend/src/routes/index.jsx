import { Route, Routes as Routers, useLocation } from 'react-router-dom';

import { Header } from '../components';
import { Home, Login, SignUp, Products, Cart, Admin } from '../pages';
import { Private } from './Private';

const visibleHeaderRoutes = ['/produtos', '/carrinho'];

export function Routes() {
  const { pathname } = useLocation();

  const shouldShowHeader =
    visibleHeaderRoutes.includes(pathname) || pathname === '/';

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routers>
        <Route
          path="/entrar"
          element={
            <Private inverted>
              <Login />
            </Private>
          }
        />
        <Route
          path="/cadastrar"
          element={
            <Private inverted>
              <SignUp />
            </Private>
          }
        />
        <Route
          path="/"
          element={
            <Private>
              <Home />
            </Private>
          }
        />
        <Route
          path="/produtos"
          element={
            <Private>
              <Products />
            </Private>
          }
        />
        <Route
          path="/carrinho"
          element={
            <Private>
              <Cart />
            </Private>
          }
        />
        <Route
          path="/gestao"
          element={
            <Private isAdmin>
              <Admin />
            </Private>
          }
        />
      </Routers>
    </>
  );
}
