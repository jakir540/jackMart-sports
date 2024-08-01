import { TAllProductProps } from "@/type/product";
import { Button, Card } from "antd";
import { NavLink } from "react-router-dom";

export default function AllProductsCard({ data }: TAllProductProps) {
  return (
    <Card
      className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
      hoverable
      style={{ width: "100%", maxWidth: "300px", height: "400px" }}
      cover={
        <img
          alt="example"
          src={data?.image}
          className="h-48 w-full object-cover rounded-t-lg"
        />
      }
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
          <p className="text-lg font-semibold text-gray-700">
            {" "}
            Price: {data.price}$
          </p>
        </div>
        <NavLink to={`/product/${data._id}`} className="mt-4">
          <Button className="w-full">Details</Button>
        </NavLink>
      </div>
    </Card>
  );
}
