import { useCreateProductMutation } from "@/redux/api/api";
import { Button, Form, Input, InputNumber, Rate } from "antd";

export default function AddProducts() {
  const [createProduct, { isLoading }] = useCreateProductMutation();
  if (isLoading) {
    return <p>loading ..........</p>;
  }

  const handleFormSubmit = (values) => {
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

    createProduct(productData);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl text-center underline mb-8">Add Product</h1>
      <Form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        layout="vertical"
        onFinish={handleFormSubmit}
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
          rules={[{ required: true, message: "Please input the category!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="stockQuantity"
          label="Stock Quantity"
          rules={[
            { required: true, message: "Please input the stock quantity!" },
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
          rules={[{ required: true, message: "Please input the image URL!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="rating"
          label="Rating"
          rules={[{ required: true, message: "Please input the rating!" }]}
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
          rules={[{ required: true, message: "Please input the description!" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
