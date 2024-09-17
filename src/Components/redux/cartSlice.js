import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: '',
  status: 'idle',
  error: null,
}

export const fetchUser = createAsyncThunk('user/fetchUser', async (userId) => {
  const response = await axios.get(`http://localhost:3001/user/${userId}`)
  return response.data
})

export const updateCart = createAsyncThunk('user/updateCart', async ({ userId, item }) => {
  const response = await axios.get(`http://localhost:3001/user/${userId}`)
  const user = response.data

  const UpdatedCart = [...user.cart, item]
  const updateResponse = await axios.patch(`http://localhost:3001/user/${userId}`, { cart: UpdatedCart })
  return updateResponse.data
})

export const RemoveItem = createAsyncThunk('user/RemoveItem', async ({ userId, itemId }) => {
  const response = await axios.get(`http://localhost:3001/user/${userId}`)
  const user = response.data
  const UpdatedCart = user.cart.filter(item => item.id !== itemId)
  const updateddata = await axios.patch(`http://localhost:3001/user/${userId}`, { cart: UpdatedCart })
  return updateddata.data
})

const cartSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = 'pending'
    })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'success';
        state.user = action.payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.user.cart = action.payload.cart
      })
      .addCase(RemoveItem.fulfilled, (state, action) => {
        state.user.cart = action.payload.cart;
      });
  }
})

export default cartSlice.reducer
