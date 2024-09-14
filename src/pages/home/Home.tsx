import Banner from "@/components/homeComponets/Banner";
import AllProducts from "../allProducts/AllProducts";
import AllCategories from "./AllCategories/AllCategories";
import Advertisement from "./advertisement/Advertisement";
import Contact from "./contact/Contact";
import TrendingSportsWear from "@/components/homeComponets/TrendingSportsWear";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AllProducts />
      <AllCategories />
      <Advertisement />
      <TrendingSportsWear></TrendingSportsWear>
      <Contact />
    </div>
  );
}
