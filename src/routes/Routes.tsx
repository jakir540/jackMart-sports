import MainLayout from "@/components/layout/MainLayout";
import About from "@/pages/aboutUs/About";
import Cart from "@/pages/cart/Cart";
import Home from "@/pages/home/Home";
import AddProducts from "@/pages/manageProducts/AddProducts";
import ManageProducts from "@/pages/manageProducts/ManageProducts";
import ProductDetails from "@/pages/singleProduct/ProductDetails";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <MainLayout />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "aboutUs",
        element: <About></About>,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
      },
      {
        path: "addProduct",
        element: <AddProducts />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
