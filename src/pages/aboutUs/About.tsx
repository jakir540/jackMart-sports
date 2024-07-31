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

      <Content className="p-8">
        <div className="container mx-auto">
          <section className="mb-12 flex justify-between justify-items-center gap-8">
            <div>
              <Image
                className="rounded-r-full"
                width={700}
                src={aboutUsImage}
                alt="Description of image"
              />
            </div>
            <div className=" p-10 text-">
              <Title level={2}>About Our Company</Title>
              <Paragraph>
                We are a premier sports retailer specializing in a wide range of
                sports products. From the latest in sports apparel to
                state-of-the-art equipment, we offer everything you need to
                excel in your favorite sports. Based in Dhaka, Khilkhet,
                Bangladesh, our mission is to provide top-notch sports products
                that enhance performance and encourage an active lifestyle.
              </Paragraph>
            </div>
          </section>

          <Divider />

          <section className="mb-12">
            <Title level={2}>Mission & Vision</Title>
            <Row gutter={16}>
              <Col span={12}>
                <Card
                  title="Our Mission"
                  bordered={false}
                  className="bg-white shadow-md"
                >
                  <Paragraph>
                    Our mission is to promote sports and fitness through the
                    supply of high-quality sports products. We aim to inspire
                    individuals to lead healthier and more active lives by
                    providing exceptional products and unparalleled customer
                    service.
                  </Paragraph>
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  title="Our Vision"
                  bordered={false}
                  className="bg-white shadow-md"
                >
                  <Paragraph>
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
            <Title level={2}>Contact Information</Title>
            <Row gutter={16}>
              <Col span={12}>
                <Card bordered={false} className="bg-white shadow-md">
                  <MailOutlined className="text-2xl text-[#1E90FF]" />
                  <Paragraph className="ml-4">
                    Email:{" "}
                    <a href="mailto:info@sportsstore.com">
                      info@sportsstore.com
                    </a>
                  </Paragraph>
                </Card>
              </Col>
              <Col span={12}>
                <Card bordered={false} className="bg-white shadow-md">
                  <PhoneOutlined className="text-2xl text-[#1E90FF]" />
                  <Paragraph className="ml-4">
                    Phone: +880 123 456 789
                  </Paragraph>
                </Card>
              </Col>
            </Row>
          </section>

          <Divider />

          <section className="mb-12">
            <Title level={2}>Our Team</Title>
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  title="Anisul Islam"
                  bordered={false}
                  className="bg-white shadow-md"
                >
                  <TeamOutlined className="text-2xl text-[#1E90FF]" />
                  <Paragraph className="mt-2">CEO and Founder</Paragraph>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Md Jakir Hossain"
                  bordered={false}
                  className="bg-white shadow-md"
                >
                  <TeamOutlined className="text-2xl text-[#1E90FF]" />
                  <Paragraph className="mt-2">Head of Marketing</Paragraph>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Jevanoor"
                  bordered={false}
                  className="bg-white shadow-md"
                >
                  <TeamOutlined className="text-2xl text-[#1E90FF]" />
                  <Paragraph className="mt-2">Sales Manager</Paragraph>
                </Card>
              </Col>
            </Row>
          </section>

          <Divider />

          <section className="mb-12">
            <Title level={2}>Our Store Location</Title>
            <Card bordered={false} className="bg-white shadow-md">
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
