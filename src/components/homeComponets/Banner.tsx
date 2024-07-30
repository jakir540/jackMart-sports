import React from "react";
import { Carousel } from "antd";
import sliderImage1 from "@/assets/ball.jpg";

const contentStyle: React.CSSProperties = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Banner() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <div style={{ ...contentStyle, padding: 0 }}>
            <img src={sliderImage1} alt="ball" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>2</div>
        </div>
        <div>
          <div style={contentStyle}>3</div>
        </div>
        <div>
          <div style={contentStyle}>4</div>
        </div>
      </Carousel>
    </div>
  );
}
