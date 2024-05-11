import { createSlice } from "@reduxjs/toolkit"

const initialState = 
  {
  cart : []
  }


const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const parameter = state.cart.find(item => item.id === action.payload.id);
      if (parameter) {
        parameter.quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    }
    ,
    removeCart:(state,action)=>{
      state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        updateCart:(state,action)=>{
          const {quantity} = action.payload
      const existingProductIndex = state.cart.findIndex(item => item.id === action.payload.id);

      if(existingProductIndex !== -1){
        state.cart[existingProductIndex].quantity = quantity;  
      }
        }
  }
})

export const {addCart,removeCart,updateCart}=counterSlice.actions;
export default counterSlice.reducer;
