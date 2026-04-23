import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart, selectedCategory }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="text-center mb-8 text-white">
        <h2 className="text-3xl font-bold">
          {selectedCategory === "all"
            ? "All Products"
            : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
        </h2>
        <p className="mt-2 text-gray-200">
          {selectedCategory === "all"
            ? "Discover amazing products at great prices"
            : `Explore our ${selectedCategory} collection`}
        </p>
        <div className="inline-block bg-white/20 text-white px-3 py-1 rounded-full mt-4">
          {products.length} {products.length === 1 ? "product" : "products"}{" "}
          found
        </div>
      </div>

      {products.length === 0 && (
        <div className="bg-white rounded-lg p-8 text-center">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold mb-2">No products found</h3>
          <p className="text-gray-600">
            Try adjusting your search or browse all categories
          </p>
        </div>
      )}

      {products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
