/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
import { Button, Badge, Space, Input } from "antd";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useState } from "react";
// import logo from '../../../assets/logom.JPG'

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
        <div className="text-white font-bold text-xl px-3">
          <img
            className="rounded-full size-11"
            src="https://i.ibb.co.com/8d965YN/logom.jpg"
            alt="logo"
          />
        </div>

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

// https://i.ibb.co.com/Q9fBRY4/racket-1.jpg
// https://i.ibb.co.com/V9g2w5V/racket-2.jpg
// https://i.ibb.co.com/7Y6WmQz/racket-3.jpg
// https://i.ibb.co.com/2KVh4Cq/racket-4.jpg
// https://i.ibb.co.com/TW3Wcbf/racket-5.jpg
