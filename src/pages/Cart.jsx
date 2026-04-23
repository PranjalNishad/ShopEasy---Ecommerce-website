function Cart({ cart, onRemove, onUpdateQuantity, totalPrice, onClose }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const getTotalSavings = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity * 0.1,
      0,
    );
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">🛒 Shopping Cart</h2>
          <button className="text-gray-600" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="bg-white rounded-lg p-8 text-center">
          <div className="text-5xl mb-4">🛒</div>
          <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added anything to your cart yet
          </p>
          <button
            className="bg-primary text-white px-6 py-3 rounded-lg"
            onClick={onClose}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6 mt-8 text-gray-800">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">🛒 Shopping Cart</h2>
          <span className="text-sm text-gray-600">
            ({cart.length} {cart.length === 1 ? "item" : "items"})
          </span>
        </div>
        <button className="text-gray-600" onClick={onClose}>
          ✕
        </button>
      </div>

      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-4">
            <div className="w-20 h-20 rounded-md overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.category}</p>
              <div className="text-sm text-yellow-400">
                {"★".repeat(Math.floor(item.rating.rate))}
                {"☆".repeat(5 - Math.floor(item.rating.rate))}{" "}
                <span className="text-gray-500">({item.rating.count})</span>
              </div>
              <p className="text-primary font-semibold">
                {formatPrice(item.price)} each
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span className="w-6 text-center">{item.quantity}</span>
              <button
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>

            <div className="text-right">
              <div className="text-sm text-gray-500">Total:</div>
              <div className="font-semibold">
                {formatPrice(item.price * item.quantity)}
              </div>
            </div>

            <button
              className="ml-4 bg-red-500 text-white px-3 py-2 rounded-md"
              onClick={() => onRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gray-50 p-4 rounded-md">
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Savings:</span>
          <span className="text-green-600">
            -{formatPrice(getTotalSavings())}
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping:</span>
          <span>FREE</span>
        </div>
        <div className="border-t my-3"></div>
        <div className="flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span className="text-primary">
            {formatPrice(totalPrice - getTotalSavings())}
          </span>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-gray-200 px-4 py-2 rounded" onClick={onClose}>
          Continue Shopping
        </button>
        <button className="bg-primary text-white px-4 py-2 rounded">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
