/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { Button, Layout, Menu } from 'antd';
import './GlobalLayout.less';
import images from '../theme/images';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'dva/router';

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
      state = {};

      componentDidMount = () => {};

      render() {
        const { children } = this.props;
        return (
          <Layout className="global-layout">
            <Header>
              <Menu mode="horizontal">
                <Menu.Item key="logo">
                  <div className="logoBlock">
                    <img src={images.logo} className="logo"></img>
                    <Link to="/">
                      <h3 className="title">Baby Journal</h3>
                    </Link>
                  </div>
                </Menu.Item>
                <Menu.Item key="babyList">
                  <Link to="/babyList">
                    <h4 className="navbarText">寶寶列表</h4>
                  </Link>
                </Menu.Item>
                <Menu.Item key="functionList">
                  <h4 className="navbarText">功能列表</h4>
                </Menu.Item>
                <Menu.Item key="contactBook">
                  <h4 className="navbarText">聯絡簿</h4>
                </Menu.Item>
                <Menu.Item key="noviceTeaching">
                  <Link to="/instruction">
                    <h4 className="navbarText">新手教學</h4>
                  </Link>
                </Menu.Item>
                <Menu.Item key="contactUs">
                  <h4 className="navbarText">聯繫我們</h4>
                </Menu.Item>
                <Menu.Item key="commonProblem">
                  <h4 className="navbarText">常見問題</h4>
                </Menu.Item>
                <Menu.Item key="userIcon">
                  <h4 className="navbarText">
                    <Link to="/edit">
                      <UserOutlined style={{ fontSize: '1.25rem' }} />
                    </Link>
                  </h4>
                </Menu.Item>
                <Menu.Item key="commonProblem">
                  <Link to="/login">
                    <Button type="primary">登入</Button>
                  </Link>
                </Menu.Item>
              </Menu>
            </Header>
            {children}
            <Footer>
              <div>
                <h4 className="footerText">@BABY團隊版權所有</h4>
              </div>
            </Footer>
          </Layout>
        );
      }
    },
  ),
);
