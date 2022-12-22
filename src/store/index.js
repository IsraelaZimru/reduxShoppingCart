import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cart-slice"
const store = configureStore({
    reducer: {
        cart: cartReducer
    }, devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export default store;
