import MainLayout from "@/components/layout/MainLayout";
import About from "@/pages/aboutUs/About";
import Home from "@/pages/home/Home";
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
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
