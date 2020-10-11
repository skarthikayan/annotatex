import styled from 'styled-components';
import colors from 'Constants/colors';
import { motion } from 'framer-motion';

export const Header = styled.div`
  height: ${(p) => p.height};
  background: linear-gradient(${colors.header}, ${colors.background});
  overflow: hidden;
  text-align: left;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  width: ${(p) => p.width || '100%'};
  align-items: ${(p) => p.alignItems}
  justify-content: ${(p) => p.justifyContent}
`;

export const ContentWrapper = styled(motion.div)`
  background: ${p => p.bg || 'transparent'};
  flex-direction: ${p => p.flexDirection || 'column'}
  align-items: ${p => p.alignItems || 'center'}
  justify-content: ${p => p.justifyContent || 'center'}
  display: flex;
  padding: 80px 30px;
  @media only screen and (max-width: 600px) {
    align-items: center;
    justify-content:  flex-start;  
  }
`;

export const CardContainer = styled.div`
  align-items: center;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    a {
      width: calc(100% - 55px);
    }
  }
`;

export const Content = styled(motion.div)`
  display: flex;
  margin: 0;
  padding: 60px 20px;
  overflow: auto;
  width: 100%;
  flex-direction: column;
  p {
    margin: 0;
  }
  h4 {
    text-transform: capitalize;
    margin: 10px 0;
  }
`;
