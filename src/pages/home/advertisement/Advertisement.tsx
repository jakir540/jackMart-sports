import { Button } from "antd";
import "./Advertisement.css";

const Advertisement = () => {
  return (
    <div className="newsletter  my-16 h-96 bg-fixed filter">
      <div className="text-white text-center ">
        <h2 className="text-3xl font-semibold pt-16 text-white text-center">
          SUBSCRIBE TO OUR NEWSLETTER
        </h2>
        <p>Subscribe and take all information about our latest events</p>

        <div className="flex flex-col mt-10 justify-center items-center">
          <input
            className="p-4 rounded-md "
            type="text"
            placeholder="type your email"
          />
          <Button className="btn bg-[#1E90FF] mt-2">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
