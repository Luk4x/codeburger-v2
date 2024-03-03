import { useState } from 'react';

export function useCart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  const updateCart = (product, isNegative) => {
    const getNewCart = (prevState, newProduct) => {
      const productIndex = prevState.findIndex(
        ({ id }) => newProduct.id === id
      );

      if (productIndex !== -1) {
        if (isNegative && prevState[productIndex].quantity < 1) {
          return [...prevState].filter(
            ({ id }) => id !== prevState[productIndex].id
          );
        }

        return prevState.map((p, i) => {
          if (i === productIndex) {
            return {
              ...p,
              quantity: isNegative ? p.quantity-- : p.quantity++
            };
          }

          return p;
        });
      }

      return [...prevState, { quantity: 1, ...newProduct }];
    };

    setCart(prevState => {
      const newCart = getNewCart(prevState, product);

      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  return { cart, updateCart };
}
