import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const iconsFolder = require.context('Images/Icons', true);

const Card = ({ cardDetails, icon }) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.4,
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
    <motion.div
      ref={ref}
      animate={inView ? 'show' : 'hidden'}
      variants={variants}
      transition={{ duration: 1, ease: 'linear' }}
    >
     
      <CategoryCard>
        <img src={cardDetails.icon} alt="category_icon" />
        <span>
          <h4>{cardDetails.name}</h4>
          <p>{cardDetails.content}</p>
          <a href={cardDetails.url} target='_blank' >Read more</a>
        </span>
      </CategoryCard>
    </motion.div>
  );
};

export default Card;

const CategoryCard = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #000;
  flex-direction: row;
  width: 420px;
  margin: 20px;
  padding: 20px;
  // background: #fff;
  border-radius: 8px;
  transition: transform 0.2s;
  text-decoration: none;
  text-transform: capitalize;
  line-height: 20px;
  // box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 10px;
  img {
    height: 100px;
    width: 100px;
    border-radius: 20px;
    margin: 15px;
  }
  &:hover {
    transform: scale(1.03);
  }
  p {
    text-align: left;
    font-size: 14px;
    margin: 10px 0;
  }
  @media only screen and (max-width: 600px) {
    margin: 10px;
    p {
      font-size: 14px;
      margin: 0 auto;
    }
    img {
      height: 90px;
      width: 65px;
    }
  }
  @media only screen and (max-width: 370px) {
    height: 100px;
    width: 80px;
    margin: 10px;
    line-height: 15px;
    p {
      font-size: 10px;
      margin: 0 auto;
    }
    img {
      height: 70px;
      width: 50px;
    }
  }
`;
