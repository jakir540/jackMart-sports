import { useGetProductsQuery } from "@/redux/api/api";
import AllProductsCard from "./AllProductsCard";
import { TProduct } from "@/type/product";
import { motion } from "framer-motion";
import ErrorPage from "@/error-page";

export default function AllProducts() {
  const { data, isError, isLoading } = useGetProductsQuery(undefined);
  console.log(data?.data);

  if (isError) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
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
    hover: { scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)" },
  };

  return (
    <div className="my-10">
      <h1 className="text-4xl text-[#1E90FF] capitalize text-center font-semibold">
        latest products
      </h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center p-3 rounded ">
        {data?.data.slice(0, 4).map((product: TProduct) => (
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
