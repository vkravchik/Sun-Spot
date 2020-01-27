import React, { Fragment, Component } from 'react';
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";

export class NavMenu extends Component {

  render() {
    return (
      <Fragment>
        <Layout className="layout">
          <Layout.Header>
            <img className="logo"
                 alt={'logo'}
                 src={'./sunlogo.png'}/>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{lineHeight: '64px'}}>
              <Menu.Item key="1">
                <Link to='/'>
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to='/pie'>
                  Pie Chart
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to='/depth'>
                  Depth Chart
                </Link>
              </Menu.Item>
            </Menu>
          </Layout.Header>
        </Layout>
      </Fragment>
    )
  }
}
