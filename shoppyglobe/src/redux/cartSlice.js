import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
        state.items.length = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export const selectCartItemsCount = (state) => state.cart.items.length;
export default cartSlice.reducer;