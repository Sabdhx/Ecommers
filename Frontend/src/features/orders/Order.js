import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
  order:[],
  currentOrder:null,
  status:"idle"
}

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (order) => {
    try {
      const response = await axios.post("http://localhost:3000/orders",order)   
      console.log(response.data);     
      return response.data;

    } catch (error) {
      console.log(error);
    }

  }
)

const orderSlice = createSlice({
  name:"order",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
      builder
      .addCase(createOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        
        state.order.push(action.payload);
        state.currentOrder=null
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
})


const {} = orderSlice.actions;
export default orderSlice.reducer;
