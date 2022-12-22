import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = ({ item }) => {
  const { id, title, quantity, price } = item;
  const dispatch = useDispatch();
  function reduce() {
    dispatch(cartActions.removeItem(item))
  }
  function increase() {
    dispatch(cartActions.addItem(item))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(quantity * price).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={reduce}>-</button>
          <button onClick={increase}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
