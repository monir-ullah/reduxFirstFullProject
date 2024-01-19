import { CreateAdmin } from "../pages/CreateAdmin";
import { CreateFaculty } from "../pages/CreateFaculty";
import { CreateStudent } from "../pages/CreateStudent";

export const adminRoutes = [
  {
    path: "create-admin",
    element: <CreateAdmin />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,
  },
  {
    path: "create-student",
    element: <CreateStudent />,
  },
];
