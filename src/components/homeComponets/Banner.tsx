import React from "react";
import { Carousel } from "antd";

import sliderImage2 from "@/assets/ball.jpeg";

const contentStyle: React.CSSProperties = {
  height: "600px",

  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Banner() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 rounded-lg">
      <Carousel autoplay className="w-full max-w-6xl">
        <div>
          <div style={{ ...contentStyle, padding: 0 }}>
            <img
              src="https://i.ibb.co/9ykBsqP/shop-About.jpg"
              alt="ball1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <div style={{ ...contentStyle, padding: 0 }}>
            <img
              src={sliderImage2}
              alt="ball2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <div style={{ ...contentStyle, padding: 0 }}>
            <img
              src="https://i.ibb.co/XFFdY6W/sports-5.jpg"
              alt="ball2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <div style={{ ...contentStyle, padding: 0 }}>
            <img
              src="https://i.ibb.co/zFCG6JW/banner-Bat.jpg"
              alt="ball2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

// https://i.ibb.co/VVSVC6d/banner4.jpg
// https://i.ibb.co/zFCG6JW/banner-Bat.jpg
// https://i.ibb.co/tKYYgVg/banner-Football.jpg
