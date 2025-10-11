import { useState } from 'react'
import './ProductCard.css'

function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = () => {
    onAddToCart(product)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  const getDiscountPrice = (price) => {
    const discount = Math.floor(Math.random() * 30) + 10 // Random discount between 10-40%
    return formatPrice(price * (1 - discount / 100))
  }

  const getOriginalPrice = (price) => {
    const discount = Math.floor(Math.random() * 30) + 10
    return formatPrice(price * (1 + discount / 100))
  }

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
          <div className="product-badges">
            <span className="category-badge">{product.category}</span>
            <span className="discount-badge">-{Math.floor(Math.random() * 30) + 10}%</span>
          </div>
          {isHovered && (
            <div className="product-overlay">
              <button className="quick-view-btn">Quick View</button>
            </div>
          )}
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">
          {product.description.length > 80 
            ? `${product.description.substring(0, 80)}...` 
            : product.description
          }
        </p>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`star ${i < Math.floor(product.rating.rate) ? 'filled' : ''}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="rating-text">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>
        
        <div className="product-pricing">
          <div className="price-container">
            <span className="current-price">{formatPrice(product.price)}</span>
            <span className="original-price">{getOriginalPrice(product.price)}</span>
          </div>
          <div className="savings">You save {getDiscountPrice(product.price)}</div>
        </div>
        
        <div className="product-footer">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <span className="btn-icon">🛒</span>
            <span>Add to Cart</span>
          </button>
          <button className="wishlist-btn">
            <span>♡</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard