import MainLayout from "@/components/layout/MainLayout";
import About from "@/pages/aboutUs/About";
import Cart from "@/pages/cart/Cart";
import Checkout from "@/pages/checkout/Checkout";
import Home from "@/pages/home/Home";
import AddProducts from "@/pages/manageProducts/AddProducts";
import ManageProducts from "@/pages/manageProducts/ManageProducts";
import AllProducts from "@/pages/proudcts/AllProducts";
import ProductDetails from "@/pages/singleProduct/SingleProductDetails";
import SuccessPage from "@/pages/successPage/SuccessPage";
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
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "product/products",
        element: <AllProducts />,
      },
      {
        path: "success",
        element: <SuccessPage />,
      },
    ],
  },
]);

export default router;
