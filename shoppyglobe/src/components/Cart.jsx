import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import CartItem from './CartItem';
import '../style/Cart.css'; 

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {items.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <button className="clear-cart-button" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;