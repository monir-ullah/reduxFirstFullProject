import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { routesGenerator } from "../utils/routesGenerator";
import { adminRoutes } from "./routes.admin";
import { MainLayout } from "../components/layout/MainLayout";

const routerElement = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/login", element: <Login /> }],
  },
  {
    path: "/",
    element: <App />,
    children: routesGenerator(adminRoutes),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export const router = createBrowserRouter(routerElement);
