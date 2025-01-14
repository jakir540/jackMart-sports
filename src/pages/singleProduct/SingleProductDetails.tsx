import { useGetSingleProductsQuery } from "@/redux/api/api";
import { useParams } from "react-router-dom";
import { Card, Button, Row, Col, Typography, Rate, Divider, Tag } from "antd";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { addProductIntoCart } from "@/redux/features/cartSlice/cartSlice";
import ProductReviews from "../home/ProductReviews/ProductReviews";
const { Title, Text, Paragraph } = Typography;

type TId = {
  id: string;
};

export default function SingleProductDetails() {
  const cart = useAppSelector((state) => state.cart.products || []);

  console.log(cart);
  const { id } = useParams<TId>();

  const { data: prouduct, isError, isLoading } = useGetSingleProductsQuery(id);
  const dispatch = useAppDispatch();

  if (isError) {
    return <p>Error .loading product </p>;
  }
  if (isLoading) {
    return <p>products loading ............</p>;
  }
  if (!prouduct || !prouduct.data) {
    return <p>no product data found</p>;
  }
  const { data } = prouduct;

  //get the product into cart

  const cartProduct = cart.find((cartItem) => cartItem.id === data._id);

  const cartQuantity = cartProduct ? cartProduct.quantity : 0;

  const isOutOfStock = cartQuantity >= data?.stockQuantity;

  const handleAddToCart = (id: string) => {
    if (isOutOfStock) return;
    dispatch(
      addProductIntoCart({
        id: id,
        name: data.name,
        price: data?.price,
        quantity: 1,
        description: data?.description,
        stockQuantity: data?.stockQuantity,
        image: data?.image,
      })
    );
  };
  return (
    <>
      <Row
        justify="center"
        className="my-12"
        style={{
          background: "linear-gradient(135deg, #eef2f3, #8e9eab)",
          padding: "40px",
          borderRadius: "25px",
        }}
      >
        <Col span={24} md={20} lg={18}>
          <Card
            className="shadow-xl hover:shadow-2xl transition-all"
            style={{
              borderRadius: "20px",
              padding: "25px",
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(15px)",
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Row gutter={[24, 24]} align="middle">
              {/* Left Section: Product Image */}
              <Col span={24} md={12}>
                <PhotoProvider>
                  <PhotoView src={data?.image}>
                    <div
                      style={{
                        overflow: "hidden",
                        borderRadius: "20px",
                        position: "relative",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.03)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      <img
                        alt={data?.name}
                        src={data?.image}
                        style={{
                          width: "100%",
                          cursor: "pointer",
                          borderRadius: "20px",
                        }}
                      />
                    </div>
                  </PhotoView>
                </PhotoProvider>
              </Col>

              {/* Right Section: Product Details */}
              <Col span={24} md={12}>
                <div>
                  <Title level={2} className="text-gray-800 mb-2">
                    {data?.name}
                  </Title>
                  <Text
                    style={{
                      display: "block",
                      fontSize: "14px",
                      color: "#999",
                      marginBottom: "8px",
                    }}
                  >
                    {data?.category}
                  </Text>
                  <Rate
                    disabled
                    defaultValue={data?.rating}
                    style={{
                      fontSize: "18px",
                      color: "#FFD700",
                      marginBottom: "20px",
                    }}
                  />

                  <Divider />

                  <Text strong style={{ fontSize: "16px", display: "block" }}>
                    Brand:
                  </Text>
                  <Text style={{ fontSize: "15px", marginBottom: "10px" }}>
                    {data?.brand}
                  </Text>

                  <Text strong style={{ fontSize: "16px", display: "block" }}>
                    Stock Status:
                  </Text>
                  <Tag
                    color={data?.stockQuantity > 0 ? "green" : "red"}
                    style={{
                      fontSize: "15px",
                      padding: "5px 15px",
                      borderRadius: "10px",
                      marginBottom: "15px",
                    }}
                  >
                    {data?.stockQuantity > 0
                      ? `${data.stockQuantity} Available`
                      : "Out of Stock"}
                  </Tag>

                  <Divider />

                  <Text strong style={{ fontSize: "16px", display: "block" }}>
                    Price:
                  </Text>
                  <Text
                    style={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      color: "#222",
                      marginBottom: "20px",
                    }}
                  >
                    ${data?.price?.toFixed(2)}
                  </Text>

                  <Button
                    type="primary"
                    size="large"
                    icon={<ShoppingCartOutlined />}
                    style={{
                      width: "100%",
                      height: "50px",
                      fontSize: "16px",
                      borderRadius: "12px",
                      background: isOutOfStock
                        ? "#bbb"
                        : "linear-gradient(135deg, #6a11cb, #2575fc)",
                      border: "none",
                      color: "#fff",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = isOutOfStock
                        ? "#bbb"
                        : "linear-gradient(135deg, #2575fc, #6a11cb)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = isOutOfStock
                        ? "#bbb"
                        : "linear-gradient(135deg, #6a11cb, #2575fc)")
                    }
                    onClick={() => handleAddToCart(data._id)}
                    disabled={isOutOfStock}
                  >
                    {isOutOfStock ? "Out of Stock" : "Add to Cart"}
                  </Button>
                </div>
              </Col>
            </Row>

            {/* Product Description */}
            <Row className="mt-10">
              <Col span={24}>
                <Divider />
                <Title level={3} className="text-gray-800 mb-3">
                  Description
                </Title>
                <Paragraph style={{ color: "#555", lineHeight: "1.8" }}>
                  {data?.description}
                </Paragraph>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <ProductReviews />
    </>
  );
}
