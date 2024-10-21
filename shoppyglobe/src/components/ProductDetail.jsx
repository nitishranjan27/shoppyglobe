import { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';
import '../style/ProductDetail.css';  

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="product-loading">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return product ? (
    <div className="product-details">
      <h2 className="product-titles">{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} className="product-images" />
      <p className="product-descriptions">{product.description}</p>
      <p className="product-prices">Price: ${product.price}</p>
      <button onClick={() => dispatch(addItemToCart(product))} className="add-to-cart-buttons">
        Add to Cart
      </button>
    </div>
  ) : <div>Product not found</div>;
};

export default ProductDetail;