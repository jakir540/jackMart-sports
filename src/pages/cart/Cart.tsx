import React from "react";
import { Card, List, Typography, Button, Row, Col, Divider } from "antd";

const { Title, Text } = Typography;

const cartItems = [
  {
    id: 1,
    name: "Item 1",
    description: "Description of Item 1",
    price: 30,
    quantity: 1,
  },
  {
    id: 2,
    name: "Item 2",
    description: "Description of Item 2",
    price: 50,
    quantity: 2,
  },
  // Add more items as needed
];

const Cart = () => {
  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Row justify="center" style={{ padding: "50px" }}>
      <Col span={12}>
        <Card
          title={<Title level={2}>Your Shopping Cart</Title>}
          bordered={false}
        >
          <List
            itemLayout="vertical"
            dataSource={cartItems}
            renderItem={(item) => (
              <List.Item>
                <Row>
                  <Col span={16}>
                    <Title level={4}>{item.name}</Title>
                    <Text>{item.description}</Text>
                  </Col>
                  <Col span={8} style={{ textAlign: "right" }}>
                    <Text strong>
                      ${item.price} x {item.quantity}
                    </Text>
                  </Col>
                </Row>
                <Divider />
              </List.Item>
            )}
          />
          <Row justify="space-between" style={{ marginTop: "20px" }}>
            <Col>
              <Title level={4}>Total: ${getTotal()}</Title>
            </Col>
            <Col>
              <Button type="primary" size="large">
                Proceed to Checkout
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Cart;
