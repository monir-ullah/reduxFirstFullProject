import { TMenuItem } from "../types/menuItem.type";

export const sidebarGenerator = (sidebarMenuItem: TMenuItem[]) => {
  return sidebarMenuItem.reduce((acc: TMenuItem[], item) => {
    if (item.key && item.label && !item.children) {
      acc.push({
        key: item.key,
        label: item.label,
        icon: item.icon ? item.icon : "",
      });
    }

    if (item.children) {
      acc.push({
        key: item.icon!,
        label: item.label,
        icon: item.icon,
        children: item.children.map((child) => ({
          key: child.key,
          label: child.label,
          icon: child.icon,
        })),
      });
    }
    return acc;
  }, []);
};
