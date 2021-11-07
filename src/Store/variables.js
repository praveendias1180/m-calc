import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'variables',
  initialState: {
    value: 10,
    values: {
      base_val: 25,
      mul_1: 15,
      mul_2: 55,
    },
  },
  reducers: {
    updateBaseVal: (state, action) => {
      state.values.base_val = action.payload;
    },
    updateMul1: (state, action) => {
      state.values.mul_1 = action.payload;
    },
    updateMul2: (state, action) => {
      state.values.mul_2 = action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { updateBaseVal, updateMul1, updateMul2 } = counterSlice.actions;

export const selectValue = (state) => state.entities.variables.values;
