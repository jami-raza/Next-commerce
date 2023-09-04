import { IProduct } from "@/types/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type cartProducts = {
    product_id: string,
    qty: number,
    price: number,
    title: string,
    subTotal: number
}



type CartState = {
    products: cartProducts[],
    finalTotal: number
};

const initialState: CartState = {
    products: [],
    finalTotal: 0
}

export const cart = createSlice({
    name: "cart",
    initialState:initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<cartProducts>) => {
            const productIndex = state.products.findIndex(il => il.product_id == action.payload.product_id)
            if (productIndex >= 0) {
                state.products[productIndex].qty += 1
                state.products[productIndex].subTotal = state.products[productIndex].qty * state.products[productIndex].price
            } else {
                state.products.push({
                    price: action.payload.price,
                    product_id: action.payload.product_id,
                    qty: action.payload.qty,
                    title: action.payload.title,
                    subTotal: action.payload.subTotal
                })
            }


            state.finalTotal = state.products.reduce((parsalsum, a) => parsalsum + a.subTotal, 0)

        },
        removeToCart: (state, action: PayloadAction<string>) => {
            const productIndex = state.products.findIndex(il => il.product_id == action.payload)
            if (productIndex >= 0) {
                let pr = state.products
                pr.splice(productIndex, 1)
                state.products = pr
            }
        },
        plusQanity: (state, action: PayloadAction<string>) => {
            const productIndex = state.products.findIndex(il => il.product_id == action.payload)
            if (productIndex >= 0) {
                state.products[productIndex].qty += 1
                state.products[productIndex].subTotal = state.products[productIndex].qty * state.products[productIndex].price
                state.finalTotal = state.products.reduce((parsalsum, a) => parsalsum + a.subTotal, 0)
            }
        },
        minusQuantity: (state, action: PayloadAction<string>) => {
            const productIndex = state.products.findIndex(il => il.product_id == action.payload)
            if (productIndex >= 0) {

                state.products[productIndex].qty = state.products[productIndex].qty - 1
                state.products[productIndex].subTotal = state.products[productIndex].qty * state.products[productIndex].price
                state.finalTotal = state.products.reduce((parsalsum, a) => parsalsum + a.subTotal, 0)
                if (state.products[productIndex].qty < 1) {
                    let pr = state.products
                    pr.splice(productIndex, 1)
                    state.products = pr
                }
            }
           


        },
        clearCart: (state) => {
                state.products = [];
                state.finalTotal = 0
             

                
        }
    }

})

export const {
    addToCart,
    removeToCart,
    plusQanity,
    minusQuantity,
    clearCart
} = cart.actions;
export default cart.reducer;

