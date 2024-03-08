import AddIcon from '@mui/icons-material/Add';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';

import HamburgerIcon from '../../../../assets/hamburger-icon.svg';
import { useBasicData } from '../../../../hooks';
import { codeBurgerAPI } from '../../../../services/api';
import { formatPrice } from '../../../../utils/formatNumber';
import { toast } from '../../../../utils/toast';
import { Modal } from './Modal';
import {
  StyledProductImage,
  tableContainerStyle,
  tableHeadStyle,
  StyledActionButton,
  tableEmptyStyle,
  StyledContainer
} from './styles';

export function Products() {
  const [modal, setModal] = useState({ open: false, data: undefined });
  const { products, updateProducts } = useBasicData();

  const actions = [
    {
      Icon: EditOutlinedIcon,
      action: product => {
        setModal({ open: true, data: product });
      }
    },
    {
      Icon: DeleteForeverOutlinedIcon,
      action: product => {
        toast.promise(
          codeBurgerAPI.delete(`/products/${product.id}`),
          successData => {
            const { updatedProducts } = successData.data;

            updateProducts(updatedProducts);

            return `Produto ${product.name} excluído com sucesso!`;
          },
          'Excluindo produto...+'
        );
      }
    }
  ];

  return (
    <>
      <Modal
        open={modal.open}
        data={modal.data}
        onClose={() => setModal({ open: false, data: undefined })}
      />
      <StyledContainer>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          sx={{
            height: '2.5rem',
            textTransform: 'capitalize',
            fontSize: '0.9375rem'
          }}
          onClick={() => setModal(prevState => ({ ...prevState, open: true }))}
        >
          Novo Produto
        </Button>
        <TableContainer component={Paper} sx={tableContainerStyle}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {['Nome', 'Preço', 'Em Oferta', 'Imagem', 'Ações'].map(
                  title => (
                    <TableCell sx={tableHeadStyle} key={title} align="center">
                      {title}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map(product => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {product.name}
                  </TableCell>
                  <TableCell align="center">
                    {formatPrice(product.price)}
                  </TableCell>
                  <TableCell align="center">
                    {product.offer ? 'Sim' : 'Não'}
                  </TableCell>
                  <TableCell align="center">
                    <StyledProductImage
                      src={product.url || HamburgerIcon}
                      alt={product.name}
                      $hasImage={!!product.url}
                    />
                  </TableCell>
                  <TableCell align="center">
                    {actions.map(({ Icon, action }) => (
                      <StyledActionButton
                        key={Icon.type.render.displayName}
                        onClick={() => action(product)}
                      >
                        <Icon />
                      </StyledActionButton>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
              {products.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} sx={tableEmptyStyle}>
                    Não há nenhum pedido nenhum produto cadastrado
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledContainer>
    </>
  );
}
