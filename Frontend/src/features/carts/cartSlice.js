import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateCart(state, action) {
      const { quantity } = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity = quantity;
      }
    },
    emptyCart(state, action) {
      state.cart = [];
    },
  },

  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchProducts.pending, (state) => {
  //         state.loading = true;
  //       })
  //       .addCase(fetchProducts.fulfilled, (state, action) => {
  //         state.loading = false;
  //         state.products = action.payload;
  //         state.error = null;
  //       })
  //       .addCase(fetchProducts.rejected, (state, action) => {
  //         state.loading = false;
  //         state.error = "Something went wrong!";
  //       });
  //   },
});

export const { addCart, removeCart, updateCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
