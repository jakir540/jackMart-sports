import { NavLink } from "react-router-dom";
import { Button } from "../button";

export default function MainNav() {
  return (
    <nav className="hidden md:flex space-x-4">
      <NavLink to="/">
        <Button variant="link" className="text-white hover:text-[#1E90FF]">
          Home
        </Button>
      </NavLink>
      <NavLink to="/all-products">
        <Button variant="link" className="text-white hover:text-[#1E90FF]">
          All Products
        </Button>
      </NavLink>
      <NavLink to="/product">
        <Button variant="link" className="text-white hover:text-[#1E90FF]">
          Product
        </Button>
      </NavLink>
      <NavLink to="/aboutUs">
        <Button variant="link" className="text-white hover:text-[#1E90FF]">
          About Us
        </Button>
      </NavLink>
      <NavLink to="/manage-products">
        <Button variant="link" className="text-white hover:text-[#1E90FF]">
          Manage Products
        </Button>
      </NavLink>
      <NavLink to="/cart">
        <Button variant="link" className="text-white hover:text-[#1E90FF]">
          Cart
        </Button>
      </NavLink>
    </nav>
  );
}
