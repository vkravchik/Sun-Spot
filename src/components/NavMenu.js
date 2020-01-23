import React, { Fragment, Component } from 'react';
import { Menu, Layout } from "antd";

export class NavMenu extends Component {

  render() {
    return (
      <Fragment>
        <Layout className="layout">
          <Layout.Header>
            <img className="logo" src='./sunlogo.png' />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Layout.Header>
        </Layout>
      </Fragment>
    )
  }
}
