import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sendCartData, getCartItems } from './store/cart/cart-actions';
import Notification from './components/UI/Notification';

let isInitial = true;


function App() {
  const show = useSelector(state => state.ui.show);
  const notification = useSelector(state => state.ui.notification);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      dispatch(getCartItems());
      isInitial = false;
      return;
    }

    if (cart.changed) dispatch(sendCartData(cart));

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
