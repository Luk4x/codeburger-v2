import { createContext } from 'react';

import { useUser, useCart, useProducts } from '..';

export const BasicDataContext = createContext({});

export const BasicDataProvider = ({ children }) => {
  const { ...user } = useUser();
  const { ...cart } = useCart();
  const { ...products } = useProducts(user.user);

  return (
    <BasicDataContext.Provider
      value={{
        ...user,
        ...cart,
        ...products
      }}
    >
      {children}
    </BasicDataContext.Provider>
  );
};
