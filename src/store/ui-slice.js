import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: true
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleShowCart(state) {
            state.show = !state.show
        }
    }

})

export default uiSlice.reducer;
export const uiActions = uiSlice.actions; 