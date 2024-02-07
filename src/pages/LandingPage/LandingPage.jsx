import NavbarOut from "../../components/Navbar/NavbarOut/NavbarOut"
import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '1750%',
  textAlign: 'center',
  background: '#364d79',
};

export default function LandingPage() {
  return (
    <>
      <NavbarOut />
      {/* <h1>Landing Page</h1> */}
      <Carousel autoplay>
    <div>
          <img src="../../../screenshots/carousel1.jpg" alt="carousel1" style={contentStyle} />
          {/* <h3 style={contentStyle}>1</h3> */}
    </div>
        <div>
          <img src="../../../screenshots/carousel2.jpg" alt="carousel2" style={contentStyle} />
      {/* <h3 style={contentStyle}>2</h3> */}
    </div>
        <div>
        <img src="../../../screenshots/carousel3.jpg" alt="carousel3" style={contentStyle} />
      {/* <h3 style={contentStyle}>3</h3> */}
    </div>
        <div>
        <img src="../../../screenshots/carousel4.jpg" alt="carousel4" style={contentStyle} />
      {/* <h3 style={contentStyle}>4</h3> */}
    </div>
  </Carousel>
      
    </>
  )
}

