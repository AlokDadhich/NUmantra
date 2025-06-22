import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useNotification } from '../hooks/useNotification';
import Button from '../components/common/Button';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state, dispatch } = useApp();
  const { showSuccess, showError } = useNotification();
  const [quantity, setQuantity] = useState(1);

  const product = state.products.find(p => p.id === parseInt(id || '0'));

  useEffect(() => {
    if (product) {
      dispatch({ type: 'SET_CURRENT_PRODUCT', payload: product });
    }
  }, [product, dispatch]);

  if (!product) {
    return (
      <div className="page active">
        <div className="container\" style={{ paddingTop: '2rem' }}>
          <h1>Product not found</h1>
          <Button onClick={() => navigate('/products')}>
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    if (quantity > product.stock) {
      showError(`Only ${product.stock} items available in stock`);
      return;
    }
    dispatch({ type: 'ADD_TO_CART', payload: { productId: product.id, quantity } });
    showSuccess(`${quantity} ${quantity === 1 ? 'item' : 'items'} added to cart!`);
  };

  return (
    <div className="page active">
      <div className="container" style={{ paddingTop: '2rem' }}>
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p className="price">₹{product.price.toLocaleString()}</p>
            <p className="rating">★ {product.rating} ({product.reviews} reviews)</p>
            <p className="description">{product.description}</p>
            <div className="quantity-controls">
              <button 
                className="quantity-btn" 
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input 
                type="number" 
                className="quantity-input" 
                value={quantity} 
                min="1" 
                max={product.stock}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              />
              <button 
                className="quantity-btn" 
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <Button variant="primary" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button variant="secondary" onClick={() => navigate('/products')}>
                Back to Products
              </Button>
            </div>
          </div>
        </div>
        <div className="product-specs">
          <h3>Specifications</h3>
          <p>Category: {product.category}</p>
          <p>In Stock: {product.stock} units</p>
          <p>SKU: {product.id.toString().padStart(6, '0')}</p>
        </div>
      </div>
    </div>
  );
}