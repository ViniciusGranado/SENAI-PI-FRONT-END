import ReactDOM from 'react-dom';
import App from './App/App';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
