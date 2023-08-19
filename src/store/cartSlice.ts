import { IProduct } from "@/types/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type cartProducts = {
    product_id: number,
    qty:number,
    price:number,
    title: string
}



type CartState = {
    products: cartProducts[],
    finalTotal: number
  };

const initialState:CartState = {
    products: [],
    finalTotal: 0
} 

  export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<cartProducts>) => {
            state.products.push({
                price: action.payload.price,
                product_id: action.payload.product_id,
                qty: action.payload.qty,
                title: action.payload.title
            })
        }
    }

  })

  export const {
   addToCart
  } = cart.actions;
  export default cart.reducer;

