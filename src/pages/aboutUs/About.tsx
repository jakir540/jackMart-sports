import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Divider,
  Button,
  Image,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  TeamOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import aboutUsImage from "@/assets/aboutUsShop.jpg";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default function About() {
  return (
    <Layout className="min-h-screen bg-gray-100">
      <Title className="text-white text-center py-4 underline">About Us</Title>

      <Content className="p-4 md:p-8">
        <div className="container mx-auto">
          <section className="mb-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <Col xs={24} md={12}>
              <Image
                className="rounded-r-full"
                width="100%"
                src={aboutUsImage}
                alt="Description of image"
              />
            </Col>
            <Col xs={24} md={12} className="p-4 md:p-10">
              <Title level={2} style={{ color: "#1E90FF" }}>
                About Our Company
              </Title>
              <div className="p-4 md:p-8 bg-white rounded-3xl shadow-md">
                <Paragraph className="text-lg font-semibold text-gray-800 mb-4">
                  We are a premier sports retailer specializing in a wide range
                  of sports products.
                </Paragraph>
                <Paragraph className="text-md leading-6 text-gray-700 mb-4">
                  From the latest in sports apparel to state-of-the-art
                  equipment, we offer everything you need to excel in your
                  favorite sports.
                </Paragraph>
                <Paragraph className="text-md leading-6 text-gray-700 mb-4">
                  Based in Dhaka, Khilkhet, Bangladesh, our mission is to
                  provide top-notch sports products that enhance performance and
                  encourage an active lifestyle.
                </Paragraph>
              </div>
            </Col>
          </section>

          <Divider />

          <section className="mb-12">
            <Title level={2} style={{ color: "#1E90FF" }}>
              Mission & Vision
            </Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <Card
                  title="Our Mission"
                  bordered={false}
                  className="bg-white shadow-md"
                >
                  <Paragraph className="text-md leading-6 text-gray-700 mb-4">
                    Our mission is to promote sports and fitness through the
                    supply of high-quality sports products. We aim to inspire
                    individuals to lead healthier and more active lives by
                    providing exceptional products and unparalleled customer
                    service.
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card
                  title="Our Vision"
                  bordered={false}
                  className="bg-white shadow-md"
                >
                  <Paragraph className="text-md leading-6 text-gray-700 mb-4">
                    We envision becoming the leading sports retailer in
                    Bangladesh by continually evolving and adapting to meet the
                    needs of our customers. Our goal is to be recognized for our
                    commitment to excellence, innovation, and customer
                    satisfaction.
                  </Paragraph>
                </Card>
              </Col>
            </Row>
          </section>

          <Divider />

          <section className="mb-12">
            <Title level={2} style={{ color: "#1E90FF" }}>
              Contact Information
            </Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <Card
                  bordered={false}
                  className="bg-white shadow-md flex items-center"
                >
                  <MailOutlined className="text-2xl text-[#1E90FF]" />
                  <Paragraph className="ml-4">
                    Email:{" "}
                    <a href="mailto:jakirhossainmd540@gmail.com">
                      jakirhossainmd540@gmail.com
                    </a>
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card
                  bordered={false}
                  className="bg-white shadow-md flex items-center"
                >
                  <PhoneOutlined className="text-2xl text-[#1E90FF]" />
                  <Paragraph className="ml-4">Phone: +880 1707372220</Paragraph>
                </Card>
              </Col>
            </Row>
          </section>

          <Divider />

          <section className="mb-12">
            <Title level={2} style={{ color: "#1E90FF" }}>
              Our Team
            </Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Card
                  title="Anisul Islam"
                  bordered={false}
                  className="bg-white shadow-md text-center"
                >
                  <TeamOutlined className="text-2xl text-[#1E90FF]" />
                  <Paragraph className="mt-2">CEO and Founder</Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card
                  title="Md Jakir Hossain"
                  bordered={false}
                  className="bg-white shadow-md text-center"
                >
                  <TeamOutlined className="text-2xl text-[#1E90FF]" />
                  <Paragraph className="mt-2">Head of Marketing</Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card
                  title="Jevanoor"
                  bordered={false}
                  className="bg-white shadow-md text-center"
                >
                  <TeamOutlined className="text-2xl text-[#1E90FF]" />
                  <Paragraph className="mt-2">Sales Manager</Paragraph>
                </Card>
              </Col>
            </Row>
          </section>

          <Divider />

          <section className="mb-12">
            <Title level={2} style={{ color: "#1E90FF" }}>
              Our Store Location
            </Title>
            <Card bordered={false} className="bg-white shadow-md text-center">
              <EnvironmentOutlined className="text-2xl text-[#1E90FF]" />
              <Paragraph className="mt-2">
                Address: 123 Sports Street, Khilkhet, Dhaka, Bangladesh
              </Paragraph>
              <Button
                type="primary"
                href="https://maps.google.com/?q=123+Sports+Street,+Khilkhet,+Dhaka,+Bangladesh"
              >
                View on Google Maps
              </Button>
            </Card>
          </section>
        </div>
      </Content>
    </Layout>
  );
}
