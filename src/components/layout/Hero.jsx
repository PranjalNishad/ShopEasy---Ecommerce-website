function Hero({ onCategoryFilter }) {
  const handleCardClick = (category) => {
    onCategoryFilter(category);
  };

  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden px-4 py-8 md:min-h-[60vh] lg:min-h-[65vh]">

      {/* Background */}
      <div className="absolute inset-0 bg-hero z-0" />
      <div className="absolute inset-0 bg-overlay z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* Left */}
        <div className="text-black text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 drop-shadow-lg">
            Find Cloths That Matches Your Style{" "}
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              ShopEasy
            </span>
          </h1>

          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-[500px] mx-auto lg:mx-0">
            Discover amazing products at unbeatable prices. Shop with confidence and style.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start mb-10">
            {[
              ["🚚", "Free Shipping"],
              ["🔒", "Secure Payment"],
              ["↩️", "Easy Returns"],
            ].map(([icon, text]) => (
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition hover:-translate-y-1 hover:shadow-lg">
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a className="flex items-center text-black gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2]  font-semibold shadow-lg hover:-translate-y-1 hover:shadow-xl transition">
              🛍️ Shop Now
            </a>

            <button className="flex items-center text-black gap-2 px-6 py-3 rounded-full bg-white/10 border-2 border-white/30 backdrop-blur-md hover:bg-white/20 hover:-translate-y-1 transition shadow-lg">
              📱 View Categories
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center">

          {/* Card 1 */}
          <div
            onClick={() => handleCardClick("electronics")}
            className="absolute top-[20%] left-[10%] animate-float cursor-pointer bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-2xl">
                💻
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Electronics</h4>
                <p className="text-sm text-gray-500">Latest gadgets</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => handleCardClick("fashion")}
            className="absolute top-[50%] right-[15%] animate-float [animation-delay:2s] cursor-pointer bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-2xl">
                👔
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Fashion</h4>
                <p className="text-sm text-gray-500">Trendy styles</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => handleCardClick("jewelery")}
            className="absolute bottom-[20%] left-[20%] animate-float [animation-delay:4s] cursor-pointer bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-2xl">
                💍
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Jewelry</h4>
                <p className="text-sm text-gray-500">Elegant designs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-80 animate-bounce text-center">
        <span className="text-sm">Scroll to explore</span>
        <div className="text-xl">↓</div>
      </div>
    </section>
  );
}

export default Hero;