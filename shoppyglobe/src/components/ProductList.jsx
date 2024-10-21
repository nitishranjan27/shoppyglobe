import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductItem from './ProductItem';
import '../style/ProductList.css'; 

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div className="product-loading">Loading products...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  return (
    <div className="product-list">
      {items.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;