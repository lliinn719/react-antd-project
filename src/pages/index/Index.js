/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
import './Index.less';
import { Row, Col } from 'antd';
import images from '../../theme/images';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class Index extends Component {
    render() {
      return (
        <div>
          <Row>
            <Col>123</Col>
          </Row>
        </div>
      );
    }
  },
);
