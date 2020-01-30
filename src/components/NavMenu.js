import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const defaultSelectedKeys = sessionStorage.getItem('defaultSelectedKeys') || '1';

  const onClick = (el) => {
    sessionStorage.setItem('defaultSelectedKeys', el.key);
  };

  return (
    <>
      <Layout className="layout">
        <Layout.Header>
          <img className="logo"
               alt="logo"
               src="./sunlogo.png"/>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[defaultSelectedKeys]}
            style={{ lineHeight: '64px' }}
            onClick={onClick}>
            <Menu.Item key="1">
              <Link to="/">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/pie">
                Pie Chart
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/depth">
                Depth Chart
              </Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
      </Layout>
    </>
  );
};

export default NavMenu;
