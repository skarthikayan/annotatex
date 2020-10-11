import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import queryString from 'query-string';

const Card = ({ cardDetails, icon, match, location }) => {
  const { info } = queryString.parse(location.search);
  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <Link
      to={{
        pathname: `${match.url}/group/${cardDetails.id}`,
        search: `?info=${info}`,
      }}
      style={{ textDecoration: 'none' }}
    >
      <GroupCard variants={item} color={cardDetails.color}>
        <p>{cardDetails.name}</p>
      </GroupCard>
    </Link>
  );
};

export default Card;

const GroupCard = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  margin: 20px 20px 20px 0;
  padding: 15px;
  background-image: linear-gradient(${(p) => p.color});
  background-size: cover;
  border-radius: 8px;
  transition: transform 0.2s;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 10px;
  text-decoration: none;
  text-transform: capitalize;
  line-height: 20px;
  &:hover {
    transform: scale(1.03);
  }
  p {
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1d1d1f;
    margin: 0;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 10px;
    p {
      font-size: 14px;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 370px) {
    margin: 10px;
    line-height: 15px;
    p {
      font-size: 10px;
      margin: 0 auto;
    }
  }
`;
