import NavbarOut from "../../components/0Navbar/NavbarOut/NavbarOut"
import React from 'react';
import { Carousel } from 'antd';
import { Card, Col, Row } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = Card;
const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '1750%',
  textAlign: 'center',
  background: 'black',
  // background: '#364d79',

};

export default function LandingPageOut() {
  
  
  return (
    <>
      {/* <h1>Landing Page</h1> */}
      <Carousel autoplay>
        <div>
          <img
            src="../../../public/0LandingpageCarousel/carousel1s.png"
            
            alt="carousel1"
            style={{ width: "100%", height: "100%" }}
          />
          {/* <h3 style={contentStyle}>1</h3> */}
        </div>
        <div>
          <img
            src="../../../public/0LandingpageCarousel/carousel2s.png"
            alt="carousel2"
            style={{ width: "100%", height: "100%" }}
          />
          {/* <h3 style={contentStyle}>2</h3> */}
        </div>
        <div>
          <img
            src="../../../public/0LandingpageCarousel/carousel3s.png"
            alt="carousel3"
            style={{ width: "100%", height: "100%" }}
          />
          {/* <h3 style={contentStyle}>3</h3> */}
        </div>
        <div>
          <img
            src="../../../public/0LandingpageCarousel/carousel4s.png"
            alt="carousel4"
            style={{ width: "100%", height: "100%" }}
          />
          {/* <h3 style={contentStyle}>4</h3> */}
        </div>
      </Carousel>

      <br></br>

      <Row gutter={16}>
        <Col span={8}>
          <Link to="/paintservices">
            <Card
              hoverable
              style={{ width: 400, height: 650 }}
              cover={<img alt="example" src="../../../public/0LandingpageCards/card1.png" />}
            >
              <Meta
                title="Paint-for-hire"
                description="Fast, reliable, affordable"
              />
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/paintclasses">
            <Card
              hoverable
              style={{ width: 400, height: 650 }}
              cover={<img alt="example" src="../../../public/0LandingpageCards/card2.png" />}
            >
              <Meta
                title="Painting classes"
                description="Learn from the best, do it yourself"
              />
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/painttables">
            <Card
              hoverable
              style={{ width: 400, height: 650 }}
              cover={<img alt="example" src="../../../public/0LandingpageCards/card3.png" />}
            >
              <Meta
                title="Table bookings"
                description="A table & paint supplies at your fingertips"
              />
            </Card>
          </Link>
        </Col>
      </Row>

      <br></br>

      {/* <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row> */}
    </>
  );
}
