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

interface ProductsValues {
  [id: string]: number;
}

export const Cart = () => {
  const clientId = localStorage.getItem('clientId');

  const [productsValues, setProductsValues] = useState<ProductsValues>({});
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

  useEffect(() => {
    if (cart) {
      cart.items.forEach((item) => {
        setProductsValues((prev) => {
          const copyState = { ...prev };

          copyState[`${item.product.id}`] = 1;

          return copyState;
        });
      });
    }
  }, [cart]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductsValues((prev) => {
      const copyState = { ...prev };

      copyState[`${event.target.name}`] = Number.parseInt(event.target.value);

      return copyState;
    });
  }

  const getTotalValue = () => {
    if (cart) {
      return cart.items.reduce((acc, cur) => {
        return acc + (cur.product.price * productsValues[`${cur.product.id}`]);
      }, 0).toFixed(2)
    }

    return undefined;
  }

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
                      ${(item.product.price * productsValues[`${item.product.id}`]).toFixed(2)}
                    </TableCell>

                    <TableCell align="right">
                      <input
                        type="number"
                        name={`${item.product.id}`}
                        id="quantity"
                        min="1"
                        value={productsValues[`${item.product.id}`]}
                        onChange={handleQuantityChange}
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
                  <TableCell align="right">Total Value: ${getTotalValue()}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained">Finish</Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained" onClick={() => console.log(productsValues)}>Show state</Button>
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
