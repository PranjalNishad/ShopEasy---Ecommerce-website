import { useState } from 'react'
import './Header.css'

function Header({ cartItemCount, onCartClick, onLogoClick, onCategoryFilter, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [showCategories, setShowCategories] = useState(false)

  const categories = [
    "men's clothing",
    "women's clothing", 
    "electronics",
    "jewelery"
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const handleCategoryClick = (category) => {
    onCategoryFilter(category)
    setShowCategories(false)
  }

  return (
    <header className="header sticky top-0 z-1000 border-b-4 border-b-[rgba(102,126,234,0.3)] border-t-2 border-t-[rgba(102,126,234,0.2)] backdrop-blur-[15px] shadow-[0_8px_40px_rgba(0,0,0,0.3)] bg-[linear-gradient(135deg,#1a202c,#2d3748,#4a5568)]">
      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={onLogoClick}>
          <div className="logo-icon">🛍️</div>
          <div className="logo-text">
            <h1>ShopEasy</h1>
            <span className="logo-tagline">Your Shopping Partner</span>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="search-section">
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                🔍
              </button>
            </div>
          </form>
        </div>
        
        {/* Navigation */}
        <nav className="nav">
          <div className="nav-item">
            <button className="nav-link" onClick={onLogoClick}>
              <span className="nav-icon">🏠</span>
              <span>Home</span>
            </button>
          </div>
          
          <div className="nav-item dropdown">
            <button 
              className="nav-link" 
              onClick={() => setShowCategories(!showCategories)}
            >
              <span className="nav-icon">📱</span>
              <span>Categories</span>
              <span className="dropdown-arrow">▼</span>
            </button>
            {showCategories && (
              <div className="dropdown-menu">
                {categories.map(category => (
                  <button
                    key={category}
                    className="dropdown-item"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="nav-item">
            <button className="nav-link">
              <span className="nav-icon">🎯</span>
              <span>Offers</span>
            </button>
          </div>
          
          <div className="nav-item">
            <button className="nav-link">
              <span className="nav-icon">📞</span>
              <span>Support</span>
            </button>
          </div>
        </nav>
        
        {/* Cart Section */}
        <div className="cart-section">
          <button className="cart-button" onClick={onCartClick}>
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header