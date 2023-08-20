import {
    createAsyncThunk,
    createSlice,
  } from '@reduxjs/toolkit';
//   import axios from 'axios';
  import type { RootState } from './store';
import { getProducts } from '@/app/api/getProducts';
import { IProduct } from '@/types/product.type';
import { groq } from 'next-sanity'
import client from '../../client';
  // here we are typing the types for the state
  export type KanyeState = {
    data: IProduct[]
    pending: boolean;
    error: boolean;
  };
  
  const initialState: KanyeState = {
    data: [],
    pending: false,
    error: false,
  };
  
  // This action is what we will call using the dispatch in order to trigger the API call.
  export const getAsyncProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await client.fetch(groq`*[_type == 'product']{
      _id, name, shortdescription, image, price, category-> 
    }`)
  //   const response = 
  console.log(response, "Response")
    return response;
  });
  
  export const kanyeSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
  // leave this empty here
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getAsyncProducts.fulfilled, (state, action) => {
          // Add user to the state array
          state.data = action.payload
          state.pending = false
          state.error = false
        })
      },
  // The `extraReducers` field lets the slice handle actions defined elsewhere, including actions generated by createAsyncThunk or in other slices. 
  // Since this is an API call we have 3 possible outcomes: pending, fulfilled and rejected. We have made allocations for all 3 outcomes. 
  // Doing this is good practice as we can tap into the status of the API call and give our users an idea of what's happening in the background.
   
  });
  
  export const selectKanye = (state: RootState) => state.productReducer;
  
  export default kanyeSlice.reducer;