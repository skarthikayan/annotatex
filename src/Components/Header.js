import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import back from 'Images/left-arrow.svg';
import styled from 'styled-components';

const Modal = ({ title, to }) => {
  return (
    <Header
      height="50px"
      padding="0 20px"
      alignItems="center"
      justifyContent="flex-left"
      width="95%"
    >
      <Link to={to}>
        <img
          src={back}
          alt="back"
          height="13px"
          width="20px"
          style={{ margin: '5px 0 0 20px' }}
        />
      </Link>
      <AnimatePresence exitBeforeEnter>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          style={{ margin: '0 0 0 15px' }}
          key={title}
        >
          {title}
        </motion.p>
      </AnimatePresence>
    </Header>
  );
};

export default memo(Modal);

export const Header = styled.div`
  height: ${(p) => p.height};
  background: #fafafa;
  font-size: 16px;
  line-height: 24px;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  width: ${(p) => p.width || '100%'};
  align-items: ${(p) => p.alignItems}
  justify-content: ${(p) => p.justifyContent}
  z-index: 11;
  position: fixed;
  top: 5px;
  left: 0px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  @media only screen and (max-width: 600px) {
    top: 5px;
    left: 0px;
  }
`;