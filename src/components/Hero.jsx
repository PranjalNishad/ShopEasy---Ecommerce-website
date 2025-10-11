import './Hero.css'

function Hero({ onCategoryFilter }) {
  const handleCardClick = (category) => {
    onCategoryFilter(category)   // same as dropdown
  }
  
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to <span className="highlight">ShopEasy</span>
          </h1>
          <p className="hero-subtitle">
            Discover amazing products at unbeatable prices. Shop with confidence and style.
          </p>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">🚚</span>
              <span>Free Shipping</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🔒</span>
              <span>Secure Payment</span>
            </div>
            <div className="feature">
              <span className="feature-icon">↩️</span>
              <span>Easy Returns</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#main-container" className="btn-primary">
              <span className="btn-icon">🛍️</span>
                Shop Now
              </a>
            <button className="btn-secondary">
              <span className="btn-icon">📱</span>
              View Categories
            </button>
          </div>
        </div>
        
        <div className="hero-image">
          <div 
            className="floating-card card-1"
            onClick={() => handleCardClick("electronics")}
          >
            <div className="card-content">
              <div className="card-icon">💻</div>
              <div className="card-text">
                <h4>Electronics</h4>
                <p>Latest gadgets</p>
              </div>
            </div>
          </div>

          <div 
            className="floating-card card-2"
            onClick={() => handleCardClick("fashion")}
          >
            <div className="card-content">
              <div className="card-icon">👔</div>
              <div className="card-text">
                <h4>Fashion</h4>
                <p>Trendy styles</p>
              </div>
            </div>
          </div>

          <div 
            className="floating-card card-3"
            onClick={() => handleCardClick("jewelery")}
          >
            <div className="card-content">
              <div className="card-icon">💍</div>
              <div className="card-text">
                <h4>Jewelry</h4>
                <p>Elegant designs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  )
}

export default Hero