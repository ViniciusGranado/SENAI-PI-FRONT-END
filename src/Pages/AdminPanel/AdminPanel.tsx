import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { useState } from 'react';
import { NewCategoryTab } from './NewCategoryTab/NewCategoryTab';
import { NewProductTab } from './NewProductTab/NewProductTab';

// TODO Redirect to 'not authorized' page when user 
// access this page through URL
export const AdminPanel = () => {
  const [value, setValue] = useState('1');

  const handleChange = (_:any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="New Category" value="1" />
            <Tab label="New Product" value="2" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <NewCategoryTab />
        </TabPanel>
        
        <TabPanel value="2">
          <NewProductTab />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
