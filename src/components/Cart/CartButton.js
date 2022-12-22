import classes from './CartButton.module.css';
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from '../../store/cart-slice';

const CartButton = (props) => {
  const total = useSelector(state => state.cart.total)
  const dispatch = useDispatch();
  function showHandler() {
    dispatch(cartActions.toggleShowCart())
  }
  return (
    <button className={classes.button} onClick={showHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
