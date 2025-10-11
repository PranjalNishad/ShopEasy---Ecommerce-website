import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import productsData from './data/products.json'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(productsData)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shopEasyCart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('shopEasyCart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleLogoClick = () => {
    setShowCart(false)
    setSelectedCategory('all')
    setFilteredProducts(productsData)
  }

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    if (category === 'all') {
      setFilteredProducts(productsData)
    } 
    
    else if (category === "fashion") {
    const filtered = productsData.filter(product =>
      product.category.toLowerCase() === "men's clothing" ||
      product.category.toLowerCase() === "women's clothing"
    )
    setFilteredProducts(filtered)
  } 
    else {
      const filtered = productsData.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      )
      setFilteredProducts(filtered)
    }
  }

  const handleSearch = (query) => {
    if (!query.trim()) {
      setFilteredProducts(productsData)
      return
    }
    
    const filtered = productsData.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

  return (
    <div className="app">
      <Header 
        cartItemCount={getTotalItems()} 
        onCartClick={() => setShowCart(!showCart)}
        onLogoClick={handleLogoClick}
        onCategoryFilter={handleCategoryFilter}
        onSearch={handleSearch}
      />
      
      {!showCart && <Hero onCategoryFilter={handleCategoryFilter} />}

      
      {showCart ? (
        <Cart 
          cart={cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          totalPrice={getTotalPrice()}
          onClose={() => setShowCart(false)}
        />
      ) : (
        <div id="main-container">
          <ProductList 
            products={filteredProducts} 
            onAddToCart={addToCart}
            selectedCategory={selectedCategory}
          />
        </div>
      )}
    </div>
  )
}

export default App
