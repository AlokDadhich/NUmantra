import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Button from '../components/common/Button';

export default function CartPage() {
  const { state, dispatch } = useApp();

  const handleRemoveItem = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { productId, quantity } });
    }
  };

  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (state.cart.length === 0) {
    return (
      <div className="page active">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <h1>Shopping Cart</h1>
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <h3>Your cart is empty</h3>
            <p>Discover amazing electronics and robotics components</p>
            <Link to="/products">
              <Button variant="primary">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page active">
      <div className="container" style={{ paddingTop: '2rem' }}>
        <h1>Shopping Cart</h1>
        <div className="cart-items">
          {state.cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p className="price">₹{item.price.toLocaleString()}</p>
              </div>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn" 
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="item-total">₹{(item.price * item.quantity).toLocaleString()}</div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Total: ₹{total.toLocaleString()}</h3>
          <Link to="/checkout">
            <Button variant="primary" fullWidth>
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}