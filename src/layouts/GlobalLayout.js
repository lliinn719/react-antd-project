import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { Layout, Menu } from 'antd';
import './GlobalLayout.less';
import images from '../theme/images';
import { HomeOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    goToRoute(path, callback) {
      dispatch({ type: 'global/goToRoute', path, callback });
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    class GlobalLayout extends Component {
      state = {
        current: 'mail',
      };

      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };

      componentDidMount = () => {};

      render() {
        const { children } = this.props;
        const { current } = this.state;
        return (
          <Layout>
            <Header>
              <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="mail" icon={<HomeOutlined />}>
                  首頁
                </Menu.Item>
                <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                  關於我們
                </Menu.Item>
                <SubMenu
                  key="SubMenu"
                  icon={<SettingOutlined />}
                  title="Navigation Three - Submenu"
                >
                  <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                  <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                  </a>
                </Menu.Item>
              </Menu>
            </Header>
            <Content>{children}</Content>
            <Footer></Footer>
          </Layout>
        );
      }
    },
  ),
);
