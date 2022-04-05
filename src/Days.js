import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CloudQueueTwoToneIcon from '@mui/icons-material/CloudQueueTwoTone';
import { DataArrayOutlined } from '@mui/icons-material';

const dataForTabs =
  [{ index: 0, day: 'Monday', temp: '18', city: 'mumbai' },
  { index: 1, day: ' Tuesday', temp: '32', city: 'mumbai' },
  { index: 2, day: 'wednesday', temp: '14', city: 'mumbai' },
  { index: 3, day: 'Thursday', temp: '26', city: 'mumbai' },

  { index: 0, day: 'Monday', temp: '22', city: 'bengaluru' },
  { index: 1, day: 'Tuesday', temp: '37', city: 'bengaluru' },
  { index: 2, day: 'wednesday', temp: '26', city: 'bengaluru' },
  { index: 3, day: 'Thursday', temp: '17', city: 'bengaluru' },

  { index: 0, day: 'Monday', temp: '6', city: 'delhi' },
  { index: 1, day: 'Tuesday', temp: '31', city: 'delhi' },
  { index: 2, day: 'wednesday', temp: '23', city: 'delhi' },
  { index: 3, day: 'Thursday', temp: '18', city: 'delhi' },

  { index: 0, day: 'Monday', temp: '40', city: 'Hydrabad' },
  { index: 1, day: 'Tuesday', temp: '26', city: 'Hydrabad' },
  { index: 2, day: 'wednesday', temp: '21', city: 'Hydrabad' },
  { index: 3, day: 'Thursday', temp: '12', city: 'Hydrabad' },
  ]


export default function Days(props) {
  console.log(props.city)
  const newData = dataForTabs.filter(i => i.city === props.city)
  console.log(newData)


  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    console.warn(newValue)
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
        </Tabs>
      </Box>
      {newData.map((data) => {
        { console.log(data.index, "days of week") }
        return (<TabPanel value={value} index={data.index}>

          {/* <CloudQueueTwoToneIcon  fontSize='large'/> */}
          <div className='dataDisplay'>
            <span>Temprature:{data.temp}</span>
            <span>Day:{data.day}</span>
            <span>City:{data.city}</span>
          </div>
        </TabPanel>)

      })}
    </Box>
  );
}




