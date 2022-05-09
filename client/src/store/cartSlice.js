import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    total_products: 0,
    total_amount: 0,
    shipping_fees: 599,
};
const cartSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    }
});

// export const { } = cartSlice.actions;
export default cartSlice.reducer;
