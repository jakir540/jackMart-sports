import { Carousel } from "antd";
import { motion } from "framer-motion";
import sliderImage2 from "@/assets/ball.jpeg";
import sliderImage1 from "@/assets/banner1.jpg";

const textBoxVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const rotateScaleVariants = {
  hidden: { scale: 1, rotate: 0, borderRadius: "20%" },
  visible: {
    scale: [1, 1.2, 1.2, 1, 1],
    rotate: [0, 0, 360, 360, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    transition: { duration: 2 },
  },
};

export default function Banner() {
  return (
    <div className="relative w-full h-screen bg-gray-100">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl shadow-2xl rounded-lg overflow-hidden">
        <Carousel autoplay dotPosition="bottom" className="rounded-lg">
          {/* Slide 1 */}
          <div className="relative">
            <img
              src={sliderImage1}
              alt="Shop About"
              className="w-full h-[500px] md:h-[600px] object-cover rounded-lg"
            />
            {/* Top Text */}
            <motion.div
              className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-lg lg:text-xl bg-gradient-to-r from-black to-transparent px-4 py-2 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            >
              Discover the Latest Sports Gear
            </motion.div>
            {/* Center Text */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-5 md:p-8 rounded-lg shadow-xl max-w-xs md:max-w-lg text-center"
              initial="hidden"
              animate="visible"
              variants={rotateScaleVariants}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-extrabold mb-4 text-yellow-400"
                variants={textBoxVariants}
              >
                <span className="text-6xl md:text-8xl text-yellow-300">
                  50%
                </span>{" "}
                OFF
              </motion.h2>
              <motion.p
                className="text-lg md:text-2xl font-semibold"
                variants={textBoxVariants}
              >
                On New Cricket Bats
              </motion.p>
            </motion.div>
          </div>

          {/* Slide 2 */}
          <div className="relative">
            <img
              src={sliderImage2}
              alt="Ball"
              className="w-full h-[500px] md:h-[600px] object-cover rounded-lg"
            />
            {/* Top Text */}
            <motion.div
              className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-lg lg:text-xl bg-gradient-to-r from-black to-transparent px-4 py-2 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            >
              Premium Quality Sports Balls
            </motion.div>
            {/* Center Text */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-5 md:p-8 rounded-lg shadow-xl max-w-xs md:max-w-lg text-center"
              initial="hidden"
              animate="visible"
              variants={rotateScaleVariants}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-extrabold mb-4 text-green-400"
                variants={textBoxVariants}
              >
                <span className="text-6xl md:text-8xl text-green-300">30%</span>{" "}
                Discount
              </motion.h2>
              <motion.p
                className="text-lg md:text-2xl font-semibold"
                variants={textBoxVariants}
              >
                Top Quality Footballs
              </motion.p>
            </motion.div>
          </div>

          {/* Slide 3 */}
          <div className="relative">
            <img
              src="https://i.ibb.co/XFFdY6W/sports-5.jpg"
              alt="Sports"
              className="w-full h-[500px] md:h-[600px] object-cover rounded-lg"
            />
            {/* Top Text */}
            <motion.div
              className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-lg lg:text-xl bg-gradient-to-r from-black to-transparent px-4 py-2 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            >
              Join the Sports Community
            </motion.div>
            {/* Center Text */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-5 md:p-8 rounded-lg shadow-xl max-w-xs md:max-w-lg text-center"
              initial="hidden"
              animate="visible"
              variants={rotateScaleVariants}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-400"
                variants={textBoxVariants}
              >
                <span className="text-6xl md:text-8xl text-blue-300">50%</span>{" "}
                OFF
              </motion.h2>
              <motion.p
                className="text-lg md:text-2xl font-semibold"
                variants={textBoxVariants}
              >
                On New Badminton Bats
              </motion.p>
            </motion.div>
          </div>

          {/* Slide 4 */}
          <div className="relative">
            <img
              src="https://i.ibb.co/zFCG6JW/banner-Bat.jpg"
              alt="Banner Bat"
              className="w-full h-[500px] md:h-[600px] object-cover rounded-lg"
            />
            {/* Top Text */}
            <motion.div
              className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-lg lg:text-xl bg-gradient-to-r from-black to-transparent px-4 py-2 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            >
              High-Performance Cricket Gear
            </motion.div>
            {/* Center Text */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-5 md:p-8 rounded-lg shadow-xl max-w-xs md:max-w-lg text-center"
              initial="hidden"
              animate="visible"
              variants={rotateScaleVariants}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-extrabold mb-4 text-red-400"
                variants={textBoxVariants}
              >
                <span className="text-6xl md:text-8xl text-red-300">80%</span>{" "}
                OFF
              </motion.h2>
              <motion.p
                className="text-lg md:text-2xl font-semibold"
                variants={textBoxVariants}
              >
                On New Cricket Products
              </motion.p>
            </motion.div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
