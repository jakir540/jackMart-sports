import { Button, Table } from "antd";
import { useDeleteProductMutation, useGetProductsQuery } from "@/redux/api/api";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { TProduct } from "@/type/product";
const ManageProducts = () => {
  const { data } = useGetProductsQuery(undefined);
  const [deleteProduct, { isError, isLoading }] = useDeleteProductMutation();

  if (isError) {
    return <p>error........</p>;
  }
  if (isLoading) {
    return <p>loading........</p>;
  }

  const handleUpdate = (record: TProduct) => {
    console.log(record);
  };
  const handleDelete = (record: TProduct) => {
    deleteProduct(record._id);
  };

  console.log("8", data?.data);
  const dataSource = data?.data;

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text: string) => (
        <img
          className="rounded-full"
          src={text}
          alt="Product"
          style={{ width: 50, height: 50 }}
        />
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Stock Quantity",
      dataIndex: "stockQuantity",
      key: "stockQuantity",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },

    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Actions",
      key: "actions",
      render: (record: TProduct) => (
        <div className="flex space-x-2 ">
          <Button
            icon={<EditOutlined />}
            onClick={() => handleUpdate(record)}
            className="text-blue-500 border-[#1E90FF]  hover:text-white"
          >
            Update
          </Button>

          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
            className="text-red-500 border-red-500  hover:text-white"
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Table
      className="p-8 bg-gray-50 min-h-screen"
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default ManageProducts;
