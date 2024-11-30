/* eslint-disable @typescript-eslint/no-explicit-any */
import { Carousel, Card, Row, Col, Typography, Button, Tag } from "antd";
import { motion } from "framer-motion";
import sliderImage1 from "@/assets/banner1.jpg";
import sliderImage2 from "@/assets/ball.jpeg";

import { useGetProductsQuery } from "@/redux/api/api";
// import { useGetProductsQuery } from "@/redux/api/api";

const { Text } = Typography;

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

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (index: any) => ({
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

export default function ECommerceBanner() {
  const { data, isError, isLoading } = useGetProductsQuery("");

  if (isLoading) {
    return <p>Loading offerings...</p>;
  }

  if (isError) {
    return <p>Error loading offerings!</p>;
  }

  const offerings = data?.data.slice(0, 2);
  return (
    <div className="p-4 bg-gray-100">
      <Row gutter={[24, 24]} align="middle">
        {/* Carousel Section */}
        <Col span={18} md={18} className="relative">
          <div
            style={{
              borderRadius: "10px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <Carousel autoplay dotPosition="bottom">
              {/* Slide 1 */}
              <div className="relative">
                <img
                  src={sliderImage1}
                  alt="Banner"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-6 md:p-10 rounded-lg shadow-lg text-center"
                  initial="hidden"
                  animate="visible"
                  variants={rotateScaleVariants}
                >
                  <motion.h2
                    className="text-3xl md:text-4xl font-extrabold mb-4 text-yellow-400"
                    variants={textBoxVariants}
                  >
                    <span className="text-5xl md:text-6xl text-yellow-300">
                      50%
                    </span>{" "}
                    OFF
                  </motion.h2>
                  <motion.p
                    className="text-lg md:text-xl font-medium"
                    variants={textBoxVariants}
                  >
                    On Cricket Bats
                  </motion.p>
                  <Button
                    type="primary"
                    className="mt-4 bg-yellow-500 hover:bg-yellow-600 border-none"
                    size="large"
                  >
                    Shop Now
                  </Button>
                </motion.div>
              </div>

              {/* Slide 2 */}
              <div className="relative">
                <img
                  src={sliderImage2}
                  alt="Ball"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-6 md:p-10 rounded-lg shadow-lg text-center"
                  initial="hidden"
                  animate="visible"
                  variants={rotateScaleVariants}
                >
                  <motion.h2
                    className="text-3xl md:text-4xl font-extrabold mb-4 text-green-400"
                    variants={textBoxVariants}
                  >
                    <span className="text-5xl md:text-6xl text-green-300">
                      30%
                    </span>{" "}
                    OFF
                  </motion.h2>
                  <motion.p
                    className="text-lg md:text-xl font-medium"
                    variants={textBoxVariants}
                  >
                    On Premium Balls
                  </motion.p>
                  <Button
                    type="primary"
                    className="mt-4 bg-green-500 hover:bg-green-600 border-none"
                    size="large"
                  >
                    Explore Deals
                  </Button>
                </motion.div>
              </div>
            </Carousel>
          </div>
        </Col>

        {/* Offering Section */}
        <Col span={6} md={6}>
          <div className="flex flex-col gap-4">
            {offerings.map((offer: any, index: any) => (
              <motion.div
                key={offer.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <Card
                  hoverable
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    borderRadius: "16px",
                    padding: "5px",
                    background: "linear-gradient(145deg, #ececec, #ffffff)",
                    boxShadow: "8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <img
                    src={offer.image}
                    alt={offer.title}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "12px",
                      objectFit: "cover",
                      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#333",
                        marginBottom: "5px",
                      }}
                    >
                      {offer.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        marginBottom: "10px",
                        lineHeight: "1.5",
                        display: "block",
                      }}
                    >
                      {offer.description}
                    </Text>
                    <div
                      className="flex items-center gap-2"
                      style={{ marginBottom: "10px" }}
                    >
                      <Text
                        style={{
                          fontSize: "25px",
                          textDecoration: "line-through",
                          color: "#999",
                        }}
                      >
                        $ 80
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "#FF5722",
                        }}
                      >
                        $ 50
                      </Text>
                    </div>
                    <Tag
                      color="green"
                      style={{
                        marginBottom: "5px",
                        fontSize: "20px",
                        padding: "2px",
                      }}
                    >
                      $ 30
                    </Tag>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}
