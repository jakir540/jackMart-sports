import MainLayout from "@/components/layout/MainLayout";
import About from "@/pages/aboutUs/About";
import Home from "@/pages/home/Home";
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
    ],
  },
]);

export default router;
