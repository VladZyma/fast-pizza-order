import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      console.log('ddddd');
      state.cart.push(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
