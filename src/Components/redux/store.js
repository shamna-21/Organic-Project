import { configureStore } from '@reduxjs/toolkit';
import userReducer from './cartSlice'; 
import formReducer from './formSlice'
import productReducer from './addproductsSlice'
import allusersReducer from './allusersSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    form:formReducer,
    product:productReducer,
    allusers:allusersReducer
  },
});

export default store;
