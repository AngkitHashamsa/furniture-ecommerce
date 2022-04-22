import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../features/Slices/ProductReducer';

const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});

export default store;
