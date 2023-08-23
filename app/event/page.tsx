"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Event from './eventpage/page';
import Faqpage from './faqlist/page';
import Notice from './notice/page';
export default function EventTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="EVENT PAGE">
            <Tab label="이벤트" value="1"  style={{fontSize : '0.9rem', fontWeight: 'bold'}}/>
            <Tab label="공지사항" value="2"  style={{fontSize : '0.9rem', fontWeight: 'bold'}}/>
            <Tab label="FAQ" value="3" style={{fontSize : '0.9rem', fontWeight: 'bold'}} />
          </TabList>
        </Box>
        <TabPanel value="1"><Event /> </TabPanel>
        <TabPanel value="2"><Notice /></TabPanel>
        <TabPanel value="3"><Faqpage /></TabPanel>
      </TabContext>
    </Box>
  );
}