import { Button, Layout, Menu } from "antd";
import { useState } from "react";
const { Header, Sider, Content } = Layout;

const sidebarMenuItem = [
  {
    key: "Dashboard",
    label: "Dashboard",
  },
  {
    key: "User Management",
    label: "User Management",
  },
];

export const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            height: "58px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "white", fontSize: "18px" }}>PH University</p>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={sidebarMenuItem}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "" }}>
          <Button
            type="text"
            icon={collapsed ? "➡️" : "⬅️"}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          This is the main content
        </Content>
      </Layout>
    </Layout>
  );
};
