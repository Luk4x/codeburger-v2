import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Orders, Products } from './components';

export const sections = [
  {
    label: 'Pedidos',
    Icon: ShoppingBagOutlinedIcon,
    section: Orders
  },
  {
    label: 'Produtos',
    Icon: ShoppingCartOutlinedIcon,
    section: Products
  }
];
