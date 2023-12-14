import Blog from "../components/home-page/blog/Blog";
import Brands from "../components/home-page/brands/Brands";
import Discount from "../components/home-page/discount/Discount";
import Features from "../components/home-page/features/Features";
import Hero from "../components/home-page/hero/Hero";
import Offer from "../components/home-page/offer/Offer";
import Products from "../components/home-page/products/Products";
import SpecialDiscount from "../components/home-page/special-discount/SpecialDiscount";

function Home() {
  return (
    <main className="overflow-hidden">
      <Offer />
      <Hero />
      <Brands />
      <Products />
      <Discount />
      <SpecialDiscount />
      <Features />
      <Blog />
    </main>
  )
}

export default Home;