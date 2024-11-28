/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
import { Button, Badge, Space, Input } from "antd";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useState } from "react";

export default function MainNav() {
  const cart = useAppSelector((state) => state.cart.products || []);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value: any) => {
    // Redirect to a search page or handle the search logic here
    console.log("Searching for:", value);
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl">MyStore</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-4">
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
          </Space>
        </nav>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <Input.Search
            placeholder="Search products..."
            enterButton={<SearchOutlined />}
            size="large"
            onSearch={handleSearch}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md"
          />
        </div>

        {/* Cart Icon */}
        <NavLink to="/cart">
          <Button
            type="link"
            className="text-white hover:text-[#1E90FF]"
            aria-label="Cart"
          >
            <Badge
              count={cart.length > 0 ? cart.length : null}
              offset={[10, 0]}
            >
              <ShoppingCartOutlined className="text-white text-2xl" />
            </Badge>
          </Button>
        </NavLink>
      </div>
    </header>
  );
}
