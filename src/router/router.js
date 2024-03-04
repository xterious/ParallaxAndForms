import { Navigate, createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    // children: [
    //   {
    //   },
    // ],
  },
]);

export default router;