import { Box, Tab, Tabs } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { Category } from '../../../models/models';
import { useNavigate } from 'react-router-dom';

import styles from './Navbar.module.css';

interface NavbarProps {}

const mockCategories: Category[]  = [
  {
    id: 1,
    name: 'Smartphones',
  },
  {
    id: 2,
    name: 'Laptops',
  },
  {
    id: 3,
    name: 'TVs',
  },
  {
    id: 4,
    name: 'Sound',
  },
  {
    id: 5,
    name: 'Wearables',
  },
]

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (_: SyntheticEvent, newTabIndex: number) => {
    setSelectedTabIndex(newTabIndex);
  };

  const getTabs = () => {
    const tabs = mockCategories.map((category) => {
      return <Tab label={category.name} key={category.id} onClick={() => navigate(`/${category.name}`)}/>
    })

    tabs.unshift(
      <Tab label='Home' key='0' onClick={() => navigate('/')} />
    );

    return tabs;
  }

  return (
    <Box className={styles.Navbar}>
      <Tabs
        value={selectedTabIndex}
        onChange={handleTabChange}
        sx={{
          '& .MuiTabs-flexContainer': {
            justifyContent: 'flex-end',
          },
        }}
      >
        {getTabs()}
      </Tabs>
    </Box>
  );
};
