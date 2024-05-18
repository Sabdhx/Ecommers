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
<<<<<<< HEAD
      const response = await axios.get("http://localhost:4000/products");
      return response.data; // Return the fetched data as payload
=======
      const response = await axios.get("https://dummyjson.com/products");
      return response.data.products; // Return the fetched data as payload
>>>>>>> 3fe3898711fcbec4c1b856119796b61aa5457a82
    } catch (err) {
      throw err;
    }
  }
);

export const fetchingSearchApi = createAsyncThunk(
  "products/fetchingSearchApi",
  async (search) => {
    try {
<<<<<<< HEAD
      const response = await axios.get(
        "https://dummyjson.com/products/search?q=" + search
      );

      return response.data;
=======
      const response = await axios.get("https://dummyjson.com/products/search?q="+search);

      return response.data;
      console.log(response.data); // Return the fetched data as payload
>>>>>>> 3fe3898711fcbec4c1b856119796b61aa5457a82
    } catch (err) {
      throw err;
    }
  }
);


<<<<<<< HEAD



=======
>>>>>>> 3fe3898711fcbec4c1b856119796b61aa5457a82
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    try {
<<<<<<< HEAD
      const response = await axios.get("http://localhost:4000/products/" + id);
=======
      const response = await axios.get("https://dummyjson.com/products/" + id);
>>>>>>> 3fe3898711fcbec4c1b856119796b61aa5457a82
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

<<<<<<< HEAD

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






=======
>>>>>>> 3fe3898711fcbec4c1b856119796b61aa5457a82
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

<<<<<<< HEAD
=======

>>>>>>> 3fe3898711fcbec4c1b856119796b61aa5457a82
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

<<<<<<< HEAD
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

      
=======

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
>>>>>>> 3fe3898711fcbec4c1b856119796b61aa5457a82
  },
});
export const {} = productSlice.actions;
export default productSlice.reducer;
<<<<<<< HEAD
=======
// export const {Product,error,loading} =productSlice.extraReducers
>>>>>>> 3fe3898711fcbec4c1b856119796b61aa5457a82
