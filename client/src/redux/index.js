import { createSlice, createStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter"
    ,
    initialState: {
        value: 0
    },
    reducers: {
        increase: (state, action) => {
            state.value += action.payload;
        },
        decrease: (state, action) => {
            state.value -= action.payload;
        }

    }
});


const store = createStore(counterSlice.reducer);
export const { increase, decrease } = counterSlice.actions;

export default store