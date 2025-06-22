import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useNotification } from '../hooks/useNotification';
import Button from '../components/common/Button';

export default function HomePage() {
  const { state, dispatch } = useApp();
  const { showSuccess } = useNotification();

  const handleAddToCart = (productId: number) => {
    dispatch({ type: 'ADD_TO_CART', payload: { productId, quantity: 1 } });
    showSuccess('Product added to cart!');
  };

  const featuredProducts = state.products.slice(0, 4);

  return (
    <div className="page active">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Welcome to NU Mantra Infotech</h1>
              <h2>Your Premier Electronics & Robotics Partner</h2>
              <p>
                Discover cutting-edge Arduino boards, ESP modules, sensors, and complete robotics solutions. 
                We provide high-quality electronics components for educators, makers, and professionals worldwide. 
                From prototyping to production, we have everything you need to bring your innovative ideas to life.
              </p>
              <div className="hero-features">
                <div className="feature-item">
                 
                  <span>Fast & Free Shipping</span>
                </div>
                <div className="feature-item">
                  <span>Cash on Delivery Available</span>
                </div>
                <div className="feature-item">

                  <span>24/7 Technical Support</span>
                </div>
              </div>
              <div className="hero-buttons">
                <Link to="/products">
                  <Button variant="primary" size="lg">Shop Now</Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="https://cdn3.f-cdn.com/files/download/197931628/arduino.jpg" 
                alt="Arduino UNO R4 WiFi" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2>Latest Arduino UNO R4, ESP32-S3 Development Boards, Advanced Servo Motors, IoT Sensors</h2>
          <p className="section-subtitle">Discover our premium collection of cutting-edge electronics components</p>
          <div className="product-carousel">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card featured">
                <div className="product-badge">Featured</div>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="rating">★★★★★ ({product.reviews} reviews)</div>
                <div className="price-info">
                  <span className="price">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <>
                      <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                      <span className="discount">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    </>
                  )}
                </div>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to Cart
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="categories">
        <div className="container">
          <h2>16 Specialized Categories</h2>
          <p className="section-subtitle">Explore our comprehensive range of electronics and robotics components</p>
          <div className="categories-grid">
            {state.categories.map(category => (
              <Link 
                key={category.id} 
                to={`/products?category=${encodeURIComponent(category.name)}`}
                className="category-card"
              >
                <h3>{category.name}</h3>
                <p className="count">{category.count}+ products</p>
              </Link>
            ))}
          </div>
          <div className="categories-stats">
            <div className="stat-item">
              <span className="stat-number">90+</span>
              <span className="stat-label">Products Available</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">16</span>
              <span className="stat-label">Product Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Customer Support</span>
            </div>
          </div>
        </div>
      </section>


      {/* Technology Solutions */}
<section className="solutions">
  <div className="container">
    <h2>
      Complete Solutions for Educational Institutions, Maker Communities, Professional Development,
      Industrial Automation, Research Labs, and Retail & Resellers
    </h2>
    <p className="section-subtitle">Tailored technology solutions for every need</p>

    <div className="solutions-grid">
      {/* Educational Institutions */}
      <div className="solution-card">
        <img
          src="https://pplx-res.cloudinary.com/image/upload/v1748632739/pplx_project_search_images/c07b6a8db681ff5e16a4c32e1bd636e000ca4231.jpg"
          alt="Educational Solutions"
        />
        <h3>Educational Institutions</h3>
        <p>Comprehensive STEM learning kits, curriculum support, and bulk ordering for schools and universities.</p>
        <ul>
          <li>Complete Arduino & Raspberry Pi kits</li>
          <li>Curriculum-aligned projects</li>
          <li>Teacher training programs</li>
          <li>Bulk discount pricing</li>
        </ul>
      </div>

      {/* Maker Communities */}
      <div className="solution-card">
        <img
          src="https://pplx-res.cloudinary.com/image/upload/v1749470701/pplx_project_search_images/89eb2c94ac0ed0eb020b88a1061e08b8c4143065.jpg"
          alt="Maker Communities"
        />
        <h3>Maker Communities</h3>
        <p>Prototyping tools, development boards, and creative components for maker spaces and hobbyists.</p>
        <ul>
          <li>3D printing accessories</li>
          <li>Rapid prototyping tools</li>
          <li>Community project sharing</li>
          <li>Maker space partnerships</li>
        </ul>
      </div>

      {/* Professional Development */}
      <div className="solution-card">
        <img
          src="https://pplx-res.cloudinary.com/image/upload/v1749470701/pplx_project_search_images/70bcb4bd49c07312c84c65a5df49c648084631ca.jpg"
          alt="Professional Development"
        />
        <h3>Professional Development</h3>
        <p>Advanced development boards, professional-grade components, and industrial solutions for engineers.</p>
        <ul>
          <li>Industrial-grade components</li>
          <li>Professional consulting</li>
          <li>Custom solution design</li>
          <li>Technical documentation</li>
        </ul>
      </div>

      {/* Industrial Automation */}
      <div className="solution-card">
        <img
          src="https://pplx-res.cloudinary.com/image/upload/v1748968272/pplx_project_search_images/5eec5b37950777e44b607c15d22e3513b28cf504.jpg"
          alt="Industrial Automation"
        />
        <h3>Industrial Automation</h3>
        <p>Sensors, actuators, and control systems for industrial automation projects.</p>
        <ul>
          <li>Industrial sensors & actuators</li>
          <li>Process control systems</li>
          <li>Quality assurance testing</li>
          <li>Maintenance support</li>
        </ul>
      </div>

     {/* Labs */}
<div className="solution-card">
  <img
    src="https://i0.wp.com/yaleclimateconnections.org/wp-content/uploads/2022/11/091619_lab.jpg?w=680&ssl=1"
    alt="Labs"
  />
  <h3>Labs</h3>
  <p>Modern educational labs equipped with cutting-edge digital tools and components for immersive learning and innovation.</p>
  <ul>
    <li>Tablets for digital learning</li>
    <li>Interactive Panels for dynamic teaching</li>
    <li>VR Glasses for immersive simulations</li>
    <li>IT Peripherals for enhanced connectivity</li>
    <li>All types of electronic components</li>
  </ul>
</div>


      {/* Retail & Resellers */}
      <div className="solution-card">
        <img
          src="https://innostax.com/wp-content/uploads/2024/02/Retail-Technology.webp"
          alt="Retail & Resellers"
        />
        <h3>Retail & Resellers</h3>
        <p>Ready-to-sell kits, private labeling, and logistic support for tech retailers and distributors.</p>
        <ul>
          <li>White-label product offerings</li>
          <li>Retail-ready packaging</li>
          <li>Inventory management support</li>
          <li>Custom catalog solutions</li>
        </ul>
      </div>
    </div>
  </div>
</section>

 

     {/* Customer Testimonials */}
<section className="testimonials">
  <div className="container">
    <h2>Testimonials from Universities, Startups, and Professional Engineers</h2>
    <p className="section-subtitle">Success stories from our satisfied customers</p>
    <div className="testimonial-grid">
      <div className="testimonial-card">
        <div className="testimonial-rating">★★★★★</div>
        <p>"NU Mantra Infotech has been a trusted partner for our lab equipment and components. Their support during our research projects has been top-notch."</p>
        <div className="testimonial-author">
          <strong>Dr. Asha Nair</strong>
        </div>
        <div className="testimonial-project">Project: Real-Time Power Monitoring System</div>
      </div>

      <div className="testimonial-card">
        <div className="testimonial-rating">★★★★★</div>
        <p>"We sourced almost all components for our product prototype from NU Mantra. Quality, delivery, and pricing are just perfect for startups like ours."</p>
        <div className="testimonial-author">
          <strong>Rohan Mehta</strong>
        </div>
        <div className="testimonial-project">Project: Industrial Robotic Arm for SMEs</div>
      </div>

      <div className="testimonial-card">
        <div className="testimonial-rating">★★★★★</div>
        <p>"Our student team participated in a national robotics competition and NU Mantra's kits helped us build and test efficiently. Great experience!"</p>
        <div className="testimonial-author">
          <strong>Priya Kulkarni</strong>
        </div>
        <div className="testimonial-project">Project: Line Following Robot for TechFest</div>
      </div>
    </div>
  </div>
</section>


      {/* Support & Resources */}
      <section className="newsletter">
        <div className="container">
          <h2>24/7 Technical Support, Comprehensive Documentation, Project Tutorials, and Community Forums</h2>
          <p className="section-subtitle">Complete support ecosystem for your projects</p>
          
          <div className="support-grid">
            <div className="support-item">
              <h4>Technical Support</h4>
              <p>24/7 expert assistance for all your technical queries</p>
            </div>
            <div className="support-item">
              <h4>Documentation</h4>
              <p>Comprehensive guides and datasheets for every component</p>
            </div>
            <div className="support-item">
              <h4>Project Tutorials</h4>
              <p>Step-by-step tutorials for beginners to advanced users</p>
            </div>
            <div className="support-item">
              <h4>Community Forums</h4>
              <p>Connect with fellow makers and share your projects</p>
            </div>
          </div>

          <div className="trust-badges">
            <div className="badge-item">SSL Secure Checkout</div>
            <div className="badge-item">Fast & Free Shipping</div>
            <div className="badge-item">30-Day Return Policy</div>
            <div className="badge-item">Quality Guaranteed</div>
          </div>

          <div className="newsletter-signup">
            <h3>Stay Updated with Latest Products & Offers</h3>
            <p>Subscribe to our newsletter for exclusive deals and new product announcements</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" className="form-control" />
              <Button variant="primary">Subscribe Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}