import Banner from "@/components/homeComponets/Banner";
import AllProducts from "../allProducts/AllProducts";
import AllCategories from "./AllCategories/AllCategories";
import Contact from "./contact/Contact";
import TrendingSportsWear from "@/components/homeComponets/TrendingSportsWear";
import ComingSoon from "./ComingSoon/ComingSoon";
import Articles from "./Articles/Articles";
import Testimonial from "./testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AllProducts />
      <AllCategories />
      {/* <Advertisement /> */}
      <ComingSoon />
      <TrendingSportsWear></TrendingSportsWear>
      <Articles />
      <Testimonial />
      <Contact />
    </div>
  );
}

// https://i.ibb.co.com/LhSn7dD/sl1.jpg
// https://i.ibb.co.com/WHSWdwq/sl2.jpg
// https://i.ibb.co.com/ZMNMPf8/sl3.jpg
