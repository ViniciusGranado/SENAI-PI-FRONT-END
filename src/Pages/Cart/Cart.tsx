import { Delete } from '@mui/icons-material';
import {
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { UseGetCartByClientIdHook } from '../../hooks/UseGetCartByClientIdHook';
import styles from './Cart.module.css';

export const Cart = () => {
  const clientId = localStorage.getItem('clientId');

  const [enabledQuery, setEnabledQuery] = useState(false);
  const { cart, isCartLoading } = UseGetCartByClientIdHook(
    clientId ?? '',
    enabledQuery
  );

  useEffect(() => {
    if (clientId) {
      setEnabledQuery(true);
    }
  }, [clientId]);

  return (
    <Box className={styles.Cart}>
      {isCartLoading || !cart ? (
        <CircularProgress />
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableBody>
                {cart.items.map((item) => (
                  <TableRow
                    key={item.product.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                      <img src={item.product.imgUrl} alt={item.product.name} />
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {item.product.name}
                    </TableCell>

                    <TableCell align="right">
                      ${item.product.price.toFixed(2)}
                    </TableCell>

                    <TableCell align="right">
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        min="1"
                        value="1"
                      />
                    </TableCell>

                    <TableCell align="right">
                      <IconButton aria-label="delete" size="large">
                        <Delete fontSize="inherit" sx={{ color: '#e91e63' }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell />
                  <TableCell />
                  <TableCell align="right">
                    Total Value: $2152.00
                  </TableCell>
                  <TableCell />
                  <TableCell align='right'>
                    <Button variant="contained">Finish</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Box>
  );
};
