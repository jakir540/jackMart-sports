import { useState, useEffect } from "react";
import { useGetProductsQuery } from "@/redux/api/api";
import { useLocation, useNavigate } from "react-router-dom";
import AllProductsCard from "../allProducts/AllProductsCard";
import { TProduct } from "@/type/product";
import { motion } from "framer-motion";

export default function AllProducts() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(search);
  const category = query.get("category");
  const searchQuery = query.get("search") || "";
  const sortOption = query.get("sort") || "";

  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);

  const { data, isError, isLoading } = useGetProductsQuery(category || "");

  useEffect(() => {
    if (data?.data) {
      // Create a copy
      let products = [...data.data];

      //search filter
      if (searchQuery) {
        products = products.filter((product: TProduct) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // sorting
      if (sortOption === "priceAsc") {
        products.sort((a: TProduct, b: TProduct) => a.price - b.price);
      } else if (sortOption === "priceDesc") {
        products.sort((a: TProduct, b: TProduct) => b.price - a.price);
      }

      setFilteredProducts(products);
    }
  }, [data, searchQuery, sortOption]);

  if (isError) {
    return <p>Error loading products</p>;
  }
  if (isLoading) {
    return <p>Products loading...</p>;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    query.set("search", e.target.value);
    navigate({ search: query.toString() });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    query.set("sort", e.target.value);
    navigate({ search: query.toString() });
  };

  const clearFilters = () => {
    query.delete("search");
    query.delete("sort");
    navigate({ search: query.toString() });
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" },
  };

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
      <div className="filters lg:flex items-center justify-center lg:gap-4 md:gap-3 gap-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border p-2 rounded my-3"
        />
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="border p-2 rounded my-3"
        >
          <option value="">Sort by</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>

        <button
          onClick={clearFilters}
          className="border p-2 my-3 rounded bg-red-500 text-white"
        >
          Clear Filters
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: TProduct) => (
            <motion.div
              key={product._id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <AllProductsCard data={product} />
            </motion.div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}
