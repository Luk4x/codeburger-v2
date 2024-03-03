export const statusList = [
  {
    label: 'Pedido Realizado',
    value: 'order-placed'
  },
  {
    label: 'Pedido em Preparação',
    value: 'order-in-preparation'
  },
  {
    label: 'Pedido à Caminho',
    value: 'order-on-the-way'
  },
  {
    label: 'Pedido Entregue',
    value: 'order-delivered'
  }
];

export const createData = order => ({
  name: order.user.name,
  orderId: order._id,
  date: order.createdAt,
  status: order.status,
  products: order.products
});
