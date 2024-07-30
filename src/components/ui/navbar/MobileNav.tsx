import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <div className="flex flex-col items-start">
          <nav className="md:hidden space-y-2">
            <NavLink to="/all-products">
              <Button
                variant="link"
                className="block text-white hover:text-[#1E90FF]"
              >
                All Products
              </Button>
            </NavLink>
            <NavLink to="/product">
              <Button
                variant="link"
                className="block text-white hover:text-[#1E90FF]"
              >
                Product
              </Button>
            </NavLink>
            <NavLink to="/contact">
              <Button
                variant="link"
                className="block text-white hover:text-[#1E90FF]"
              >
                Contact
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
