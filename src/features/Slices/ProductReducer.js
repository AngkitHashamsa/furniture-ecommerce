import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
};

const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    openMenu: (state, action) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state, action) => {
      state.isMenuOpen = false;
    },
  },
});

export const { openMenu, closeMenu } = ProductSlice.actions;

export default ProductSlice.reducer;
