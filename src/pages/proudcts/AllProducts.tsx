import { useGetProductsQuery } from "@/redux/api/api";
import { useLocation } from "react-router-dom";
import AllProductsCard from "../allProducts/AllProductsCard";

export default function AllProducts() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const category = query.get("category");

  const { data, isError, isLoading } = useGetProductsQuery(undefined);

  if (isError) {
    return <p>Error loading products</p>;
  }
  if (isLoading) {
    return <p>Products loading...</p>;
  }
  // TODO ............
  const filteredProducts = category
    ? data?.data.filter((product) => product.category === category)
    : data?.data;

  return (
    <div className="my-10">
      <h1 className="text-4xl text-[#1E90FF] text-center font-semibold">
        {category ? `Products in ${category}` : "All Products"}
      </h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {filteredProducts.map((product) => (
          <AllProductsCard key={product._id} data={product} />
        ))}
      </div>
    </div>
  );
}
