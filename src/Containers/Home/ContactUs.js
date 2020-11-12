import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ContentWrapper } from 'Components/styles';
import contactus from 'Images/contactus.png';
import { useInView } from 'react-intersection-observer';

const Section3 = ({ title, to }) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: false,
  });
  const variants = {
    show: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: 25,
    },
  };
  return (
    <ContentWrapper
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      bg="#f1f1f1"
      id="contactUs"
    >
      <motion.div
        ref={ref}
        animate={inView ? 'show' : 'hidden'}
        variants={variants}
        transition={{ duration: 1, ease: 'linear' }}
      >
        {/* <MessageContainer
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Contact Us</h2>
          <p>
            If you need help to label or annotate training data for your AI/ML
            Models, our experts would be happy to customize a plan that meets
            your requirements.
          </p>
        </MessageContainer> */}
        <CardContainer>
        <img src={contactus} alt="contactus" style={{margin: '20px'}}/>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScyi8hCXV_D1tR-RmlIYaWclfNCsT_x5m727m8IZQZmIzsVQA/viewform?embedded=true"
            width="600px"
            style={{height: '140vh'}}
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
          {/* <form className="form">
            <div>
              <lable>First Name *</lable>
              <input />
            </div>
            <div>
              <lable>Last Name *</lable>
              <input />
            </div>
            <div>
              <lable>Mobile</lable>
              <input />
            </div>
            <div>
              <lable>Email *</lable>
              <input />
            </div>
            <div>
              <lable>Brief Description of task *</lable>
              <textarea />
            </div>
            <div class="g-recaptcha" data-sitekey="your_site_key"></div>
            <button>SUBMIT</button>
          </form> */}
          
        </CardContainer>
      </motion.div>
    </ContentWrapper>
  );
};

export default memo(Section3);

const MessageContainer = styled(motion.div)`
  align-items: center;
  justify-content: center;
  display: flex;
  width: fit-content;
  max-width: 700px;
  color: #000;
  flex-direction: column;
  margin: 30px;
  text-align: center;
  p {
    font-size: 18px;
    line-height: 190%;
  }
  h2 {
    font-weight: bold;
    font-size: 35px;
    line-height: 52px;
    margin: 0px;
    color: #3894ff;
  }
`;

const CardContainer = styled(motion.div)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  width: 100%
  margin: 0px;
  // .form  {
  //     width: 50%;
  //     text-align: left;
  //     div {
  //         width: 80%;
  //         margin: 10px;
  //         display: flex;
  //         flex-direction: column;
  //     }
  //     lable {
  //         font-size: 10px;
  //         float: left;
  //     }
  //     input {
  //         padding: 10px;
  //         width: 100%;
  //         border-radius: 8px;
  //         border: 1px solid #ccc;
  //         max-width: 400px;
  //     }
  //     button {
  //         padding: 10px 20px;
  //         margin: 10px;
  //         text-align: center;
  //         background-color: #ff7a59;
  //         border-color: #ff7a59;
  //         color: #fff;
  //         border-radius: 8px;
  //         border: 1px solid #ff7a59;
  //         text-align: center;
      
  //     }
  // }
  img {
      width: 400px;
      height: 220px;
  }
  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 60%;
    & a:nth-child(odd) {
      position: relative;
      top: -60px;
    }
  }
`;
