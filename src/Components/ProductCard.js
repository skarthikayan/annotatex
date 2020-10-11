import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = ({ cardDetails, active, setActive }) => {
  console.log(active);
  return (
    <ProductCard
      onClick={setActive}
      color={active ? 'linear-gradient(225deg, #C0E5FF, #65A2FF)' : '#F1F1F1'}
      active={active}
    >
      <p>{cardDetails}</p>
    </ProductCard>
  );
};

export default Card;

const ProductCard = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  margin: 10px 15px 20px 0;
  padding: 5px 15px;
  background: ${(p) => p.color};
  background-size: cover;
  border-radius: 20px;
  transition: transform 0.2s;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 10px;
  text-decoration: none;
  text-transform: capitalize;
  line-height: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
  p {
    text-align: center;
    font-weight: 400;
    font-size: 12px !important;
    line-height: 24px;
    color: #1d1d1f;
    margin: 0;
  }
`;
