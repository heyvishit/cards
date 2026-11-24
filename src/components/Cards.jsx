import ProfileCard from "./cards/ProfileCard";
import ProductCard from "./cards/ProductCard";
import PricingCard from "./cards/PricingCard";
import MusicCard from "./cards/MusicCard";


function Cards() {
  return (
    <section className="min-h-screen inter p-6">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

        {/* Profile Card */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Profile Card</h2>
          <ProfileCard />
        </div>

        {/* Product Card */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Product Card</h2>
          <ProductCard />
        </div>

        {/* Pricing Card */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Pricing Card</h2>
          <PricingCard />
        </div>

        {/*>Music Card */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Music Card</h2>
          <MusicCard />
        </div>

      </div>
    </section>
  );
}

export default Cards;