import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../counterSlice/CounterSlice";
import cartSlice from "../cartSlice/Index";

export const store=configureStore({
  reducer:{
    counter:counterSlice,
    cart:cartSlice,
  }
})