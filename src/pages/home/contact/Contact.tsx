import { Form, Input, Button } from "antd";
import Lottie from "react-lottie";
import animationData from "../../../assets/Animation - 1723084492605.json";

const Contact = () => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    // TODO
    console.log("Form submitted:");
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl mb-8 text-center font-semibold text-[#1E90FF]">
          Contact Us
        </h1>
        <div className="lg:flex items-start justify-between">
          <div className="flex-1 mr-8 lg:h-[450px] lg:w-[450px]">
            <Lottie options={defaultOptions} />
          </div>

          <div className="flex-1">
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label={<label className="text-lg font-semibold">Name</label>}
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input
                  placeholder="Your Name"
                  className="border-[#1E90FF] focus:border-[#1E90FF] focus:ring-[#1E90FF]"
                />
              </Form.Item>
              <Form.Item
                label={<label className="text-lg font-semibold">Email</label>}
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                ]}
              >
                <Input
                  placeholder="Your Email"
                  className="border-[#1E90FF] focus:border-[#1E90FF] focus:ring-[#1E90FF]"
                />
              </Form.Item>
              <Form.Item
                label={<label className="text-lg font-semibold">Subject</label>}
                name="subject"
                rules={[{ required: true, message: "Please enter a subject" }]}
              >
                <Input
                  placeholder="Subject"
                  className="border-[#1E90FF] focus:border-[#1E90FF] focus:ring-[#1E90FF]"
                />
              </Form.Item>
              <Form.Item
                label={<label className="text-lg font-semibold">Message</label>}
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Your Message"
                  className="border-[#1E90FF] focus:border-[#1E90FF] focus:ring-[#1E90FF]"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full bg-[#1E90FF] text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
