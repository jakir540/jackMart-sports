import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <div className="flex flex-col items-start">
          <nav onClick={handleLinkClick} className="md:hidden space-y-2">
            <NavLink to="/">
              <Button
                variant="link"
                className="block text-white hover:text-[#1E90FF]"
              >
                Home
              </Button>
            </NavLink>
            <NavLink to="/product/products">
              <Button
                variant="link"
                className="block text-white hover:text-[#1E90FF]"
              >
                All Products
              </Button>
            </NavLink>

            <NavLink to="/aboutUs">
              <Button
                variant="link"
                className="text-white hover:text-[#1E90FF]"
              >
                About Us
              </Button>
            </NavLink>
            <NavLink to="/manage-products">
              <Button
                variant="link"
                className="block text-white hover:text-[#1E90FF]"
              >
                Manage Products
              </Button>
            </NavLink>
            <NavLink to="/addProduct">
              <Button
                variant="link"
                className="block text-white hover:text-[#1E90FF]"
              >
                Add Product
              </Button>
            </NavLink>
            <NavLink to="/cart">
              <Button
                variant="link"
                className="block text-white hover:text-[#1E90FF]"
              >
                Cart
              </Button>
            </NavLink>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
