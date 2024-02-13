import PaintforhireForm from "../../components/1ServicesPage/1PaintforhireForm/PaintforhireForm";
import { Layout, Flex, Carousel, Divider } from "antd";
const { Sider, Content } = Layout;
import { Outlet, useOutletContext } from "react-router-dom";
import MasterclassForm from "../../components/1ServicesPage/2MasterclassForm/MasterclassForm";

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

export default function MasterclassPage({ user, setUser }) {
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
                    src="/1ServicesPageCarousel/2MasterclassCarousel/masterclass1.png"

                    alt="masterclass1"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <img
                    // src="../../../public/1ServicesPageCarousel/1PaintforhireCarousel/paintsvc2.png"
                    src="/1ServicesPageCarousel/2MasterclassCarousel/masterclass2.jpeg"

                    alt="masterclass2"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <img
                    // src="../../../public/1ServicesPageCarousel/1PaintforhireCarousel/paintsvc3.png"
                    src="/1ServicesPageCarousel/2MasterclassCarousel/masterclass3.jpeg"

                    alt="masterclass3"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <img
                    // src="../../../public/1ServicesPageCarousel/1PaintforhireCarousel/paintsvc3.png"
                    src="/1ServicesPageCarousel/2MasterclassCarousel/masterclass4.jpg"

                    alt="masterclass4"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </Carousel>
            </Content>

            <Sider width="40%" style={siderStyle}>
            <Divider orientation="left" style={{margin: "0px" }}> <h2 style={{ fontFamily: 'Palatino Linotype'}}> Masterclasses </h2> </Divider>

              {/* <p style={{siderStyle}}> */}
              <p style={{ margin: "0% 0% 10% 7%", padding: "0" }}>
              New to painting and the hobby aspect of tabletop gaming? Or progress to the next level and bring to the table awe-creating models? Either way, we've got your back, with our Masterclasses packages. Our painter-tutors are amongst the best in the community. <br /><br /> Choose from 4 packages that vary in coverage and duration. See FAQs for more details. <br></br>
              </p>

              <MasterclassForm user={user} setUser={setUser} />

            </Sider>
          </Layout>
          {/* <Footer style={footerStyle}>Footer</Footer> */}
        </Layout>
      </Flex>
    </>
  );
}
