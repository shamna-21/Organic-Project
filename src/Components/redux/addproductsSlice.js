import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProducts=createAsyncThunk('item/addProducts', async(data)=>{
    try{
  
    const response = await axios.post('http://localhost:3001/products', data);
    return response.data;
    }catch(err){
        console.log(err);
        
    }
})

export const getProducts=createAsyncThunk('item/getProducts',async()=>{
    try{
 const resp=await axios.get('http://localhost:3001/products');
 return (resp.data)
    }catch(err){
        console.log(err);
        
    }
})
export const removeitem=createAsyncThunk('item/removeitem',async(id)=>{
      const resp=await axios.delete(`http://localhost:3001/products/${id}`)
      return resp.data
})


const addproductsSlice=createSlice({
    name:'item',
    initialState:{
        data:[],
        status:'idle',
        error:''
    },
    reducers:{
     
    },
    extraReducers:(builders)=>{
        builders.addCase(getProducts.pending,(state,action)=>{
            state.status='pendingg'
        }).addCase(getProducts.fulfilled,(state,action)=>{
            state.status='done'
            state.data=action.payload
        }).addCase(getProducts.rejected,(state,action)=>{
            state.status='error'
            state.error=action.payload
        }).addCase(removeitem.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(removeitem.fulfilled, (state, action) => {
            state.status = 'succeeded';
            
            state.data = state.data.filter((product) => product.id !== action.payload);
          })
          .addCase(removeitem.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
          });
    }
})

export default addproductsSlice.reducer