import { useState, useEffect } from 'react';

import { codeBurgerAPI } from '../services/api';

export function useProducts(user) {
  const [data, setData] = useState({
    products: [],
    categories: []
  });

  const offers = data.products.filter(({ offer }) => offer);

  const updateProducts = products =>
    setData(prevState => ({ ...prevState, products }));

  const updateCategories = categories =>
    setData(prevState => ({ ...prevState, categories }));

  useEffect(() => {
    if (user) {
      Promise.all([
        codeBurgerAPI.get('categories'),
        codeBurgerAPI.get('products')
      ]).then(data => {
        const {
          0: { data: categories },
          1: { data: products }
        } = data;

        setData({ categories, products });
      });
    }
  }, [user]);

  return { ...data, offers, updateProducts, updateCategories };
}
