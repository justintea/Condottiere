import AssemblyforhireForm from "../../components/1ServicesPage/3AssemblyforhireForm/AssemblyforhireForm";
import { Layout, Flex, Carousel, Divider } from "antd";
const { Sider, Content } = Layout;
import { Outlet, useOutletContext } from "react-router-dom";

const contentStyle = {
  textAlign: "center",
  minHeight: 570,
  lineHeight: "120px",
  // color: '#fff',
  // backgroundColor: '#0958d9',
  color: "black",
  backgroundColor: "#eae8f4",
};

const siderStyle = {
  textAlign: "left",
  justifyContent: "top",
  lineHeight: "25px",
  color: "black",
  backgroundColor: "white",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% )",
  maxWidth: "calc(100% )",
};

export default function AssemblyforhirePage({ user, setUser }) {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  useOutletContext();


  return (
    <>

      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          {/* <Header style={headerStyle}>Header</Header> */}
          <Layout>
            <Content style={contentStyle}>
              
              <Carousel afterChange={onChange}>
                <div>
                  {/* <h3 style={carouselcontentStyle}>1</h3> */}
                  <img
                    // src="../../../public/1ServicesPageCarousel/1PaintforhireCarousel/paintsvc1.png"
                    src="/1ServicesPageCarousel/3AssemblyforhireCarousel/assembly1.jpg"

                    alt="assembly1"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <img
                    // src="../../../public/1ServicesPageCarousel/1PaintforhireCarousel/paintsvc2.png"
                    src="/1ServicesPageCarousel/3AssemblyforhireCarousel/assembly2.jpg"

                    alt="assembly2"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
               
              </Carousel>
            </Content>

            <Sider width="40%" style={siderStyle}>
            <Divider orientation="left" style={{margin: "0px" }}> <h2 style={{ fontFamily: 'Palatino Linotype'}}> Assembly Services</h2> </Divider>

              {/* <p style={{siderStyle}}> */}
              <p style={{ margin: "0% 0% 10% 7%", padding: "0" }}>
              Want to quickly get models for use on the tabletop? Or do you want paint models, but not waste time with fixing, glueing, and cleaning up your sprues? Either way, we've got your back, with our assembly-for-hire service.  Prices per model depend on needs similiar to Paint-for-Hire, and also if your priming requirements. See FAQs for more details. 
              </p>

              <AssemblyforhireForm user={user} setUser={setUser} />

            </Sider>
          </Layout>
          {/* <Footer style={footerStyle}>Footer</Footer> */}
        </Layout>
      </Flex>
    </>
  );
}


//? save pt. the Ant D section split 
// import NavbarOut from "../../components/0Navbar/NavbarOut/NavbarOut"
// import { Layout, Flex } from 'antd';
// const { Header, Footer, Sider, Content } = Layout;

// const headerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   height: 64,
//   paddingInline: 48,
//   lineHeight: '64px',
//   backgroundColor: '#4096ff',
// };
// const contentStyle = {
//   textAlign: 'center',
//   minHeight: 120,
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#0958d9',
// };
// const siderStyle = {
//   textAlign: 'center',
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#1677ff',
// };
// const footerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   backgroundColor: '#4096ff',
// };
// const layoutStyle = {
//   borderRadius: 8,
//   overflow: 'hidden',
//   width: 'calc(50% - 8px)',
//   maxWidth: 'calc(50% - 8px)',
// };

// export default function PaintforhirePage() {

//   return (
//   <>
//    <Flex gap="middle" wrap="wrap">
//    <Layout style={layoutStyle}>
//       <Header style={headerStyle}>Header</Header>
//       <Layout>
//         <Content style={contentStyle}>Table booking</Content>
//         <Sider width="25%" style={siderStyle}>
//           Sider
//         </Sider>
//       </Layout>
//       <Footer style={footerStyle}>Footer</Footer>
//     </Layout>

//     </Flex>

//   </>);
// }