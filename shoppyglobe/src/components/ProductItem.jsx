import { Link } from 'react-router-dom';
import '../style/ProductItem.css';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <Link to={`/products/${product.id}`} className="product-link">View Details</Link>
    </div>
  );
};

export default ProductItem;