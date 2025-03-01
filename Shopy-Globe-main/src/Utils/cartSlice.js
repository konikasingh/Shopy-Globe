import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    value: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        additem: (state, action) => {
            state.value.push(action.payload)

        },
        removeitem: (state, action) => {
            let id = action.payload;

            state.value = state.value.filter((productId) => productId !== id)
        },
    },
});
export const { additem, removeitem } = cartSlice.actions;
export default cartSlice.reducer;