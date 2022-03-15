import { Box, Tab, Tabs } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllCategoriesHook } from '../../../hooks/UseGetAllCategoriesHook';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const { categories, isCategoriesLoading } = useGetAllCategoriesHook();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (_: SyntheticEvent, newTabIndex: number) => {
    setSelectedTabIndex(newTabIndex);
  };

  const getTabs = () => {
    if (isCategoriesLoading) {
      return [<Tab />];
    }

    if (categories) {
      const tabs = categories.map((category) => {
        return (
          <Tab
            label={category.name}
            key={category.id}
            onClick={() => navigate(`/${category.reference}`)}
          />
        );
      });

      tabs.unshift(<Tab label="Home" key="0" onClick={() => navigate('/')} />);

      return tabs;
    }

    return null;
  };

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
