import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/carts/cartSlice";
import productReducer from "./features/products/productSlice";
<<<<<<< HEAD
import orderReducer from "./features/orders/Order"
=======
>>>>>>> 3fe3898711fcbec4c1b856119796b61aa5457a82

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
<<<<<<< HEAD
    orders:orderReducer
    
=======
>>>>>>> 3fe3898711fcbec4c1b856119796b61aa5457a82
  },
});
