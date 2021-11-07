import { createSlice } from '@reduxjs/toolkit';

const siteSlice = createSlice({
  name: 'site',
  initialState: {
    site: {
      darkmode: false,
    },
  },
  reducers: {
    updateTheme: (state, action) => {
      state.site.darkmode = action.payload;
    },
  },
});

export default siteSlice.reducer;
export const { updateTheme } = siteSlice.actions;

export const selectSite = (state) => state.entities.site;
// export const selectSite = (state) => false;
