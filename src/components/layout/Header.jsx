import { useState } from "react";

function Header({
  cartItemCount,
  onCartClick,
  onLogoClick,
  onCategoryFilter,
  onSearch,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCategories, setShowCategories] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleCategoryClick = (category) => {
    onCategoryFilter(category);
    setShowCategories(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md shadow-soft bg-linear-to-r from-white  to-white">
      <div className="max-w-full m-auto px-6 py-3 flex flex-wrap items-center justify-around ">
        <button
          type="button"
          onClick={onLogoClick}
          aria-label="Go to home"
          className="flex items-center gap-3"
        >
          <div className="w-14 h-14 rounded-full mt-5 mb-5 flex items-center justify-center text-3xl bg-linear-to-tr from-black to-black text-black font-bold">
            🛍️
          </div>
          <div>
            <h1 className="text-3xl font-bold text-black">ShopEasy</h1>
            <span className="text-sm text-black">Your Shopping Partner</span>
          </div>
        </button>

        <form className="flex-1 max-w-xl mx-4" onSubmit={handleSearch}>
          <div className="flex w-full items-center bg-gray-100 rounded-full shadow p-1">
            <input
              id="header-search"
              aria-label="Search products"
              type="text"
              placeholder="Search for products, brands and more"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-l-full outline-none text-gray-800"
            />
            <button
              type="submit"
              className="rounded-r-full  px-4 py-2 hover:bg-gray-800 transition-colors"
            >
              🔍
            </button>
          </div>
        </form>

        <nav className="hidden md:flex items-center gap-2">
          <button
            className="bg-white/10 text-black px-3 py-2 rounded-full font-semibold hover:bg-white/20"
            onClick={onLogoClick}
          >
            <span className="mr-2">🏠</span>
            Home
          </button>

          <div className="relative">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="bg-white/10 text-black px-3 py-2 rounded-full font-semibold hover:bg-white/20 flex items-center gap-2"
            >
              <span>📱</span>
              <span>Categories</span>
              <span>▼</span>
            </button>
            {showCategories && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-md min-w-45">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-primary hover:text-white"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="bg-white/10 text-black px-3 py-2 rounded-full font-semibold hover:bg-white/20">
            <span className="mr-2">🎯</span>
            Offers
          </button>

          <button className="bg-white/10 text-black px-3 py-2 rounded-full font-semibold hover:bg-white/20">
            <span className="mr-2">📞</span>
            Support
          </button>
        </nav>

        <div className="flex items-center">
          <button
            className="relative bg-white/10 text-black px-4 py-2 rounded-full flex items-center gap-2"
            onClick={onCartClick}
          >
            <span>🛒</span>
            <span>Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
