import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MortgageCalculator from '../MortgageCalculator/MortgageCalculator';
import DoughnutChart from '../Charts/DoughnutChart';
import SliderGroup from '../SliderGroup/SliderGroup';
import Results from '../Results/Results';
import './homepage.scss';
import { selectSite, updateTheme } from '../../Store/site';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import { useState } from 'react';

export default function HomePage() {
  const dispatch = useDispatch();
  const site = useSelector(selectSite);

  const [dark, setDark] = useState(site.site.darkmode);

  // To handle theme switching
  const handleSwitch = () => {
    dispatch(updateTheme(!dark));
    setDark(!dark);
  };

  const theme = createTheme({
    palette: {
      type: dark ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="home-container">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}></Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <MortgageCalculator />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Results />
              <DoughnutChart />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <SliderGroup />
            </Grid>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}
