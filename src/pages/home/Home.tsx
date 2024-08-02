import Banner from "@/components/homeComponets/Banner";
import AllProducts from "../allProducts/AllProducts";
import AllCategories from "./AllCategories/AllCategories";
import Advertisement from "./advertisement/Advertisement";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AllProducts />
      <AllCategories />
      <Advertisement />
    </div>
  );
}
