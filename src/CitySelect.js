import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './Weather.css';
import { Box } from '@mui/material';

import cloud from '../src/assets/cloud.jpeg';
import Days from './Days.js';

const cities = [
  'mumbai',
  'delhi',
  'bengaluru',
  'Hydrabad'
];


export default function CitySelect() {
  const [value, setValue] = React.useState(0)
  const [inputValue, setInputValue] = React.useState('');

  console.log(value)

  return (
    <Box className="backBox" >
      <div className='titleText'>
        <span className='txt'>Weather Forecast</span>
        <span className='imgs'><img src={cloud} id="images" ></img></span>
      </div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={cities}
        sx={{ width: '40%', background: 'white', position: 'absolute', left: '30%', top: '35%' }}
        renderInput={(params) => <TextField {...params} label="select the city" />}
      />


      <Days city={value} />

    </Box>
  );
}





