import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNotification } from '../hooks/useNotification';
import Button from '../components/common/Button';

export default function AdminPage() {
  const { state, dispatch } = useApp();
  const { showSuccess } = useNotification();
  const [activeTab, setActiveTab] = useState('products');

  const handleUpdateOrderStatus = (orderId: number) => {
    const order = state.orders.find(o => o.id === orderId);
    if (order) {
      const statuses = ['Processing', 'Shipped', 'Delivered', 'Cancelled'];
      const currentIndex = statuses.indexOf(order.status);
      const nextIndex = (currentIndex + 1) % statuses.length;
      const newStatus = statuses[nextIndex];
      
      dispatch({ 
        type: 'UPDATE_ORDER_STATUS', 
        payload: { orderId, status: newStatus }
      });
      showSuccess(`Order #${orderId} status updated to ${newStatus}`);
    }
  };

  const handleEditProduct = (productId: number) => {
    showSuccess('Product edit functionality would be implemented here');
  };

  return (
    <div className="page active">
      <div className="container" style={{ paddingTop: '2rem' }}>
        <h1>Admin Dashboard</h1>
        <div className="admin-tabs">
          <button 
            className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Manage Products
          </button>
          <button 
            className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
        </div>
        
        {activeTab === 'products' && (
          <div className="tab-content active">
            <h2>Product Management</h2>
            <Button variant="primary" style={{ marginBottom: '1rem' }}>
              Add New Product
            </Button>
            <div className="admin-products-list">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {state.products.slice(0, 20).map(product => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>₹{product.price.toLocaleString()}</td>
                      <td>{product.stock}</td>
                      <td>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEditProduct(product.id)}
                        >
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {activeTab === 'orders' && (
          <div className="tab-content active">
            <h2>Order Management</h2>
            <div className="admin-orders-list">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Payment Method</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {state.orders.map(order => (
                    <tr key={order.id}>
                      <td>#{order.id}</td>
                      <td>{order.date}</td>
                      <td>{order.customer.name}</td>
                      <td>₹{order.total.toLocaleString()}</td>
                      <td>{order.paymentMethod}</td>
                      <td>{order.status}</td>
                      <td>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleUpdateOrderStatus(order.id)}
                        >
                          Update
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}