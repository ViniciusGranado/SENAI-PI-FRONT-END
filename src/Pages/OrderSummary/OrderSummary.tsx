import { Delete } from '@mui/icons-material';
import {
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UseGetOrderById } from '../../hooks/UseGetOrderById';

import styles from './OrderSummary.module.css';

export const OrderSummary = () => {
  const { id: orderId } = useParams();
  const [enabledQuery, setEnabledQuery] = useState(false);

  const { order, isOrderLoading } = UseGetOrderById(
    orderId ?? '',
    enabledQuery
  );

  useEffect(() => {
    if (orderId) {
      setEnabledQuery(true);
    } 
  }, [orderId])

  return (
    <Box className={styles.OrderSummary}>
      {isOrderLoading || !order ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell align="right" colSpan={2}>Product</TableCell>
                <TableCell align="right">Value</TableCell>
                <TableCell align="right">Quantity</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {order.items.map((item) => (
                <TableRow
                  key={item.product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <img src={item.product.imgUrl} alt={item.product.name} />
                  </TableCell>

                  <TableCell  align="right" component="th" scope="row">
                    {item.product.name}
                  </TableCell>

                  <TableCell align="right">
                    ${item.subTotal.toFixed(2)}
                  </TableCell>

                  <TableCell align="right">{item.quantity}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell align="right">
                  Total Value: ${order.total.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};
