import { Modal, Table } from "antd";
import { Button, Form, Input, InputNumber, Rate } from "antd";
import "./manageProduct.css";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "@/redux/api/api";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { TProduct } from "@/type/product";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);
  const { data } = useGetProductsQuery(undefined);

  const [deleteProduct, { isError, isSuccess: deletedSuccess, isLoading }] =
    useDeleteProductMutation();
  const [updateProduct, { isSuccess: updateSuccess }] =
    useUpdateProductMutation();

  useEffect(() => {
    if (deletedSuccess) {
      Swal.fire({
        icon: "success",
        title: "Product deleted Successfully",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    }
    if (updateSuccess) {
      Swal.fire({
        icon: "success",
        title: "Product Updated Successfully",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    }
  }, [updateSuccess, deletedSuccess]);

  if (isError) {
    return <p>error........</p>;
  }
  if (isLoading) {
    return <p>loading........</p>;
  }
  const handleFormSubmit = (values: TProduct) => {
    const productData = {
      name: values.name,
      category: values.category.toLowerCase(),
      stockQuantity: values.stockQuantity,
      brand: values.brand,
      image: values.image,
      rating: values.rating,
      price: values.price,
      description: values.description,
    };

    if (selectedProduct) {
      updateProduct({ id: selectedProduct._id, ...productData });
    }
    setIsModalOpen(false);
  };

  const showModal = (product: TProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //delete single product
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
            //when call show modal give all product by showModal function
            onClick={() => showModal(record)}
            className="text-[#1E90FF]  border-[#1E90FF]  hover:text-white"
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
    <>
      <Table
        className="p-8 bg-gray-100 my-2 min-h-screen"
        dataSource={dataSource}
        columns={columns}
      />

      <div>
        <Modal
          title="Update Product"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {selectedProduct && (
            <Form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              layout="vertical"
              onFinish={handleFormSubmit}
              initialValues={selectedProduct}
            >
              <Form.Item
                name="name"
                label="Product Name"
                rules={[
                  { required: true, message: "Please input the product name!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="category"
                label="Category"
                rules={[
                  { required: true, message: "Please input the category!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="stockQuantity"
                label="Stock Quantity"
                rules={[
                  {
                    required: true,
                    message: "Please input the stock quantity!",
                  },
                ]}
              >
                <InputNumber min={0} style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                name="brand"
                label="Brand"
                rules={[{ required: true, message: "Please input the brand!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="image"
                label="Image URL"
                rules={[
                  { required: true, message: "Please input the image URL!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="rating"
                label="Rating"
                rules={[
                  { required: true, message: "Please input the rating!" },
                ]}
              >
                <Rate />
              </Form.Item>

              <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: "Please input the price!" }]}
              >
                <InputNumber min={0} step={0.01} style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                name="description"
                label="Description"
                rules={[
                  { required: true, message: "Please input the description!" },
                ]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          )}
        </Modal>
      </div>
    </>
  );
};

export default ManageProducts;
