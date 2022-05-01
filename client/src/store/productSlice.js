import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
    sort: 'most-popular',
    company: '',
    quickSpecs: false,
    filters: {
        search: '',
        min_price: 0,
        max_price: 100000,
        shipping: false,
    }
};
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        updateSort(state, { payload }) {
            state.sort = payload;
        },
        updateFilters(state, { payload }) {
            state.company = payload;
        },
        updateQuickSpecs(state) {
            state.quickSpecs = !state.quickSpecs;
        },

    }
});

export const { updateSort, updateFilters, updateQuickSpecs } = productsSlice.actions;
export default productsSlice.reducer;

