import { createSlice, createStore } from "@reduxjs/toolkit";

const initialState = { products: [], cart: [] };
const productsSlice = createSlice({
    name: "products"
    ,
    initialState,
    reducers: {

    }
});


const store = createStore(productsSlice.reducer);
export const { } = productsSlice.actions;

