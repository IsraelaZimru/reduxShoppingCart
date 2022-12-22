import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';

const Cart = (props) => {
  const products = useSelector(state => state.cart.products);
  const show = useSelector(state => state.cart.show)

  return show ? <Card className={classes.cart} >
    <h2>Your Shopping Cart</h2>
    {
      products.map(item => <ul key={item.id}>
        <CartItem
          item={item}
        />
      </ul>)
    }
  </Card > : null

};

export default Cart;
