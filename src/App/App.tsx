import { Header } from '../components/Header/Header';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home/Home';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      
    </div>
  );
};

export default App;
