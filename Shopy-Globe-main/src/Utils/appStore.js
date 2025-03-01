import { configureStore } from '@reduxjs/toolkit';

import cartreducer from '../Utils/cartSlice.js'
export const store = configureStore({
    reducer: {
        cart: cartreducer
    },
});