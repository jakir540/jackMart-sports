import { useAppSelector, useAppDispatch } from "@/redux/hooks/hooks";
import {
  Card,
  List,
  Typography,
  Button,
  Row,
  Col,
  Divider,
  Space,
  InputNumber,
  Popconfirm,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import {
  increaseStockQuantity,
  decreaseStockQuantity,
  removeProductFromCart,
} from "@/redux/features/cartSlice/cartSlice";
import { NavLink } from "react-router-dom";

const { Title, Text } = Typography;

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.products || []);
  const dispatch = useAppDispatch();

  // Create total function
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Increase the quantity number
  const handleQuantityIncrease = (id: string) => {
    const existingProduct = cart.find((item) => item.id === id);
    if (
      existingProduct &&
      existingProduct.quantity < existingProduct.stockQuantity
    ) {
      dispatch(increaseStockQuantity({ id, quantity: 1 }));
    }
  };

  // Decrease the quantity number
  const handleQuantityDecrease = (id: string) => {
    const existingProduct = cart.find((item) => item.id === id);
    if (existingProduct && existingProduct.quantity > 1) {
      dispatch(decreaseStockQuantity({ id, quantity: 1 }));
    }
  };
  // remove item from the cart
  const handleRemove = (id: string) => {
    dispatch(removeProductFromCart({ id }));
  };

  return (
    <Row justify="center" style={{ padding: "50px" }}>
      <Col span={24} md={16}>
        <Card
          title={<Title level={2}>Your Shopping Cart</Title>}
          bordered={false}
          className="shadow-lg"
        >
          <List
            itemLayout="vertical"
            dataSource={cart}
            renderItem={(item) => (
              <List.Item>
                <Row gutter={16} align="middle">
                  <Col span={12}>
                    <Title level={4}>{item.name}</Title>
                    <Text type="secondary">{item?.description}</Text>
                    <br />
                    <Text strong>Stock: {item.stockQuantity}</Text>
                  </Col>
                  <Col span={6}>
                    <Space>
                      <Button
                        onClick={() => handleQuantityDecrease(item.id)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <InputNumber
                        min={1}
                        max={item.stockQuantity}
                        value={item.quantity}
                        readOnly
                      />
                      <Button
                        onClick={() => handleQuantityIncrease(item.id)}
                        disabled={item.quantity >= item.stockQuantity}
                      >
                        +
                      </Button>
                    </Space>
                  </Col>
                  <Col span={4} style={{ textAlign: "right" }}>
                    <Text strong>
                      ${(item.price * item.quantity).toFixed(2)}
                    </Text>
                  </Col>
                  <Col span={2} style={{ textAlign: "right" }}>
                    <Popconfirm
                      title="Are you sure you want to remove this item?"
                      onConfirm={() => handleRemove(item.id)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button type="primary" danger icon={<DeleteOutlined />} />
                    </Popconfirm>
                  </Col>
                </Row>
                <Divider />
              </List.Item>
            )}
          />
          <Row justify="space-between" style={{ marginTop: "20px" }}>
            <Col>
              <Title level={4}>
                Total: ${(getTotal() * 1.15).toFixed(2)} (including VAT)
              </Title>
            </Col>
            <Col>
              <NavLink to="/checkout">
                <Button
                  type="primary"
                  size="large"
                  disabled={cart.length === 0}
                >
                  Proceed to Checkout
                </Button>
              </NavLink>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Cart;
