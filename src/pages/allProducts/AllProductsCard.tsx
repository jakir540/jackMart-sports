import { TAllProductProps } from "@/type/product";
import { Button, Card } from "antd";
import { NavLink } from "react-router-dom";

export default function AllProductsCard({ data }: TAllProductProps) {
  return (
    <Card
      className="border p-4 rounded shadow-sm"
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={data?.image} />}
    >
      <h2 className="text-2xl font-bold">{data.name}</h2>

      <p className="text-lg font-semibold">{data.price}</p>
      <NavLink to={`/product/${data._id}`}>
        <Button>Details</Button>
      </NavLink>
    </Card>
  );
}
