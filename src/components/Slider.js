import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
  
const Slideri = (props) => {
  
  // Our States
  const [value, setValue] =  useState([0,99]);
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    props.rangeSelector(newValue);
  };

  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      <h3>ფილტრაცია</h3>
      <Typography id="range-slider" gutterBottom>
        შეარჩიეთ სასურველი დიაპაზონი:
      </Typography>
      <Slider
        style={{color:'red'}}
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
       <p>{value[0]}-დან  /  {value[1]}-მდე </p>
    </div>
  );
}
  
export default Slideri;
