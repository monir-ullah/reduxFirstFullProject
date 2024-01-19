import { NavLink } from "react-router-dom";
import { sidebarGenerator } from "../../utils/sidebarMenuGenerator";

// this is sidebar Menu Item
export const sidebarMenuItem = [
  {
    key: "Login",
    icon: "🗝️",
    label: <NavLink to={"/login"}>Login</NavLink>,
  },
  {
    key: "User Management",
    label: "User Management",
    icon: "👨‍👩‍👦‍👦",
    children: [
      {
        key: "Create Admin",
        icon: "👮🏻‍♂️",
        label: <NavLink to={"/create-admin"}>Create Admin</NavLink>,
      },
      {
        key: "Create Faculty",
        icon: "👨🏻‍🏫",
        label: <NavLink to={"/create-faculty"}>Create Faculty</NavLink>,
      },
      {
        key: "Create Student",
        icon: "👨🏻‍💻",
        label: <NavLink to={"/create-student"}>Create Student</NavLink>,
      },
    ],
  },
];

export const menuItems = sidebarGenerator(sidebarMenuItem);
