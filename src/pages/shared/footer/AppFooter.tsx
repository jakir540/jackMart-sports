import React from "react";
import { Layout, Row, Col, Typography, Space, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  CustomerServiceOutlined,
  PhoneOutlined,
  MailOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Link, Text } = Typography;

export default function AppFooter() {
  return (
    <Footer
      className="bg-[#001529] text-white text-center"
      style={{
        padding: "40px 50px",
      }}
    >
      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} sm={12} md={6}>
          <Space direction="vertical">
            <Text
              style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}
            >
              Follow Us
            </Text>
            <Space>
              <Link href="https://www.facebook.com" target="_blank">
                <FacebookOutlined
                  style={{ fontSize: "24px", color: "#1E90FF" }}
                />
              </Link>
              <Link href="https://www.twitter.com" target="_blank">
                <TwitterOutlined
                  style={{ fontSize: "24px", color: "#1E90FF" }}
                />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <InstagramOutlined
                  style={{ fontSize: "24px", color: "#FF4500" }}
                />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank">
                <LinkedinOutlined
                  style={{ fontSize: "24px", color: "#1E90FF" }}
                />
              </Link>
            </Space>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Space direction="vertical">
            <Text
              style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}
            >
              Quick Links
            </Text>
            <Space direction="vertical">
              <Link href="/" style={{ color: "white", fontSize: "16px" }}>
                <HomeOutlined /> Home
              </Link>
              <Link
                href="/aboutUs"
                style={{ color: "white", fontSize: "16px" }}
              >
                <InfoCircleOutlined /> About Us
              </Link>
              <Link
                href="/services"
                style={{ color: "white", fontSize: "16px" }}
              >
                <CustomerServiceOutlined /> Services
              </Link>
              <Link
                href="/aboutUs"
                style={{ color: "white", fontSize: "16px" }}
              >
                <PhoneOutlined /> Contact
              </Link>
            </Space>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Space direction="vertical">
            <Text
              style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}
            >
              Contact Us
            </Text>
            <Space direction="vertical">
              <Link
                href="mailto:info@mywebsite.com"
                style={{ color: "white", fontSize: "16px" }}
              >
                <MailOutlined /> jakirhossaimd540@gmail.com
              </Link>
              <Link
                href="tel:+8801707372220"
                style={{ color: "white", fontSize: "16px" }}
              >
                <PhoneOutlined /> +8801707372220
              </Link>
            </Space>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Space direction="vertical">
            <Text
              style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}
            >
              Resources
            </Text>
            <Space direction="vertical">
              <Link href="/blog" style={{ color: "white", fontSize: "16px" }}>
                <FileTextOutlined /> Blog
              </Link>
              <Link
                href="/aboutUs"
                style={{ color: "white", fontSize: "16px" }}
              >
                <FileTextOutlined /> FAQ
              </Link>
              <Link
                href="/aboutUs"
                style={{ color: "white", fontSize: "16px" }}
              >
                <FileTextOutlined /> Terms of Service
              </Link>
              <Link
                href="/aboutUs"
                style={{ color: "white", fontSize: "16px" }}
              >
                <FileTextOutlined /> Privacy Policy
              </Link>
            </Space>
          </Space>
        </Col>
      </Row>
      <Divider style={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />
      <Text style={{ color: "white", fontSize: "14px" }}>
        © 2024 My Website. All Rights Reserved.
      </Text>
    </Footer>
  );
}
