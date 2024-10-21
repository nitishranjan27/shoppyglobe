import { Link } from 'react-router-dom';
import '../style/Header.css';
import { selectCartItemsCount } from '../redux/cartSlice';
import { useSelector } from 'react-redux';


const Header = () => {
    const cartItemCount = useSelector(selectCartItemsCount);
  return (
    <header className="header">
      <nav className="nav">
        <h3 className="logo">ShoppyGlobe</h3>
        <ul className="nav-links">
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/cart" className="nav-item">Cart ({cartItemCount})</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;