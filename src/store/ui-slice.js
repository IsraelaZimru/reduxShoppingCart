import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: true,
    notification: null
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleShowCart(state) {
            state.show = !state.show
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                msg: action.payload.msg
            }
        }
    }

})

export default uiSlice.reducer;
export const uiActions = uiSlice.actions; 