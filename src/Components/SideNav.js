import React, { memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from 'Constants/colors';

const Modal = ({ children, height, width, top, right }) => {
  return (
    <Container
      top={top}
      right={right}
      height={height}
      width={width}
      initial={{ opacity: 0, x: -30 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0, x: -30 }}
    >
      <Content>{children}</Content>
    </Container>
  );
};

export default memo(Modal);

export const Container = styled(motion.div)`
  background: linear-gradient(90deg, #2B0E42 -87.3%, #401066 442.06%);
  display: flex;
  flex-direction: column;
  width: 65px;
  z-index: 10;
  color: ${colors.sideNavFont}
  padding: 0px;
  position: fixed;
  left: 0;
  height: 100vh;
  @media only screen and (max-width: 600px) {
    width: 55px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: auto 0;
  padding: 0;
  overflow: auto;
  height: 85%;
`;
