import Home from "@/routes/home";
import { RouterProvider as ARouterProvider, createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    index: true,
    Component: Home,
  },
]);

export const RouterProvider = () => {
  return <ARouterProvider router={router} />;
};
