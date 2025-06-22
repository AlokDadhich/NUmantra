import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNotification } from '../hooks/useNotification';
import Button from '../components/common/Button';
import FormInput from '../components/common/FormInput';

export default function AccountPage() {
  const { state, dispatch } = useApp();
  const { showSuccess } = useNotification();
  const [activeTab, setActiveTab] = useState(state.currentUser ? 'profile' : 'login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      email: loginData.email,
      name: 'Demo User'
    };
    dispatch({ type: 'SET_CURRENT_USER', payload: user });
    showSuccess('Logged in successfully!');
    setActiveTab('profile');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      email: registerData.email,
      name: registerData.name
    };
    dispatch({ type: 'SET_CURRENT_USER', payload: user });
    showSuccess('Account created successfully!');
    setActiveTab('profile');
  };

  const handleLogout = () => {
    dispatch({ type: 'SET_CURRENT_USER', payload: null });
    showSuccess('Logged out successfully!');
    setActiveTab('login');
  };

  const userOrders = state.orders.filter(order => 
    order.customer.email === state.currentUser?.email
  );

  return (
    <div className="page active">
      <div className="container" style={{ paddingTop: '2rem' }}>
        <div className="account-tabs">
          <button 
            className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button 
            className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
          <button 
            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
        </div>
        
        {activeTab === 'login' && (
          <div className="tab-content active">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <FormInput
                label="Email"
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                required
              />
              <FormInput
                label="Password"
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                required
              />
              <Button type="submit" variant="primary">
                Login
              </Button>
            </form>
          </div>
        )}
        
        {activeTab === 'register' && (
          <div className="tab-content active">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
              <FormInput
                label="Full Name"
                type="text"
                value={registerData.name}
                onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                required
              />
              <FormInput
                label="Email"
                type="email"
                value={registerData.email}
                onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                required
              />
              <FormInput
                label="Password"
                type="password"
                value={registerData.password}
                onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                required
              />
              <Button type="submit" variant="primary">
                Register
              </Button>
            </form>
          </div>
        )}
        
        {activeTab === 'profile' && (
          <div className="tab-content active">
            <h2>Profile</h2>
            {state.currentUser ? (
              <div>
                <h3>Welcome, {state.currentUser.name}!</h3>
                <p>Email: {state.currentUser.email}</p>
                <h4>Order History</h4>
                {userOrders.length > 0 ? (
                  userOrders.map(order => (
                    <div key={order.id} className="order-item" style={{ 
                      padding: '1rem', 
                      margin: '1rem 0', 
                      border: '1px solid #e9ecef', 
                      borderRadius: '8px' 
                    }}>
                      <p>Order #{order.id} - {order.date}</p>
                      <p>Status: {order.status}</p>
                      <p>Total: ₹{order.total.toLocaleString()}</p>
                      <p>Payment: {order.paymentMethod}</p>
                    </div>
                  ))
                ) : (
                  <p>No orders yet</p>
                )}
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <p>Please login to view your profile</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}