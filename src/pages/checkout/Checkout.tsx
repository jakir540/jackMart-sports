import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Card,
  Typography,
  Divider,
  Select,
  List,
  Radio,
  Collapse,
} from "antd";
import { CreditCardOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useUpdateStockQuantityInProductMutation } from "@/redux/api/api";
import { removeAllProductFromCart } from "@/redux/features/cartSlice/cartSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const { Title, Text } = Typography;
const { Option } = Select;
const { Panel } = Collapse;

const CheckoutPage = () => {
  const cart = useAppSelector((state) => state.cart.products || []);
  const [updateQuantityInProduct] = useUpdateStockQuantityInProductMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFinish = (values: any) => {
    console.log("Success:", values);
  };

  // Create total function
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const totalAmount = (getTotal() * 1.15).toFixed(2);

  const handleSubmit = async () => {
    console.log({ cart });
    const productIds = cart.map((item) => item.id);
    console.log({ productIds });
    const stockQuantity = cart.map((item) => item.quantity);
    console.log({ stockQuantity });

    try {
      await updateQuantityInProduct({ productIds, stockQuantity });
      console.log("Order successfully placed");
      dispatch(removeAllProductFromCart());

      Swal.fire({
        icon: "success",
        title: "Thanks For Ordering",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      navigate("/success");
    } catch (error: any) {
      console.error("Error placing order:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to place order",
        text: error.message,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div style={{ padding: "50px", background: "#f0f2f5" }}>
      <Row gutter={16}>
        <Col xs={24} md={16}>
          <Card>
            <Title level={2} style={{ textAlign: "center" }}>
              Checkout
            </Title>
            <Divider />

            <Title level={4}>Contact</Title>
            <Form
              name="checkout"
              initialValues={{ remember: true }}
              onFinish={handleFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="subscribe" valuePropName="checked">
                <Checkbox> Email me with news and offers</Checkbox>
              </Form.Item>

              <Title level={4}>Delivery</Title>
              <Form.Item name="deliveryMethod">
                <Radio.Group>
                  <Radio value="ship">Ship</Radio>
                  <Radio value="pickup">Pickup in store</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="Country/Region"
                name="country"
                rules={[
                  { required: true, message: "Please select your country!" },
                ]}
              >
                <Select>
                  <Option value="usa">United States</Option>
                  <Option value="canada">Canada</Option>
                </Select>
              </Form.Item>

              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="First name"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Last name"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="Company (optional)" name="company">
                <Input />
              </Form.Item>

              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please input your address!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Apartment, suite, etc. (optional)"
                name="apartment"
              >
                <Input />
              </Form.Item>

              <Row gutter={16}>
                <Col xs={24} md={8}>
                  <Form.Item
                    label="City"
                    name="city"
                    rules={[
                      { required: true, message: "Please input your city!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    label="State"
                    name="state"
                    rules={[
                      { required: true, message: "Please input your state!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    label="ZIP code"
                    name="zip"
                    rules={[
                      {
                        required: true,
                        message: "Please input your ZIP code!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Title level={4}>Payment</Title>
              <Form.Item name="paymentMethod" initialValue="creditCard">
                <Radio.Group>
                  <Radio value="creditCard">Credit card</Radio>
                  <Radio value="cashPayment">Cash on Delivery</Radio>
                </Radio.Group>
              </Form.Item>

              <Collapse>
                <Panel header="Credit card" key="1">
                  <Form.Item
                    label="Card number"
                    name="cardNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your card number!",
                      },
                    ]}
                  >
                    <Input prefix={<CreditCardOutlined />} />
                  </Form.Item>

                  <Row gutter={16}>
                    <Col xs={12}>
                      <Form.Item
                        label="Expiration date (MM / YY)"
                        name="expirationDate"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={12}>
                      <Form.Item
                        label="Security code"
                        name="securityCode"
                        rules={[
                          {
                            required: true,
                            message: "Please input your card security code!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    label="Name on card"
                    name="nameOnCard"
                    rules={[
                      {
                        required: true,
                        message: "Please input the name on your card!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="billingSameAsShipping"
                    valuePropName="checked"
                  >
                    <Checkbox>
                      {" "}
                      Use shipping address as billing address
                    </Checkbox>
                  </Form.Item>
                </Panel>
              </Collapse>

              <Form.Item>
                <Checkbox> Save my information for a faster checkout</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  onClick={() => handleSubmit()}
                  type="primary"
                  htmlType="submit"
                  block
                >
                  Pay now
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Title level={4}>Order Summary</Title>
            <List
              itemLayout="horizontal"
              dataSource={cart}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: 50, height: 50 }}
                      />
                    }
                    title={item.name}
                    description={`Quantity: ${item.quantity}`}
                  />
                  <Text> Price: ${item.price * item.quantity}</Text>
                </List.Item>
              )}
            />
            <Divider />
            <Row justify="space-between">
              <Col>
                <Text strong>Subtotal: </Text>
              </Col>
              <Col>
                <Text></Text>
                <Text>${totalAmount}</Text>
              </Col>
            </Row>
            <Row justify="space-between" style={{ marginTop: 10 }}>
              <Col>
                <Text strong>Shipping:</Text>
              </Col>
              <Col>
                <Text>Enter shipping address</Text>
              </Col>
            </Row>
            <Divider />
            <Row justify="space-between">
              <Col>
                <Title level={4}>Total:</Title>
              </Col>
              <Col>
                <Title level={4}>${totalAmount}</Title>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;
