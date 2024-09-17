import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to update cart
export const updateForm = createAsyncThunk(
  'form/updateForm',
  async ({ userId, formData,cartItems }) => {
    console.log(formData);
    
    try {
      const res = await axios.get(`http://localhost:3001/user/${userId}`);
     const pay=res.data.payment
     formData={
      ...formData,
      order:cartItems
     }
      const response = await axios.patch(`http://localhost:3001/user/${userId}`, { payment: [formData,...pay] });
      await axios.patch(`http://localhost:3001/user/${userId}`, { cart: [] })
      return response.data;
    } catch (error) {
      console.log(error);

    }
  }
);



const formSlice = createSlice({
  name: 'form',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateForm.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(updateForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default formSlice.reducer;
