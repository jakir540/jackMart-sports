import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Link, Text } = Typography;

export default function AppFooter() {
  return (
    <Footer
      className="bg-[#001529] text-white text-center "
      style={{
        padding: "20px 50px",
      }}
    >
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8}>
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
        <Col xs={24} sm={12} md={8}>
          <Space direction="vertical">
            <Text
              style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}
            >
              Quick Links
            </Text>
            <Space direction="vertical">
              <Link href="/home" style={{ color: "white", fontSize: "16px" }}>
                Home
              </Link>
              <Link href="/about" style={{ color: "white", fontSize: "16px" }}>
                About Us
              </Link>
              <Link
                href="/services"
                style={{ color: "white", fontSize: "16px" }}
              >
                Services
              </Link>
              <Link
                href="/contact"
                style={{ color: "white", fontSize: "16px" }}
              >
                Contact
              </Link>
            </Space>
          </Space>
        </Col>
      </Row>
      <Text
        style={{
          marginTop: "16px",
          display: "block",
          color: "white",
          fontSize: "14px",
        }}
      >
        © 2024 My Website. All Rights Reserved.
      </Text>
    </Footer>
  );
}
