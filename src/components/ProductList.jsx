import ProductCard from './ProductCard'
import './ProductList.css'

function ProductList({ products, onAddToCart, selectedCategory }) {
  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <div className="header-content">
          <h2>
            {selectedCategory === 'all' ? 'All Products' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
          </h2>
          <p>
            {selectedCategory === 'all' 
              ? 'Discover amazing products at great prices' 
              : `Explore our ${selectedCategory} collection`
            }
          </p>
          <div className="product-count">
            {products.length} {products.length === 1 ? 'product' : 'products'} found
          </div>
        </div>
        
        {products.length === 0 && (
          <div className="no-products">
            <div className="no-products-icon">🔍</div>
            <h3>No products found</h3>
            <p>Try adjusting your search or browse all categories</p>
          </div>
        )}
      </div>
      
      {products.length > 0 && (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList