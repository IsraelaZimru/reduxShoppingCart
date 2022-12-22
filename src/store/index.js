import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cart-slice";
import uiReducer from "./cart-slice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        ui: uiReducer
    }, devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export default store;
