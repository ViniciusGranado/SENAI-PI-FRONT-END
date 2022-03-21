import { Delete } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
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
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UsesCreateOrderHook } from '../../hooks/UseCreateOrderHook';
import { UseDeleteCartItemHook } from '../../hooks/UseDeleteCartItemHook';
import { UseGetCartByClientIdHook } from '../../hooks/UseGetCartByClientIdHook';
import { CreateOrderDto, CreateOrderItem } from '../../models/models';
import styles from './Cart.module.css';

interface ProductsValues {
  [id: string]: number;
}

export const Cart = () => {
  const navigate = useNavigate();
  const clientId = localStorage.getItem('clientId');

  const [productsValues, setProductsValues] = useState<ProductsValues>({});
  const [enabledQuery, setEnabledQuery] = useState(false);
  const { cart, isCartLoading } = UseGetCartByClientIdHook(
    clientId ?? '',
    enabledQuery
  );

  const { deleteProduct, isDeleteProductLoading } = UseDeleteCartItemHook();
  const { createOrder, orderData, isCreateOrderLoading, isCreateOrderSuccess } =
    UsesCreateOrderHook();

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

  useEffect(() => {
    if (isCreateOrderSuccess && orderData) {
      navigate(`/order-summary/${orderData.id}`);
    }
  }, [isCreateOrderSuccess, navigate, orderData]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductsValues((prev) => {
      const copyState = { ...prev };

      copyState[`${event.target.name}`] = Number.parseInt(event.target.value);

      return copyState;
    });
  };

  const handleDeleteProduct = (productId: number) => {
    if (clientId !== null) {
      deleteProduct({
        productId: productId,
        clientId: Number.parseInt(clientId),
      });
    }
  };

  const getTotalValue = () => {
    if (cart) {
      return cart.items
        .reduce((acc, cur) => {
          return acc + cur.product.price * productsValues[`${cur.product.id}`];
        }, 0)
        .toFixed(2);
    }

    return undefined;
  };

  const handleFinishOrder = () => {
    if (clientId && cart) {
      const products: CreateOrderItem[] = cart.items.map((item) => {
        return {
          productId: item.product.id,
          quantity: productsValues[`${item.product.id}`],
        };
      });

      const createOrderDto: CreateOrderDto = {
        clientId: Number.parseInt(clientId),
        products: products,
      };

      createOrder(createOrderDto);
    }
  };

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
                      $
                      {(
                        item.product.price *
                        productsValues[`${item.product.id}`]
                      ).toFixed(2)}
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
                      {isDeleteProductLoading ? (
                        <CircularProgress
                          size={'1rem'}
                          sx={{ marginRight: '1rem' }}
                        />
                      ) : (
                        <IconButton
                          aria-label="delete"
                          size="large"
                          onClick={() => handleDeleteProduct(item.product.id)}
                        >
                          <Delete
                            fontSize="inherit"
                            sx={{ color: '#e91e63' }}
                          />
                        </IconButton>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell />
                  <TableCell />
                  <TableCell align="right">
                    Total Value: ${getTotalValue()}
                  </TableCell>
                  <TableCell />
                  <TableCell align="right">
                    <LoadingButton
                      loading={isCreateOrderLoading}
                      variant="contained"
                      onClick={handleFinishOrder}
                    >
                      Finish
                    </LoadingButton>
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
