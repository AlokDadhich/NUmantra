import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useNotification } from '../hooks/useNotification';
import Button from '../components/common/Button';
import FormInput from '../components/common/FormInput';

export default function CheckoutPage() {
  const { state, dispatch } = useApp();
  const { showSuccess, showError } = useNotification();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1); // 1: Address, 2: Payment
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: ''
  });
  // const [paymentData, setPaymentData] = useState({
  //   cardNumber: '',
  //   expiryDate: '',
  //   cvv: '',
  //   cardholderName: ''
  // });

  useEffect(() => {
    if (state.cart.length === 0) {
      navigate('/cart');
    }
    // Set COD as default payment method when component loads
    if (!state.selectedPaymentMethod) {
      dispatch({ type: 'SET_PAYMENT_METHOD', payload: 'cod' });
    }
    // Scroll to top when component loads
    window.scrollTo(0, 0);
  }, [state.cart, navigate, state.selectedPaymentMethod, dispatch]);

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const codCharge = state.selectedPaymentMethod === 'cod' ? 50 : 0;
  const total = subtotal + codCharge;

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'SET_ORDER_FORM_DATA', payload: formData });
    setStep(2);
    // Scroll to top when moving to next step
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if COD payment method is selected
    if (!state.selectedPaymentMethod || state.selectedPaymentMethod !== 'cod') {
      showError('Please select Cash on Delivery as payment method to continue');
      return;
    }
    
    if (state.selectedPaymentMethod === 'cod' && subtotal > 400000) {
      showError('Cash on Delivery is only available for orders under ₹4.00,000');
      return;
    }

    // if (state.selectedPaymentMethod !== 'cod') {
    //   if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.cardholderName) {
    //     showError('Please fill in all payment details');
    //     return;
    //   }
    // }

    const order = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-IN'),
      time: new Date().toLocaleTimeString('en-IN'),
      items: [...state.cart],
      subtotal,
      codCharge,
      total,
      customer: formData,
      paymentMethod: getPaymentMethodName(state.selectedPaymentMethod),
      status: 'Processing'
    };

    // Send email via Formspree
    try {
      const emailData = {
        to: 'alokdadhich479@gmail.com',
        subject: `New Order #${order.id} - ${formData.name}`,
        orderDetails: `ORDER CONFIRMATION
==================

Order ID: #${order.id}
Date: ${order.date}
Time: ${order.time}
Status: ${order.status}

CUSTOMER DETAILS
================
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
City: ${formData.city}
State: ${formData.state}
Postal Code: ${formData.postalCode}

ORDERED ITEMS
=============
${order.items.map(item => 
  `• ${item.name} (Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toLocaleString()}`
).join('\n')}

PAYMENT SUMMARY
===============
Subtotal: ₹${subtotal.toLocaleString()}
Shipping: Free
${codCharge > 0 ? `COD Charge: ₹${codCharge.toLocaleString()}\n` : ''}Total: ₹${total.toLocaleString()}

Payment Method: ${order.paymentMethod}`
      };

      const response = await fetch('https://formspree.io/f/xvgrwpqw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailData.to,
          subject: emailData.subject,
          message: emailData.orderDetails,
          _replyto: formData.email,
          _subject: emailData.subject
        })
      });

      if (response.ok) {
        dispatch({ type: 'ADD_ORDER', payload: order });
        dispatch({ type: 'CLEAR_CART' });
        showSuccess('Order Confirmed Successfully! Your order has been placed and confirmation email has been sent. You will receive your items within 3-5 business days.');
        navigate('/');
      } else {
        showError('❌ Order placement failed. Please try again or contact support if the issue persists.');
        return;
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      showError('❌ Order placement failed. Please check your internet connection and try again.');
      return;
    }
  };

  const getPaymentMethodName = (method: string) => {
    const methodNames: Record<string, string> = {
      // 'card': 'Credit/Debit Card',
      // 'wallet': 'Digital Wallet',
      // 'netbanking': 'Net Banking',
      'cod': 'Cash on Delivery'
    };
    return methodNames[method] || method;
  };

  if (step === 1) {
    return (
      <div className="page active">
        <div className="container" style={{ paddingTop: '2rem', paddingLeft: '3rem', paddingRight: '3rem' }}>
          <h1>Shipping Address</h1>
          <form onSubmit={handleAddressSubmit}>
            <FormInput
              label="Full Name *"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <FormInput
              label="Email Address *"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <FormInput
              label="Phone Number *"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
            <div className="form-group">
              <label className="form-label">Complete Address *</label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="House/Flat No., Street, Landmark"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                required
              />
            </div>
            <div className="form-row">
              <FormInput
                label="City *"
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                required
              />
              <FormInput
                label="Postal Code *"
                type="text"
                value={formData.postalCode}
                onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                required
              />
            </div>
            <FormInput
              label="State *"
              type="text"
              value={formData.state}
              onChange={(e) => setFormData({...formData, state: e.target.value})}
              required
            />
            <Button type="submit" variant="primary">
              Continue to Payment
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="page active">
      <div className="container" style={{ paddingTop: '2rem' }}>
        <h1>Payment Options</h1>
        <form onSubmit={handlePaymentSubmit}>
          <div className="payment-methods">
            <h3>Choose Payment Method</h3>
            
            {/* <div className="payment-option">
              <input 
                type="radio" 
                name="payment" 
                value="card" 
                id="payment-card" 
                checked={state.selectedPaymentMethod === 'card'}
                onChange={(e) => dispatch({ type: 'SET_PAYMENT_METHOD', payload: e.target.value })}
              />
              <label htmlFor="payment-card">💳 Credit/Debit Card</label>
              <p>Secure payment via Visa, MasterCard, American Express</p>
            </div>
            
            <div className="payment-option">
              <input 
                type="radio" 
                name="payment" 
                value="wallet" 
                id="payment-wallet"
                checked={state.selectedPaymentMethod === 'wallet'}
                onChange={(e) => dispatch({ type: 'SET_PAYMENT_METHOD', payload: e.target.value })}
              />
              <label htmlFor="payment-wallet">📱 Digital Wallets</label>
              <p>PayPal, Razorpay, PhonePe, Google Pay</p>
            </div>
            
            <div className="payment-option">
              <input 
                type="radio" 
                name="payment" 
                value="netbanking" 
                id="payment-netbanking"
                checked={state.selectedPaymentMethod === 'netbanking'}
                onChange={(e) => dispatch({ type: 'SET_PAYMENT_METHOD', payload: e.target.value })}
              />
              <label htmlFor="payment-netbanking">🏦 Net Banking</label>
              <p>All major banks supported</p>
            </div> */}
            
            <div className="payment-option cod-option">
              <input 
                type="radio" 
                name="payment" 
                value="cod" 
                id="payment-cod"
                checked={state.selectedPaymentMethod === 'cod'}
                onChange={(e) => dispatch({ type: 'SET_PAYMENT_METHOD', payload: e.target.value })}
              />
              <label htmlFor="payment-cod">💵 Cash on Delivery</label>
              <p>Pay when you receive your order</p>
              <div className="cod-info">
                <small>
                  ✓ Available for orders under ₹5,000<br/>
                  ✓ Additional COD charge: ₹00 <br/>
                  ✓ Available in select cities
                </small>
              </div>
            </div>
          </div>
          
          {/* {state.selectedPaymentMethod === 'card' && (
            <div className="payment-details">
              <h4>Card Details</h4>
              <FormInput
                label="Card Number"
                type="text"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                value={paymentData.cardNumber}
                onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
              />
              <div className="form-row">
                <FormInput
                  label="Expiry Date"
                  type="text"
                  placeholder="MM/YY"
                  maxLength={5}
                  value={paymentData.expiryDate}
                  onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                />
                <FormInput
                  label="CVV"
                  type="text"
                  placeholder="123"
                  maxLength={4}
                  value={paymentData.cvv}
                  onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                />
              </div>
              <FormInput
                label="Cardholder Name"
                type="text"
                placeholder="Name as on card"
                value={paymentData.cardholderName}
                onChange={(e) => setPaymentData({...paymentData, cardholderName: e.target.value})}
              />
            </div>
          )} */}

          <div className="order-summary">
            <h4>Order Summary</h4>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            {state.selectedPaymentMethod === 'cod' && (
              <div className="summary-row cod-charge">
                <span>COD Charge:</span>
                <span>₹50.00</span>
              </div>
            )}
            <div className="summary-row total">
              <span>Total:</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
          </div>

          <Button type="submit" variant="primary" fullWidth>
            Complete Order
          </Button>
        </form>
      </div>
    </div>
  );
}