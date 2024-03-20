import { RouteObject, createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import BaseComponent from "../components/BaseComponent";

const routes = [
  {
    path: "/",
    element: <BaseComponent />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
    ],
  },
  {
    path: "/file",
    element: <h1>file</h1>,
  },
] satisfies RouteObject[];

const router = createBrowserRouter(routes);

export default router;
