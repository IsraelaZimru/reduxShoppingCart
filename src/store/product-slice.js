import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: "",
    title: "",
    price: "",
    description: ""
}

const productSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleShowCart(state) {
            state.show = !state.show
        },
        addItem(state, product) {
            const item = state.products.includes(item => item.id === product.id)
            if (item) {
                item.amount = item.amount + 1
            } else {
                state.products.push(product)
            }
        }
    }

})

export default productSlice.reducer;
export const productActions = productSlice.actions; //עכשיו האקשן נוצר עבורנו