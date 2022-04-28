import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], cart: [] };
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
});

export const { } = productsSlice.actions;
export default productsSlice.reducer;

