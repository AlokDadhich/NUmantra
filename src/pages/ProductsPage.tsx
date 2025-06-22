import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useNotification } from '../hooks/useNotification';
import Button from '../components/common/Button';

export default function ProductsPage() {
  const { state, dispatch } = useApp();
  const { showSuccess } = useNotification();
  const [searchParams] = useSearchParams();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') || '');
  const [priceFilter, setPriceFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 12;

  const filteredProducts = useMemo(() => {
    return state.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !categoryFilter || product.category === categoryFilter;
      
      let matchesPrice = true;
      if (priceFilter) {
        const price = product.price;
        switch(priceFilter) {
          case '0-500':
            matchesPrice = price >= 0 && price <= 500;
            break;
          case '500-1000':
            matchesPrice = price > 500 && price <= 1000;
            break;
          case '1000-2500':
            matchesPrice = price > 1000 && price <= 2500;
            break;
          case '2500-5000':
            matchesPrice = price > 2500 && price <= 5000;
            break;
          case '5000+':
            matchesPrice = price > 5000;
            break;
        }
      }
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [state.products, searchTerm, categoryFilter, priceFilter]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleAddToCart = (productId: number) => {
    dispatch({ type: 'ADD_TO_CART', payload: { productId, quantity: 1 } });
    showSuccess('Product added to cart!');
  };

  return (
    <div className="page active">
      <div className="container" style={{ paddingTop: '2rem' }}>
        <h1>All Products</h1>
        
        <div className="products-filters">
          <div className="filter-section">
            <input
              type="text"
              placeholder="Search products..."
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-section">
            <select
              className="form-control"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              {state.categories.map(category => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-section">
            <select
              className="form-control"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="0-500">₹0 - ₹500</option>
              <option value="500-1000">₹500 - ₹1,000</option>
              <option value="1000-2500">₹1,000 - ₹2,500</option>
              <option value="2500-5000">₹2,500 - ₹5,000</option>
              <option value="5000+">₹5,000+</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {paginatedProducts.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="rating">★ {product.rating} ({product.reviews} reviews)</div>
                <p className="price">₹{product.price.toLocaleString()}</p>
              </Link>
              <Button 
                variant="primary" 
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}