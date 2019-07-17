import React, { Component } from 'react'
import MyRouter from '@/router';
import LayoutHeader from '@/pages/Layout/LayoutHeader'
import LayoutFooter from '@/pages/Layout/LayoutFooter'
import SideBar from './SideBar'
import { Layout } from 'antd';
import './MyLayout.scss'
const { Header, Footer, Sider, Content } = Layout;

class MyLayout extends Component {
  state = {
    collapsed: false
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Sider className="sider" trigger={null} collapsible collapsed={this.state.collapsed}>
            <SideBar></SideBar>
          </Sider>
          <Layout>
            <Header className="header">
              <LayoutHeader></LayoutHeader>
            </Header>
            <Content className="content">
              <MyRouter></MyRouter>
            </Content>
            <Footer className="footer"><LayoutFooter></LayoutFooter></Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default MyLayout;
