import { Delete } from '@mui/icons-material';
import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Button,
  TableHead,
} from '@mui/material';

export const OrderSummary = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>

        {/* <TableBody>
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

              <TableCell align="right">$1200.00</TableCell>

              <TableCell align="right">5</TableCell>

              <TableCell align="right">
                <IconButton
                  aria-label="delete"
                  size="large"
                >
                  <Delete fontSize="inherit" sx={{ color: '#e91e63' }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell align="right">Total Value: $1200.00</TableCell>
          </TableRow>
        </TableBody> */}
      </Table>
    </TableContainer>
  );
};
