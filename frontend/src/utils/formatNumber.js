export const formatPrice = num =>
  num.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
