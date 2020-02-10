import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';

import StorageService from '../redux/services/storageService';

const NavMenu = () => {
  const defaultSelectedKeys = StorageService.getSelectedNav();

  const onClick = (el) => {
    StorageService.setSelectedNav(el.key);
  };

  return (
    <>
      <Layout className="layout">
        <Layout.Header>
          <img className="logo"
               alt="logo"
               src="./d2logo.png"/>
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
