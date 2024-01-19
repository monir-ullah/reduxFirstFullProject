import { Layout, Menu } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { menuItems } from "./MenuItem";
const { Header, Sider, Content, Footer } = Layout;

export const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            height: "4rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "white", fontWeight: "bold" }}>PH University</p>
        </div>

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "" }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              // background: colorBgContainer,
              // borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
