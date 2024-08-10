import { useGetProductsQuery } from "@/redux/api/api";
import { useLocation } from "react-router-dom";
import AllProductsCard from "../allProducts/AllProductsCard";
import { TProduct } from "@/type/product";

export default function AllProducts() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const category = query.get("category");
  console.log({ category });

  const { data, isError, isLoading } = useGetProductsQuery(category || "");

  if (isError) {
    return <p>Error loading products</p>;
  }
  if (isLoading) {
    return <p>Products loading...</p>;
  }

  const filteredProducts = data?.data || [];

  return (
    <div className="my-10">
      <h1 className="text-4xl text-[#1E90FF] text-center font-semibold">
        {category &&
        filteredProducts.some(
          (product: TProduct) => product.category === category
        )
          ? `Products in ${category}`
          : "All Products"}
      </h1>

      {/* Search and filter section */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search..."
          // value={searchQuery}
          onChange={(e) => {
            query.set("search", e.target.value);
            // navigate({ search: query.toString() });
          }}
        />
        <select
          // value={sortOption}
          onChange={(e) => {
            query.set("sort", e.target.value);
            // navigate({ search: query.toString() });
          }}
        >
          <option value="">Sort by</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
        <button
        // onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {filteredProducts.map((product: TProduct) => (
          <AllProductsCard key={product._id} data={product} />
        ))}
      </div>
    </div>
  );
}
