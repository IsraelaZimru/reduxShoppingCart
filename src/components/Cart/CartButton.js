import classes from './CartButton.module.css';
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const total = useSelector(state => state.cart.total)
  const dispatch = useDispatch();
  function showHandler() {
    dispatch(uiActions.toggleShowCart())
  }
  return (
    <button className={classes.button} onClick={showHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
