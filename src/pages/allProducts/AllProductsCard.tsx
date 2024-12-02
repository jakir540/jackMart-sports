import { TAllProductProps } from "@/type/product";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button, Card, Tooltip } from "antd";
import { NavLink } from "react-router-dom";
// import StarRatings from "react-star-ratings";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function AllProductsCard({ data }: TAllProductProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
  };

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative"
    >
      <Card
        className="relative p-3 bg-gradient-to-br from-gray-50 to-gray-200 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-indigo-300/50"
        hoverable
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        cover={
          <div className="relative">
            <motion.img
              alt={data.name}
              src={data?.image}
              className="h-64 w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
            />
            <Tooltip
              title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`absolute top-4 right-4 p-3 rounded-full shadow-lg cursor-pointer transition-all ${
                  isWishlisted
                    ? "bg-pink-200 shadow-pink-500/40"
                    : "bg-white/80 hover:bg-pink-100"
                }`}
                onClick={toggleWishlist}
              >
                <FaHeart
                  className={`text-xl ${
                    isWishlisted ? "text-pink-500" : "text-gray-400"
                  }`}
                />
              </motion.div>
            </Tooltip>
          </div>
        }
      >
        <div className="flex flex-col h-full">
          <h2 className="text-xl font-bold text-gray-800 truncate mb-2">
            {data.name}
          </h2>

          <p className="text-sm text-gray-500 mb-1">
            <span className="font-medium text-indigo-600">Brand:</span>{" "}
            {data.brand}
          </p>

          {/* <div className="flex items-center my-2">
            <StarRatings
              rating={data.rating}
              starRatedColor="#FACC15"
              numberOfStars={5}
              name="rating"
              starDimension="18px"
              starSpacing="3px"
            />
            <span className="text-sm text-gray-600 ml-2">{`(${data.rating}/5)`}</span>
          </div> */}

          <p className="text-xl font-semibold text-indigo-600 my-2">
            ${data.price.toFixed(2)}
          </p>

          <NavLink to={`/product/${data._id}`} className="mt-auto">
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
