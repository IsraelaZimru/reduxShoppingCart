import { uiActions } from '../ui-slice';
import { cartActions } from './cart-slice';


// my own action function for async code:
//must be without sync
export const sendCartData = (cart) => {
    // we have to return a function !! we can make it async!!
    return async (dispatch) => {
        try {
            dispatch(uiActions.showNotification({
                status: "pending",
                title: "Sending...",
                msg: "Sending cart data!"
            }))
            //showing notification
            //sending updated cart to database
            const response = await fetch('https://reduxshoppingcart-caf86-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                })

            if (!response.ok) throw new Error('Sending cart data failed.')
            // const responseData = await response.json()

            //showing another notification if everything is OK
            dispatch(uiActions.showNotification({
                status: "success",
                title: "Seuccess!",
                msg: "Send cart data successfully!"
            }))

        } catch (err) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error!",
                msg: "Send cart data failed!"
            }))
        }



    }
}


export const getCartItems = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://reduxshoppingcart-caf86-default-rtdb.europe-west1.firebasedatabase.app/cart.json')

            if (!response.ok) throw new Error('Feching cart data failed.')


            const responseData = await response.json();

            if (responseData.products.length) {
                dispatch(cartActions.getCartFromDB(responseData))
            }
        } catch (err) {
            console.log(err);
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error!",
                msg: "Feching cart data failed."
            }))
        }
    }
}