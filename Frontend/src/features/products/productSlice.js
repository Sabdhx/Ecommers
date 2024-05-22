import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  products: [],
  singleSelectedProduct: null,

};

export const fetchingApi = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      return response.data; // Return the fetched data as payload
    
    } catch (err) {
      throw err;
    }
  }
);

export const fetchingSearchApi = createAsyncThunk(
  "products/fetchingSearchApi",
  async (search) => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/search?q=" + search
      );

      

      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    try {
      const response = await axios.get("https://dummyjson.com/products/" + id);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

  export const fetchProductByFilter = createAsyncThunk(
    "products/fetchProductByFilter",
    async (filter) => {
      try {
        let qs = "";
        for (let key in filter) {
          qs += `${key}=${filter[key]}&`;
          console.log(filter[key]);
        }
        
        const response = await axios.get("http://localhost:4000/products?" + qs);
        return response.data; 
      } catch (error) {
        throw error;
      }
    }
  )

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchingApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchingApi.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchingApi.rejected, (state, action) => {
        state.loading = false;
        state.error = "there is an error";
      })


      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.singleSelectedProduct = action.payload;
        state.error = null;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = "there is an error";
      })

      .addCase(fetchingSearchApi.fulfilled, (state, action) => {
        const { payload } = action;
        if (Array.isArray(payload)) {
          // Regular products fetched
          state.products = payload;
          state.loading = false;
          state.error = null;
        } else if (payload && Array.isArray(payload.products)) {
          // Search results fetched
          state.products = payload.products;
          state.loading = false;
          state.error = null;
        } else {
          // Handle unexpected data format
          state.loading = false;
          state.error = "Unexpected data format";
        }
      })
      .addCase(fetchProductByFilter.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductByFilter.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      });

      

    

  },
});
export const {} = productSlice.actions;
export default productSlice.reducer;
// export const {Product,error,loading} =productSlice.extraReducers
