import { Result, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Result
        icon={<SmileOutlined style={{ color: "#52c41a" }} />}
        title="Order Successful"
        subTitle="Your Oder has been successfully completed. You can now proceed with further steps."
        extra={
          <Button type="primary" onClick={handleButtonClick}>
            Go to Home
          </Button>
        }
      />
    </div>
  );
}
