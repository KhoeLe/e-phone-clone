import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from 'features/useSlice';
import  cartReducer  from 'features/cartSlice';



export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
