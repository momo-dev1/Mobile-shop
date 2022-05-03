import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
    sideBar: false,
    sort: 'most-popular',
    quickSpecs: false,
    filters: {
        search: '',
        company: '',
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
            const { name, value } = payload
            state.filters[name] = value;
        },
        updateQuickSpecs(state) {
            state.quickSpecs = !state.quickSpecs;
        },
        sortProducts(state) {
            // const { sort } = state;
            // if (sort === 'most-popular') {
            //     return
            // } else if (sort === 'lowest-price') {
            //     state.products.sort((a, b) => a.price - b.price);
            // } else if (sort === 'highest-price') {
            //     state.products.sort((a, b) => b.price - a.price);
            // }
        },
        filterProducts(state, { payload }) {
            // const { company, search } = state.filters;
            // if (payload === '') {
            //     state.products = [...state.products];
            // } else if (company) {
            //     state.products = state.products.filter(product => product.company === payload);
            // } else if (search) {
            //     state.products = state.products.filter(product => product.name.toLowerCase().stratsWith(payload.toLowerCase()));
            // }
        }

    }
});

export const { updateSort, updateFilters, updateQuickSpecs, filterProducts, sortProducts } = productsSlice.actions;
export default productsSlice.reducer;

