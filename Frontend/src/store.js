import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/carts/cartSlice";
import productReducer from "./features/products/productSlice";
import orderReducer from "./features/orders/Order"
import authReducer from './features/auth/auth'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    orders:orderReducer,
    auth:authReducer
 }
})
