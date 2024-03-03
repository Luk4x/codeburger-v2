import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react';

import { codeBurgerAPI } from '../../../../services/api';
import { toast } from '../../../../utils/toast';
import { Row } from './Row';
import {
  StyledFilterButton,
  StyledContainer,
  tableHeadStyle,
  tableEmptyStyle,
  tableContainerStyle
} from './styles';
import { statusList, createData } from './utils';

export function Orders() {
  const [orders, setOrders] = useState({ rows: [], filter: 'all' });

  const filteredRows =
    orders.filter === 'all'
      ? orders.rows
      : orders.rows.filter(({ status }) => status === orders.filter);

  const updateOrderStatus = async (id, status) => {
    toast.promise(
      codeBurgerAPI.put(`orders/${id}`, { status }),
      () => {
        const getNewRows = prevState =>
          prevState.map(row => (row.orderId === id ? { ...row, status } : row));

        setOrders(prevState => ({
          ...prevState,
          rows: getNewRows(prevState.rows)
        }));

        return 'Status atualizado com sucesso!';
      },
      'Atualizado status...'
    );
  };

  useEffect(() => {
    codeBurgerAPI.get('orders').then(({ data: orders }) => {
      const newRows = orders.map(order => createData(order));

      setOrders(prevState => ({ ...prevState, rows: newRows }));
    });
  }, []);

  return (
    <StyledContainer>
      <nav>
        {[{ value: 'all', label: 'Todos' }, ...statusList].map(
          ({ value, label }) => (
            <StyledFilterButton
              key={value}
              $isActive={orders.filter === value}
              onClick={() =>
                setOrders(prevState => ({ ...prevState, filter: value }))
              }
            >
              {label.replace('Pedido ', '')}
            </StyledFilterButton>
          )
        )}
      </nav>
      <TableContainer
        component={Paper}
        color="primary"
        sx={tableContainerStyle}
      >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              {['Pedido', 'Cliente', 'Data do Pedido', 'Status'].map(title => (
                <TableCell key={title} style={tableHeadStyle}>
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map(row => (
              <Row
                key={row.orderId}
                row={row}
                updateOrderStatus={updateOrderStatus}
              />
            ))}
            {filteredRows.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} sx={tableEmptyStyle}>
                  Não há nenhum pedido{' '}
                  {orders.filter === 'all'
                    ? ''
                    : statusList
                        .find(({ value }) => value === orders.filter)
                        ?.label.replace('Pedido ', '')
                        .toLocaleLowerCase()}{' '}
                  no momento.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledContainer>
  );
}
