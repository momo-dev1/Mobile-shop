import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    total_price: 0,
    total_amount: 0,
    shipping_fees: 599,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, { payload }) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += payload.quantity;
            } else {
                const tempProduct = { ...payload, quantity: 1 };
                state.cartItems.push(tempProduct);
            }
        },
        calculateTotals: (state) => {
            const { total, amount } = state.cartItems.reduce((cartTotal, currentItem) => {
                let { price, amount } = currentItem;
                const itemTotal = price * amount;

                cartTotal.amount += amount;
                cartTotal.total += itemTotal;

                return cartTotal;
            }, { total: 0, amount: 0 });

            state.total_amount = amount;
            state.total_price = total
        },
    }
});

export const { addToCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
