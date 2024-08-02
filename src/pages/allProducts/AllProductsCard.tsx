import { TAllProductProps } from "@/type/product";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button, Card } from "antd";
import { NavLink } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

export default function AllProductsCard({ data }: TAllProductProps) {
  return (
    <Card
      className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
      hoverable
      style={{ width: "100%", maxWidth: "350px", height: "auto" }}
      cover={
        <img
          alt={data.name}
          src={data?.image}
          className="h-48 w-full object-cover rounded-t-lg"
        />
      }
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-[#1E90FF]">
            {data.name}
          </h2>
          <p className="text-md font-medium text-gray-600 mb-1">
            Category: <span className="font-normal">{data.category}</span>
          </p>
          <p className="text-md font-medium text-gray-600 mb-1">
            Stock: <span className="font-normal">{data.stockQuantity}</span>
          </p>
          <p className="text-md font-medium text-gray-600 mb-1">
            Brand: <span className="font-normal">{data.brand}</span>
          </p>

          <div className="my-2">
            <StarRatingComponent
              name="rating"
              starCount={5}
              value={data.rating}
              editing={false}
              starColor="#ffd700"
              emptyStarColor="#e4e5e9"
            />
          </div>

          <p className="text-xl font-semibold text-[#1E90FF] mb-2">
            ${data.price}
          </p>
          <p className="text-sm text-gray-500 mb-4">{data.description}</p>
        </div>
        <NavLink to={`/product/${data._id}`} className="mt-4">
          <Button type="primary" block className="rounded-md">
            View Details
          </Button>
        </NavLink>
      </div>
    </Card>
  );
}
