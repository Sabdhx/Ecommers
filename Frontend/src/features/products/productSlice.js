import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
  loading:false,
  error:null,
  products:[]
}

export const fetchingApi = createAsyncThunk(
  '/products/fetchProducts',
  async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
       
      return response.data; // Return the fetched data as payload
    } catch (err) {
      throw err;
    }
  }
);


    const productSlice = createSlice({
  name:'product',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchingApi.pending,(state)=>{
     state.loading=true
 
  })
  .addCase(fetchingApi.fulfilled,(state,action)=>{
    state.products = action.payload;
    state.loading=false;
    state.error=null;
  })
  .addCase(fetchingApi.rejected,(state,action)=>{
    state.loading=false
    state.error= "there is an error"
  })
}
})
export const {}  = productSlice.actions;
export default productSlice.reducer
// export const {Product,error,loading} =productSlice.extraReducers





