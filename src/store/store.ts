import {
    Action,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
import counterReducer from "./counterSlice";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
export const store = configureStore({
  reducer: {
    counterReducer,
    cartReducer,
    productReducer

  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;