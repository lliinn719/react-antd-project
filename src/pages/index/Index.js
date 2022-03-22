/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
import './Index.less';
import { Layout, Row, Col } from 'antd';
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
        <Layout>
          <div>
            <Row className="banner">
              <Col xs={{ span: 24 }} sm={{ span: 12 }} className="bannerText">
                <span className="text">
                  <p className="bannerTitle">嬰為有你</p>
                  <p className="highlight">寶寶の日常生活</p>
                  <p className="solgan">紀錄每一刻，聯繫不間斷</p>
                </span>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                <img src={images.loginBanner} className="bannerImg"></img>
              </Col>
            </Row>
            <Row className="main">
              <Col xs={{ span: 24 }} sm={{ span: 8, push: 4 }}>
                <img src={images.poopRecognition} className="poopRecognition"></img>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 8, push: 4 }} className="mainText">
                <h3>
                  隨著新生兒的誕生,而我們想減少新手爸媽會遇到的一些問題,
                  我們系統結合了糞便的影像辨識，透過分析結果,可以提供資訊給新手爸媽參考。
                </h3>
              </Col>
            </Row>
            <span className="teamTitle">
              <p>團隊介紹</p>
            </span>
            <Row>
              <Col xs={{ span: 24 }} sm={{ span: 8, push: 4 }}>
                <img src={images.lliinn}></img>
                <h2 className="teamMember">林亭妤</h2>
                <h3 className="teamMember">撰寫前端畫面</h3>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 8, push: 4 }}>
                <img src={images.chiao}></img>
                <h2 className="teamMember">張邑巧</h2>
                <h3 className="teamMember">撰寫前端畫面</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 24 }} sm={{ span: 8, push: 4 }}>
                <img src={images.dd}></img>
                <h2 className="teamMember">林恩碩</h2>
                <h3 className="teamMember">撰寫後端邏輯</h3>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 8, push: 4 }}>
                <img src={images.teng}></img>
                <h2 className="teamMember">鄧至淇</h2>
                <h3 className="teamMember">撰寫後端邏輯</h3>
              </Col>
            </Row>
          </div>
        </Layout>
      );
    }
  },
);
