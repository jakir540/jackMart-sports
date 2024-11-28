import { useGetProductsQuery } from "@/redux/api/api";
import AllProductsCard from "./AllProductsCard";
import { TProduct } from "@/type/product";
import { motion } from "framer-motion";
import ErrorPage from "@/error-page";

export default function AllProducts() {
  const { data, isError, isLoading } = useGetProductsQuery(undefined);
  console.log(data?.data);

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
    <div className="my-10 max-w-screen-lg mx-auto p-4">
      <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 text-center font-extrabold tracking-wide mb-6 backdrop-blur-sm bg-opacity-10 rounded-lg p-2">
        Latest Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-xl p-4 bg-opacity-80 bg-white/30 shadow-xl backdrop-blur-lg">
        {data?.data.slice(0, 6).map((product: TProduct) => (
          <motion.div
            key={product._id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <AllProductsCard data={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
