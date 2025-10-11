import './Cart.css'

function Cart({ cart, onRemove, onUpdateQuantity, totalPrice, onClose }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  const getTotalSavings = () => {
    // Calculate some mock savings
    return cart.reduce((total, item) => total + (item.price * item.quantity * 0.1), 0)
  }

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-header">
          <h2>🛒 Shopping Cart</h2>
          <button className="close-cart" onClick={onClose}>✕</button>
        </div>
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added anything to your cart yet</p>
          <button className="continue-shopping" onClick={onClose}>
            <span className="btn-icon">🏠</span>
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="cart-title-section">
          <h2>🛒 Shopping Cart</h2>
          <span className="cart-item-count">({cart.length} {cart.length === 1 ? 'item' : 'items'})</span>
        </div>
        <button className="close-cart" onClick={onClose}>✕</button>
      </div>
      
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.title} />
            </div>
            
            <div className="cart-item-details">
              <h4>{item.title}</h4>
              <p className="cart-item-category">{item.category}</p>
              <div className="cart-item-rating">
                <span className="stars">
                  {'★'.repeat(Math.floor(item.rating.rate))}
                  {'☆'.repeat(5 - Math.floor(item.rating.rate))}
                </span>
                <span className="rating-text">({item.rating.count})</span>
              </div>
              <p className="cart-item-price">{formatPrice(item.price)} each</p>
            </div>
            
            <div className="cart-item-controls">
              <button 
                className="quantity-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              >
                −
              </button>
              <span className="quantity">{item.quantity}</span>
              <button 
                className="quantity-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            
            <div className="cart-item-total">
              <span className="total-label">Total:</span>
              <span className="total-price">{formatPrice(item.price * item.quantity)}</span>
            </div>
            
            <button 
              className="remove-btn"
              onClick={() => onRemove(item.id)}
            >
              <span className="remove-icon">🗑️</span>
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
        <div className="summary-row">
          <span>Savings:</span>
          <span className="savings">-{formatPrice(getTotalSavings())}</span>
        </div>
        <div className="summary-row">
          <span>Shipping:</span>
          <span className="free-shipping">FREE</span>
        </div>
        <div className="summary-divider"></div>
        <div className="summary-row total-row">
          <span>Total:</span>
          <span className="final-total">{formatPrice(totalPrice - getTotalSavings())}</span>
        </div>
      </div>
      
      <div className="cart-footer">
        <div className="cart-actions">
          <button className="continue-shopping" onClick={onClose}>
            <span className="btn-icon">🏠</span>
            Continue Shopping
          </button>
          <button className="checkout-btn">
            <span className="btn-icon">💳</span>
            Proceed to Checkout
          </button>
        </div>
        <div className="security-badges">
          <span className="security-badge">🔒 Secure Checkout</span>
          <span className="security-badge">🚚 Free Shipping</span>
          <span className="security-badge">↩️ Easy Returns</span>
        </div>
      </div>
    </div>
  )
}

export default Cart