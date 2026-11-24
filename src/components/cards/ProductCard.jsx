
import { Star, ShoppingCart } from "lucide-react";
import { useState } from "react";

function ProductCard() {
  const [added, setAdded] = useState(false);

  return (
    <section className="inter flex items-center justify-center">
      <div className="w-80 rounded-2xl bg-white p-3 shadow-lg">

        {/* Product Image */}
        <div className="relative">
          <img
            src="./ImageDataCard/product.jpg"
            alt="Wireless headphones"
            className="h-60 w-full rounded-xl object-cover"
          />

          <span className="absolute left-3 top-3 rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
            New
          </span>
        </div>

        {/* Product Details */}
        <div className="mt-4">
          <h1 className="mt-1 text-xl font-bold">
            Wireless Headphones
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Enjoy your favorite music with premium sound
            and comfortable design.
          </p>
        </div>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1">
          <Star size={16} fill="#FACC15" color="#FACC15" />
          <span className="text-sm font-medium">4.8</span>
          <span className="text-sm text-gray-400">
            (120 reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-2">
          <h2 className="text-2xl font-bold">$79.99</h2>
          <span className="text-sm text-gray-400 line-through">
            $99.99
          </span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => setAdded(!added)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-black py-3 text-white transition hover:bg-gray-800"
        >
          <ShoppingCart size={18} />
          {added ? "Added to Cart ✓" : "Add to Cart"}
        </button>

      </div>
    </section>
  );
}

export default ProductCard;
