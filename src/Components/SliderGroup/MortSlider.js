import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './mort-slider.scss';
import IconButton from '@mui/material/IconButton';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import Snackbar from '@mui/material/Snackbar';
import { updateMul1 } from '../../Store/variables';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
const marks = [
  {
    value: 15,
    label: '15%',
  },
  {
    value: 85,
    label: '85%',
  },
];

const PrettoSlider = styled(Slider)({
  color: '#1ca5f4',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 32,
    width: 32,
    backgroundColor: '#fff',
    border: '8px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 0 50% 50%',
    backgroundColor: '#1ca5f4',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, 150%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

export default function MortSlider() {
  const [mul1, setMul1] = React.useState(40);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleChangeMul1 = (event, newValue) => {
    if (typeof newValue === 'number') {
      setMul1(newValue);
      dispatch(updateMul1(newValue));
      if (newValue > 85) {
        handleClick();
      } else {
        setOpen(false);
      }
    }
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleUndo = () => {
    setOpen(false);
    dispatch(updateMul1(85));
    setMul1(85);
  };

  const handleDecrement = () => {
    handleChangeMul1(null, mul1 - 1);
  };

  const handleIncrement = () => {
    handleChangeMul1(null, mul1 + 1);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleUndo}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Box sx={{ m: 3 }} />
      <p className="mort-slider-title">Mortgage Slider</p>
      <div className="mc-slider-g">
        <IconButton aria-label="delete" size="large" onClick={handleDecrement}>
          <IndeterminateCheckBoxOutlinedIcon fontSize="inherit" />
        </IconButton>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          onChange={handleChangeMul1}
          value={mul1}
          marks={marks}
        />
        <IconButton aria-label="delete" size="large" onClick={handleIncrement}>
          <AddBoxOutlinedIcon fontSize="inherit" />
        </IconButton>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="85% Exceeded. Not Recommended."
        action={action}
      />
    </React.Fragment>
  );
}
