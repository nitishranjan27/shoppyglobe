import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../redux/cartSlice';
import '../style/CartItem.css'; 

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item-container">
      <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-price">Price: ${item.price}</p>
        <p className="cart-item-quantity">Quantity: {item.quantity}</p>
        <button className="cart-item-remove-button" onClick={() => dispatch(removeItemFromCart(item))}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;