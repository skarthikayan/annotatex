import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from 'Images/logo.png';
import bg from 'Images/background.svg';
import OurServices from './OurServices';
import ContactUs from './ContactUs';
import about_us from 'Images/about_us.png';
import banner from 'Images/data-annotation-banner.png';
import linkedin from 'Images/linkedin.png';
import twiter from 'Images/twitter.png';
import fb from 'Images/facebook.png';
import { ContentWrapper } from 'Components/styles';
import Particles from 'react-particles-js';

function Home(props) {
  const scrollToRef = (ref) => {
    ref.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  };

  const executeScroll = (r) => {
    const section = document.getElementById(r);
    scrollToRef(section);
  };
  return (
    <motion.div
      style={{
        width: '100%',
        backgroundImage: `#fafafa`,
        backgroundSize: 'initial',
        backgroundRepeat: 'repeat',
        overflow: 'auto',
      }}
    >
      <Header
        height="12vh"
        padding="0 20px"
        alignItems="center"
        justifyContent="space-between"
      >
        <img src={logo} alt="logo" className="logo" />
        <Navbar>
          <span className="home">Home</span>
          <span onClick={() => executeScroll('ourServices')}>Our Services</span>
          <span onClick={() => executeScroll('contactUs')}>Contact us</span>
        </Navbar>
        <Social>
          {/* <img src={twiter} alt="logo" className="social" />
          <img src={fb} alt="logo" className="social" />
          <img src={linkedin} alt="logo" className="social" /> */}
        </Social>
      </Header>
      <Banner bg={bg}>
        <Particles />
        <MessageContainer
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Annotation Services for AI</h2>
        </MessageContainer>
        {/* <div style={{background: '#fff', borderRadius: '12px', padding: '20px', minWidth: '400px'}}> */}
        <motion.img
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          src={banner}
          alt="about_us"
          height="350px"
          width="350px"
        />
        {/* </div> */}
      </Banner>
      <ContentWrapper bg="#FAFAFA" flexDirection="row">
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          src={about_us}
          alt="about_us"
          height="320px"
          width="530px"
        />
        <AboutUs
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 style={{ color: '#3894ff' }}>About Us</h2>
          <p>
            We are a team of trained annotators who provide high quality data
            annotation services for AI applications. We work with individuals,
            research labs and companies for their annotation needs.
          </p>
        </AboutUs>
      </ContentWrapper>
      <OurServices scrollRef={'ourServices'} />
      <ContactUs scrollRef={'contactUs'} />
      <Footer>
        <div className="top">
          <div>
            <h4>CONTACT</h4>
            <p>dataannotate@gmail.com</p>
          </div>
          <div>
            <h4>ADDRESS</h4>
            <p>#10-95, Block 9, Jalan Kukoh, Singapore - 160009</p>
            <p></p>
          </div>
          {/* <div>
            <h4>Find Us</h4>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
          </div> */}
        </div>
        <div className="bottom">
          <p>Copyright © 2020 AnnotateX, Inc. All rights reserved.</p>
        </div>
      </Footer>
    </motion.div>
  );
}

export default Home;

export const Footer = styled(motion.div)`
  background: #4f62ff;
  min-height: 70px;
  text-align: center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  .top {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    width: 100%;
    padding: 10px 0;
    div {
      margin: 0 80px;
      text-align: left;
    }
  }

  .bottom {
  }
`;

export const Social = styled(motion.div)`
  margin: 0 40px;
  min-width: 150px;
  img {
    height: 30px;
    width: 30px;
    margin: 20px 10px;
  }
`;

export const StartButton = styled(motion.div)`
  background: linear-gradient(225deg, #ff8945, #ff22a7);
  padding: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 8px;
  margin: 5px;
  color: #fff;
  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
    padding: 10px;
  }
`;

export const Banner = styled(motion.div)`
  // background-image: url(${bg});
  // background: #5614B0;  /* fallback for old browsers */
  // background: -webkit-linear-gradient(to right, #DBD65C, #5614B0);  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to right, #DBD65C, #5614B0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  // background-color: #ffffff;
  background-image: linear-gradient(to right, #5433ff, #20bdff, #a5fecb), url("https://www.transparenttextures.com/patterns/60-lines.png");
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  padding: 80px 30px;
  position: relative;
  #tsparticles {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
  min-height: 300px;
  @media only screen and (max-width: 600px) {
    align-items: center;
    justify-content: flex-start;
  }
`;

export const Navbar = styled(motion.div)`
  margin-left: 30px;
  .home {
    color: #3894ff;
  }
  span {
    margin: 0 10px;
    padding: 10px;
    color: #431461;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      color: #3894ff;
    }
  }
  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
    padding: 10px;
  }
`;

const MessageContainer = styled(motion.div)`
  align-items: flex-start;
  justify-content: center;
  display: flex;
  width: fit-content;
  max-width: 700px;
  color: #fff;
  flex-direction: column;
  margin: 0px 80px 30px;
  text-align: center;
  p {
    font-size: 18px;
    line-height: 190%;
  }
  h2 {
    font-weight: bold;
    font-size: 36px;
    line-height: 52px;
    margin: 0px;
  }
  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
    margin: 30px 0;
    p {
      font-size: 18px;
    }
    h2 {
      font-size: 27px;
    }
  }
`;

export const Header = styled.div`
  height: ${(p) => p.height};
  background: transparent;
  overflow: hidden;
  text-align: left;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  width: ${(p) => p.width || '100%'};
  align-items: center;
  justify-content: space-between;
  .logo {
    height: 70px;
    width: 200px;
    margin: 15px 30px;
  }
  @media only screen and (max-width: 600px) {
    .logo {
      height: 60px;
      width: 120px;
      margin: 15px 30px;
    }
  }
`;

const AboutUs = styled(motion.div)`
  align-items: flex-start;
  justify-content: center;
  display: flex;
  width: fit-content;
  max-width: 700px;
  color: #000;
  flex-direction: column;
  margin: 30px;
  text-align: left;
  p {
    font-size: 18px;
    line-height: 190%;
  }
  h2 {
    font-weight: bold;
    font-size: 30px;
    line-height: 52px;
    margin: 0px;
  }
  @media only screen and (max-width: 600px) {
    width: fit-content;
    align-items: flex-start;
    justify-content: flex-start;
    p {
      font-size: 14px;
      line-height: 190%;
    }
    h2 {
      font-weight: bold;
      font-size: 25px;
      line-height: 24px;
      margin: 0px;
    }
  }
  @media only screen and (max-width: 370px) {
    p {
      font-size: 12px;
      line-height: 160%;
    }
    h2 {
      font-size: 20px;
      line-height: 20px;
    }
  }
`;
