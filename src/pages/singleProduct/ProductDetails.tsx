import { useGetSingleProductsQuery } from "@/redux/api/api";
import { useParams } from "react-router-dom";
import { Card, Button, Row, Col, Typography, Rate, Divider } from "antd";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Title, Text, Paragraph } = Typography;

type TId = {
  id: string;
};

export default function ProductDetails() {
  const { id } = useParams<TId>();
  console.log(typeof id);

  const { data: prouduct, isError, isLoading } = useGetSingleProductsQuery(id);

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

  const handleAddToCart = (id: string) => {
    console.log(id);
  };
  return (
    <Row justify="center" className="my-10">
      <Col span={24} md={16}>
        <Card className="p-6 shadow-lg">
          <Row gutter={[32, 32]}>
            <Col span={24} md={12}>
              <PhotoProvider>
                <PhotoView src={data?.image}>
                  <img
                    alt={data?.name}
                    src={data?.image}
                    style={{
                      width: "100%",
                      cursor: "pointer",
                      borderRadius: "10px",
                    }}
                  />
                </PhotoView>
              </PhotoProvider>
            </Col>

            <Col
              span={24}
              md={12}
              className="flex flex-col justify-center items-center"
            >
              <Title level={2}>Name: {data?.name}</Title>
              <Text strong>Category: </Text>
              <Text>{data.category}</Text>
              <Divider />
              <Text strong>Brand: </Text>
              <Text>{data.brand}</Text>
              <Divider />
              <Text strong>Stock Quantity: </Text>
              <Text>{data.stockQuantity}</Text>
              <Divider />
              <Text strong>Rating: </Text>
              <Rate disabled defaultValue={data?.rating} />
              <Divider />
              <Text strong>Price: </Text>
              <Text className="text-lg font-semibold">
                ${data?.price?.toFixed(2)}
              </Text>
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                className="mt-4"
                size="large"
                onClick={() => handleAddToCart(data._id)}
              >
                Add to Cart
              </Button>
            </Col>
          </Row>

          <Row className="mt-8">
            <Col span={24}>
              <Title level={3}>Description</Title>
              <Paragraph>{data?.description}</Paragraph>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
