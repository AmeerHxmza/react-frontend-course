import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products:[
    {id:1,name:"Laptop",price:1000},
    {id:2,name:"Mobile",price:500},
    {id:3,name:"Tablet",price:300},
    {id:4,name:"Camera",price:400},
    {id:5,name:"Watch",price:200},
  ],
  cart:[]
};

const cartSlice = createSlice({
  name:"cart",
  initialState:initialState,
  reducers:{
    addToCart:(state,action)=>{
      state.cart.push(action.payload);
    },
    removeFromCart:(state,action)=>{
      state.cart=state.cart.filter((item)=>item.id!==action.payload);
    },
    clearCart:(state)=>{
      state.cart=[]
    },

  }
});

export const {addToCart, removeFromCart, clearCart}=cartSlice.actions;
export default cartSlice.reducer;