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
          <img src="../../../screenshots/carousel1s.png" alt="carousel1" style={{width: '100%', height: '100%'}} />
          {/* <h3 style={contentStyle}>1</h3> */}
    </div>
        <div>
          <img src="../../../screenshots/carousel2s.png" alt="carousel2" style={{width: '100%', height: '100%'}} />
      {/* <h3 style={contentStyle}>2</h3> */}
    </div>
        <div>
        <img src="../../../screenshots/carousel3s.png" alt="carousel3" style={{width: '100%', height: '100%'}} />
      {/* <h3 style={contentStyle}>3</h3> */}
    </div>
        <div>
        <img src="../../../screenshots/carousel4s.png" alt="carousel4" style={{width: '100%', height: '100%'}} />
      {/* <h3 style={contentStyle}>4</h3> */}
    </div>
  </Carousel>
      
    </>
  )
}

