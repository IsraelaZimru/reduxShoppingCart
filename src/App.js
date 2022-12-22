import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;


function App() {
  const show = useSelector(state => state.ui.show);
  const notification = useSelector(state => state.ui.notification);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      //showing notification
      dispatch(uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        msg: "Sending cart data!"
      }))


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
    }

    //
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(err => {
      dispatch(uiActions.showNotification({
        status: "error",
        title: "Error!",
        msg: "Send cart data failed!"
      }))
    })
  }, [cart, dispatch])

  return <>
    {notification && <Notification data={notification} />}
    <Layout>
      {show && <Cart />}
      <Products />
    </Layout>
  </>
    ;
}

export default App;
