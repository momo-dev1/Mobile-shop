import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json"

const initialState = {
    products: data.productlist,
    filtered_Products: [],
    sort: 'most-popular',
    quickSpecs: false,
    filters: {
        search: '',
        company: '',
        shipping: false,
    },
    isLoading: false,
};

// export const getCartItems = createAsyncThunk(
//     'cart/getCartItems',
//     async (_, thunkAPI) => {
//       try {
//         return await axios(url).then((res) => res.data);
//       } catch (error) {
//         return thunkAPI.rejectWithValue('something went wrong');
//       }
//     }
//   );

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
        clearFilters(state) {
            state.filters = {
                search: '',
                company: '',
                shipping: false,
            };
            state.filtered_Products = []
        },
        updateQuickSpecs(state) {
            state.quickSpecs = !state.quickSpecs;
        },
        sortProducts(state) {
            const { sort, filters: { company } } = state;
            let temProducts = [...state.products];
            if (company) {
                temProducts = [...state.filtered_Products]
            }

            if (sort === 'most-popular') {
                temProducts.sort((value) => value ? -1 : 1);
            }

            if (sort === 'price-lowest') {
                temProducts.sort((a, b) => a.price - b.price);
            }

            if (sort === 'price-highest') {
                temProducts.sort((a, b) => b.price - a.price);
            }

            if (sort === "name-a") {
                temProducts.sort((a, b) => a.name.localeCompare(b.name));
            }
            state.filtered_Products = temProducts
        },
        filterProducts(state, { payload }) {
            const { company, search } = state.filters;

            let temProducts = [...state.products];

            if (company) {
                temProducts = temProducts.filter(product => product.company === company);
            }
            if (search) {
                temProducts = temProducts.filter(product => product.name.toLowerCase().startsWith(search.toLowerCase()));
            }
            state.filtered_Products = temProducts
        }

    }
});

export const { updateSort, updateFilters, updateQuickSpecs, filterProducts, sortProducts, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;

