import { Typography, Row, Col, Card } from "antd";

const { Title, Paragraph } = Typography;

const MissionAndVission = () => {
  return (
    <div>
      <section className="mb-16">
        <Title level={2} className="text-blue-600 text-center mb-8">
          Mission & Vision
        </Title>
        <Row gutter={[24, 24]} justify="center">
          {/* Mission Card */}
          <Col xs={24} md={10}>
            <Card
              className="rounded-3xl shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-500 to-indigo-600 text-white"
              bordered={false}
            >
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-full p-4">
                  <i className="fas fa-bullseye text-blue-500 text-xl"></i>
                </div>
                <Title level={4} className="ml-4 text-white">
                  Our Mission
                </Title>
              </div>
              <Paragraph className="text-md leading-relaxed">
                Our mission is to promote sports and fitness through the supply
                of high-quality sports products. We aim to inspire individuals
                to lead healthier and more active lives by providing exceptional
                products and unparalleled customer service.
              </Paragraph>
            </Card>
          </Col>

          {/* Vision Card */}
          <Col xs={24} md={10}>
            <Card
              className="rounded-3xl shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-green-400 to-teal-500 text-white"
              bordered={false}
            >
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-full p-4">
                  <i className="fas fa-lightbulb text-green-500 text-xl"></i>
                </div>
                <Title level={4} className="ml-4 text-white">
                  Our Vision
                </Title>
              </div>
              <Paragraph className="text-md leading-relaxed">
                We envision becoming the leading sports retailer in Bangladesh
                by continually evolving and adapting to meet the needs of our
                customers. Our goal is to be recognized for our commitment to
                excellence, innovation, and customer satisfaction.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default MissionAndVission;
