import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CloudQueueTwoToneIcon from '@mui/icons-material/CloudQueueTwoTone';

import { dataForTabs } from './Database';





export default function Days(props) {

  const newData = dataForTabs.filter(i => i.city === props.city)



  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {

    setValue(newValue);
  };

  function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }






  return (
    <Box sx={{ width: '40%', heigh: '25%', position: 'absolute', top: '50%', left: '30%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Monday" id='mon'  {...a11yProps(0)} />
          <Tab label="Tuesday" id='tue' {...a11yProps(1)} />
          <Tab label="wednesday" id='wed'  {...a11yProps(2)} />
          <Tab label="Thursday" id='thur' {...a11yProps(3)} />
          <Tab label="Friday" id='fri' {...a11yProps(4)} />
          <Tab label="Saturday" id='sat' {...a11yProps(5)} />
          <Tab label="Sunday" id='sun' {...a11yProps(6)} />
        </Tabs>
      </Box>
     
      {newData.map((data) => {
        
        return (<TabPanel value={value} index={data.index}>
          <div className='dataDisplay'>
            <span> {<CloudQueueTwoToneIcon fontSize='large' />}</span>

            <span>Temprature:{data.temp}</span>
            <span>Day:{data.day}</span>
            <span>City:{data.city}</span>
          </div>
        </TabPanel>)

      })}
    </Box>
  );
}




