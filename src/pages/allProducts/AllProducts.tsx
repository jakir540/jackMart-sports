import { useGetProductsQuery } from "@/redux/api/api";
import AllProductsCard from "./AllProductsCard";
import { TProduct } from "@/type/product";

export default function AllProducts() {
  const { data, isError, isLoading } = useGetProductsQuery(undefined);
  console.log(data?.data);

  if (isError) {
    return <p>Error .loading product </p>;
  }
  if (isLoading) {
    return <p>products loading ............</p>;
  }

  return (
    <div className="my-10">
      <h1 className="text-4xl text-[#1E90FF] text-center font-semibold">
        All Products
      </h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {data?.data.map((product: TProduct) => (
          <AllProductsCard key={product._id} data={product} />
        ))}
      </div>
    </div>
  );
}
