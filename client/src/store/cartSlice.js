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
        addToCart(state, { payload }) {
            const itemIndex = state.cart.findIndex((item) => item.id === payload.id);
            if (itemIndex >= 0) {
                state.cart[itemIndex].quantity += payload.quantity;
            } else {
                const tempProduct = { ...payload, quantity: 1 };
                state.cart.push(tempProduct);
            }
        }
    }
});

// export const { } = cartSlice.actions;
export default cartSlice.reducer;