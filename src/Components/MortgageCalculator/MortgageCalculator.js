import * as React from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import './mortgage-calculator.scss';
import { updateBaseVal, updateMul1, updateMul2 } from '../../Store/variables';
import { useDispatch } from 'react-redux';
import MortSlider from '../SliderGroup/MortSlider';

function valueLabelFormat(value) {
  let scaledValue = value;
  let statement = '';

  if (scaledValue >= 150) {
    statement = 'Not Recommended';
  }

  return `${value} ${statement}`;
}

function calculateValue(value) {
  return 2 * value;
}

function MortgageCalculator() {
  const [baseVal, setBaseVal] = React.useState(25);
  const [mul1, setMul1] = React.useState(15);
  const [mul2, setMul2] = React.useState(55);
  const dispatch = useDispatch();

  const handleChangeBaseVal = (event) => {
    let baseVal = parseFloat(event.target.value);
    if (typeof baseVal === 'number') {
      setBaseVal(baseVal);
      dispatch(updateBaseVal(baseVal));
    }
  };

  const handleChangeMul1 = (event, newValue) => {
    if (typeof newValue === 'number') {
      setMul1(newValue);
      dispatch(updateMul1(newValue));
    }
  };

  const handleChangeMul2 = (event, newValue) => {
    if (typeof newValue === 'number') {
      setMul2(newValue);
      dispatch(updateMul2(newValue));
    }
  };

  return (
    <div className="mc-calc-outer">
      <h1>Calculator</h1>
      <MortSlider />
      <div className="mc-calc-space" />
      <hr />
      <h4>Select Number</h4>
      <TextField
        id="outlined-basic"
        value={baseVal}
        onChange={handleChangeBaseVal}
        label="Base Number"
        variant="outlined"
      />
      <p>Enter a number</p>
      <hr />
      <h4>Select multipliers</h4>
      <Typography id="non-linear-slider" gutterBottom>
        Value: {valueLabelFormat(calculateValue(mul1))}
      </Typography>
      <Slider
        onChange={handleChangeMul1}
        value={mul1}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <Typography id="non-linear-slider-2" gutterBottom>
        Value: {mul2}
      </Typography>
      <Slider
        onChange={handleChangeMul2}
        value={mul2}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <p>Select the multipliers</p>
      <hr />
      <Button variant="contained">Calculate</Button>
    </div>
  );
}

export default MortgageCalculator;
