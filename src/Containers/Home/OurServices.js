import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ContentWrapper } from 'Components/styles';
import Product from 'Components/ProductCard';
import video from 'Images/BoundingBoxes.mp4';
import { useInView } from 'react-intersection-observer';
import assistance from 'Images/assistance.png';
import scalable from 'Images/scalable.png';
import quality from 'Images/quality.png';
import price from 'Images/price.png';
import paul from 'Images/paul.png';
import jonathon from 'Images/jonathon.png';
import box from 'Images/boundingBox.gif';
import poly from 'Images/image-segmentation.gif';
import Card from 'Components/Card';

const Section2 = ({ title, to }) => {
  const products = ['Bounding Box', 'Polygon'];
  const [active, setActive] = useState(0);
  const [demoRef, inViewDemo] = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: false,
  });
  const [researchRef, inViewResearch] = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: false,
  });
  const [companyRef, inViewCompay] = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: false,
  });
  const [adviceRef, inViewAdvice] = useInView({
    /* Optional options */
    threshold: 0.3,
    triggerOnce: false,
  });

  const variants = {
    show: { opacity: 1, x: 0 },
    hidden: {
      opacity: 0,
      x: 25,
    },
  };
  return (
    <ContentWrapper
      id="ourServices"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: 'linear-gradient(to right, #ece9e6, #ffffff)',
      }}
    >
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 style={{ color: '#3894ff', fontSize: '30px' }}>
          Data Annotation Service{' '}
        </h2>
        <Wrapper
          ref={demoRef}
          animate={inViewDemo ? 'show' : 'hidden'}
          variants={variants}
          transition={{ duration: 1, ease: 'linear' }}
        >
          {/* <CardContainer>
            {products.map((c, i) => (
              <Product
                setActive={() => setActive(i)}
                active={i === active}
                cardDetails={c}
                key={c.name}
              />
            ))}
          </CardContainer> */}
          <CardContainer>
            {/* <Product
                setActive={() => setActive(0)}
                active={true}
                cardDetails='Bounding Box'
                key='Bounding Box'
              /> */}
            {/* <video height="200px" width="350px" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <h3>Bounding Box</h3>
            <img
              className="example"
              src={box}
              style={{ margin: '0px 40px 20px' }}
            />
          </CardContainer>
          <CardContainer>
            {/* <Product
                setActive={() => setActive(1)}
                active={true}
                cardDetails='Polygon'
                key='Polygon'
              /> */}
            <h3>Image Segmentation</h3>
            <img
              className="example"
              src={poly}
              style={{ margin: '0px 40px 20px' }}
            />
            {/* <video height="200px" width="350px" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </CardContainer>
        </Wrapper>

        <Wrapper
          ref={researchRef}
          animate={inViewResearch ? 'show' : 'hidden'}
          variants={variants}
          transition={{ duration: 1, ease: 'linear' }}
        >
          <div style={{ flex: 1, padding: '15px' }}>
            <h3>For researchers</h3>
            <h4 style={{color: '#1E4A9A'}}>Virtual assistance</h4>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <img
                src={assistance}
                height="100px"
                width="100px"
                alt="assistant"
                style={{ margin: '15px' }}
              />
              <p>
                Delegate your tedious tasks to us so you can focus more time on
                your core research tasks.
              </p>
            </div>
          </div>
          <div style={{ flex: 1, padding: '15px' }}>
            <h3>For companies</h3>
            <h4 style={{color: '#1E4A9A'}}>Extension of workforce</h4>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <img
                src={assistance}
                height="100px"
                width="100px"
                alt="assistant"
                style={{ margin: '15px' }}
              />
              <p>
                Even if you are using your own data labelling tool and would
                like to have some additional manpower, delegate the work to us.
              </p>
            </div>
          </div>
        </Wrapper>
        <h2 style={{ color: '#3894ff', fontSize: '30px' }}>Why Us?</h2>
        <Wrapper
          ref={companyRef}
          animate={inViewCompay ? 'show' : 'hidden'}
          variants={variants}
          transition={{ duration: 1, ease: 'linear' }}
          flexDirection="column"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '60%',
            }}
          >
            <img
              src={scalable}
              height="80px"
              width="80px"
              alt="assistant"
              style={{ margin: '20px' }}
            />
            <div>
            <h3 style={{color: '#1E4A9A'}}>Scalability</h3>
            <p>
              Based on your project requirements, we can extend the workforce
              easily even for one-off projects.
            </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '60%',
            }}
          >
            <img
              src={quality}
              height="80px"
              width="80px"
              alt="assistant"
              style={{ margin: '20px' }}
            />
            <div>
            <h3 style={{color: '#1E4A9A'}}>Quality assurance</h3>
            <p>
              We do robust quality control checks to deliver high quality
              labelled data.
            </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '60%',
            }}
          >
            <img
              src={price}
              height="80px"
              width="80px"
              alt="assistant"
              style={{ margin: '20px' }}
            />
            <div>
            <h3 style={{color: '#1E4A9A'}}>Competitive pricing</h3>
            <p>
              We are able to provide good quality data at affordable prices.
            </p>
            </div>
          </div>
        </Wrapper>
        <h2 style={{ color: '#3894ff', fontSize: '30px', margin: '40px 0' }}>Our Advisors</h2>
        <div style={{ display: 'flex' }}>
          <Card
            cardDetails={{
              icon: paul,
              name: 'Paul voigtlaender',
              content: 'Computer Vision, RWTH Aachen',
              url: 'https://www.vision.rwth-aachen.de/person/197/',
            }}
          />
          <Card
            cardDetails={{
              icon: jonathon,
              name: 'Jonathon Luiten',
              content: 'Computer Vision, RWTH Aachen',
              url: 'https://www.vision.rwth-aachen.de/person/216/',
            }}
          />
        </div>
      </motion.div>
    </ContentWrapper>
  );
};

export default memo(Section2);

const Wrapper = styled(motion.div)`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: ${(p) => p.flexDirection || 'row'};
  width: 90%;
  border-radius: 8px;
  // box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 10px;
  margin: 20px 0;
  padding: 0 40px;
  min-height: 350px;
  max-height: 500px;
  &:hover {
    transform: scale(1.2, 1.2);
  }
  h3 {
    color: #3894ff;
    font-size: 24px;
  }
  p {
    font-size: 18px;
    line-height: 190%;
  }

  .example {
    height: 320px;
    width: 530px;
  }
  .research {
    width: 330px;
  }
`;

const Profile = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  img {
    height: 100px;
    width: 100px;
    border-radius: 20px;
  }
`;

const CardContainer = styled(motion.div)`
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  min-width: 320px;
  margin: 15px 0;
  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 60%;
    & a:nth-child(odd) {
      position: relative;
      top: -60px;
    }
  }
`;
