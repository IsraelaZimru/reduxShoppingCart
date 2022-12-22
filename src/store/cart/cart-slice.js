import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    total: 0, products: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        getCartFromDB(state, action) {
            state.products = action.payload.products;
            state.total = action.payload.total;
        },
        addItem(state, action) {
            const product = action.payload;
            const item = state.products.find(item => item.id === product.id)
            state.total++;
            if (item) {
                item.quantity++;
            } else {
                state.products.push({ ...product, quantity: 1 })
            }
        },
        removeItem(state, action) {
            const product = action.payload;
            const item = state.products.find(item => item.id === product.id)
            state.total--;
            if (item.quantity === 1) {
                state.products = state.products.filter(item => item.id !== product.id)
            } else {
                item.quantity--;

            }

        }
    }

})


export default cartSlice.reducer;
export const cartActions = cartSlice.actions; 