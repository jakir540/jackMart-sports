import { NavLink } from "react-router-dom";
import { Button, Badge, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useAppSelector } from "@/redux/hooks/hooks";

export default function MainNav() {
  const cart = useAppSelector((state) => state.cart.products || []);

  return (
    <nav className="hidden md:flex items-center space-x-4 ">
      <Space size="large">
        <NavLink to="/">
          <Button type="link" className="text-white hover:text-[#1E90FF]">
            Home
          </Button>
        </NavLink>
        <NavLink to="/product/products">
          <Button type="link" className="text-white hover:text-[#1E90FF]">
            All Products
          </Button>
        </NavLink>

        <NavLink to="/aboutUs">
          <Button type="link" className="text-white hover:text-[#1E90FF]">
            About Us
          </Button>
        </NavLink>
        <NavLink to="/manage-products">
          <Button type="link" className="text-white hover:text-[#1E90FF]">
            Manage Products
          </Button>
        </NavLink>
        <NavLink to="/addProduct">
          <Button type="link" className="text-white hover:text-[#1E90FF]">
            Add Product
          </Button>
        </NavLink>
        <NavLink to="/cart">
          <Button type="link" className="text-white hover:text-[#1E90FF]">
            <Badge count={cart.length} offset={[10, 0]}>
              <ShoppingCartOutlined className="text-white hover:text-[#1E90FF]  text-xl" />
            </Badge>
          </Button>
        </NavLink>
      </Space>
    </nav>
  );
}
