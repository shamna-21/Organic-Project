import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const allusers=createAsyncThunk('item/allusers',async()=>{
    try{
   const resp=await axios.get('http://localhost:3001/user')
   return resp.data
    }catch(err){
    console.log(err);
    
    }
})

const allusersSlice=createSlice({
    name:'users',
    initialState:{
        data:[],
        status:'idle',
        error:''
    },
    reducers:{},
    extraReducers:(builders)=>{
        builders.addCase(allusers.pending,(state,action)=>{
            state.status='pendinggg'
        }).addCase(allusers.fulfilled,(state,action)=>{
             state.status='fulfilled';
             state.data=action.payload
        }).addCase(allusers.rejected,(state,action)=>{
            state.status='fulfilled';
            state.error=action.payload
       })
    }
})

export default allusersSlice.reducer