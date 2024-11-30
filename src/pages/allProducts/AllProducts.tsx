import { useGetProductsQuery } from "@/redux/api/api";
import AllProductsCard from "./AllProductsCard";
import { TProduct } from "@/type/product";
import { motion } from "framer-motion";
import ErrorPage from "@/error-page";

export default function AllProducts() {
  const { data, isError, isLoading } = useGetProductsQuery(undefined);

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="relative w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full animate-spin opacity-70"></div>
      </div>
    );
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
    hover: { scale: 1.05, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <div className="my-10 mx-auto max-w-screen-xl p-4">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <motion.h1
          className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 font-extrabold tracking-wide mb-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Discover Our Latest Products
        </motion.h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore top-notch products crafted to meet your needs. Quality,
          durability, and design in one place.
        </p>
      </header>

      {/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 rounded-lg bg-gradient-to-r from-white via-gray-100 to-white">
        {data?.data.slice(0, 6).map((product: TProduct) => (
          <motion.div
            key={product._id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="relative"
          >
            <AllProductsCard data={product} />
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-8 text-center">
        <motion.button
          className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold text-lg hover:from-blue-500 hover:to-indigo-600 transform hover:scale-105 shadow-lg hover:shadow-indigo-400/50 transition-all duration-300"
          whileHover={{ y: -3 }}
        >
          View All Products
        </motion.button>
      </div>
    </div>
  );
}
