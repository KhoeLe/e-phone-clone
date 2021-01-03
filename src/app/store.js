import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from 'features/useSlice';
import  cardReducer  from 'features/cardSlice';



export default configureStore({
  reducer: {
    user: userReducer,
    card: cardReducer,
  },
});
