import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cart/cart-slice";
import uiReducer from "./ui-slice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        ui: uiReducer
    }, devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export default store;
