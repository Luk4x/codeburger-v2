import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import HamburgerIcon from '../../../../assets/hamburger-icon.svg';
import { formatDate } from '../../../../utils/formatDate';
import { StyledProductImage, tableHeadStyle } from './styles';
import { statusList } from './utils';

export function Row({ row, updateOrderStatus }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{formatDate(row.date)}</TableCell>
        <TableCell>
          <FormControl variant="filled" sx={{ minWidth: 220 }}>
            <InputLabel id="select-status-label">Status</InputLabel>
            <Select
              value={row.status}
              onChange={e => updateOrderStatus(row.orderId, e.target.value)}
            >
              {statusList.map(({ label, value }) => (
                <MenuItem value={value} key={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </TableCell>
      </TableRow>
      <TableRow style={{ background: '#111' }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="h6"
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontSize: '0.875rem',
                  opacity: 0.6,
                  margin: '1rem 0'
                }}
              >
                Produtos
              </Typography>
              <Table size="small" aria-label="produtos">
                <TableHead>
                  <TableRow>
                    {['Quantidade', 'Nome', 'Categoria', 'Imagem'].map(
                      title => (
                        <TableCell key={title} style={tableHeadStyle}>
                          {title}
                        </TableCell>
                      )
                    )}
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map(productRow => (
                    <TableRow key={productRow.id}>
                      <TableCell component="th" scope="row">
                        {productRow.quantity}
                      </TableCell>
                      <TableCell>{productRow.name}</TableCell>
                      <TableCell>{productRow.category}</TableCell>
                      <TableCell colSpan={2}>
                        <StyledProductImage
                          src={productRow.url || HamburgerIcon}
                          alt={productRow.name}
                          $hasImage={!!productRow.url}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
