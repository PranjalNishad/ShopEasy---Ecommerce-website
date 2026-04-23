import { useState } from "react";

function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const getDiscountPrice = (price) => {
    const discount = Math.floor(Math.random() * 30) + 10; // Random discount between 10-40%
    return formatPrice(price * (1 - discount / 100));
  };

  const getOriginalPrice = (price) => {
    const discount = Math.floor(Math.random() * 30) + 10;
    return formatPrice(price * (1 + discount / 100));
  };

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300"
        />

        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <span className="bg-primary text-white px-2 py-1 rounded-full text-xs capitalize">
            {product.category}
          </span>
          <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            -{Math.floor(Math.random() * 30) + 10}%
          </span>
        </div>

        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg">
              Quick View
            </button>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col">
        <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-3">
          {product.description.length > 80
            ? `${product.description.substring(0, 80)}...`
            : product.description}
        </p>

        <div className="flex items-center gap-3 mb-3">
          <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`${i < Math.floor(product.rating.rate) ? "text-yellow-400" : "text-gray-200"}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>

        <div className="mb-3">
          <div className="flex items-baseline gap-3">
            <span className="text-primary font-bold text-xl">
              {formatPrice(product.price)}
            </span>
            <span className="text-gray-400 line-through text-sm">
              {getOriginalPrice(product.price)}
            </span>
          </div>
          <div className="text-sm text-green-500 font-semibold">
            You save {getDiscountPrice(product.price)}
          </div>
        </div>

        <div className="mt-auto flex gap-3 items-center">
          <button
            className="flex-1 bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition"
            onClick={handleAddToCart}
          >
            <span className="mr-2">🛒</span>
            Add to Cart
          </button>
          <button className="bg-gray-100 p-2 rounded-full">♡</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
