import { TAllProductProps } from "@/type/product";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button, Card, Tooltip } from "antd";
import { NavLink } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function AllProductsCard({ data }: TAllProductProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="relative p-4"
    >
      <Card
        className="relative p-6 bg-gradient-to-r from-white/40 to-white/20 bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-lg transition-transform transform duration-500 hover:scale-105 hover:shadow-2xl"
        hoverable
        style={{
          width: "100%",
          maxWidth: "340px",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        cover={
          <div className="relative">
            <img
              alt={data.name}
              src={data?.image}
              className="h-60 w-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
            />
            {/* Heart icon overlay */}
            <Tooltip title="Add to Wishlist">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute top-4 right-4 bg-white bg-opacity-70 p-2 rounded-full shadow-md cursor-pointer"
              >
                <FaHeart className="text-red-500 text-lg" />
              </motion.div>
            </Tooltip>
          </div>
        }
      >
        <div className="flex flex-col flex-grow">
          <h2 className="text-2xl font-bold mb-1 text-indigo-600 truncate">
            {data.name}
          </h2>

          <p className="text-md text-gray-700">
            Brand: <span className="font-semibold">{data.brand}</span>
          </p>

          <div className="my-2">
            <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
              <StarRatings
                rating={data.rating}
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="3px"
              />
            </motion.div>
          </div>

          <p className="text-2xl font-bold text-indigo-600 my-2">
            ${data.price.toFixed(2)}
          </p>

          <NavLink to={`/product/${data._id}`} className="mt-4">
            <Button
              type="primary"
              block
              className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-600 text-white font-semibold py-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
              style={{
                border: "2px solid transparent",
                backgroundClip: "padding-box",
              }}
            >
              View Details
            </Button>
          </NavLink>
        </div>
      </Card>
    </motion.div>
  );
}
