import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: true, total: 0, products: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleShowCart(state) {
            state.show = !state.show
        },
        addItem(state, action) {
            const product = action.payload;
            const item = state.products.find(item => item.id === product.id)
            if (item) {
                item.quantity++;
            } else {
                state.products.push({ ...product, quantity: 1 })
                state.total++;
            }
        },
        removeItem(state, action) {
            const product = action.payload;
            const item = state.products.find(item => item.id === product.id)
            if (item.quantity === 1) {
                state.products = state.products.filter(item => item.id !== product.id)
                state.total--
            } else {
                item.quantity--;

            }

        }
    }

})

export default cartSlice.reducer;
export const cartActions = cartSlice.actions; 