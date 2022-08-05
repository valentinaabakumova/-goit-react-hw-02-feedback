import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.p`
  margin-right: 20px;
`;

const TextBold = styled.p`
  font-weight: bold;
  margin-right: 20px;
`;

const List = styled.p`
  display: flex;
`;

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <List>
        <li>
          <Text>good: {good}</Text>
        </li>
        <li>
          <Text>neutral: {neutral}</Text>
        </li>
        <li>
          <Text>bad: {bad}</Text>
        </li>
      </List>
      <TextBold>total: {total}</TextBold>
      <TextBold>positive feedback: {positivePercentage}%</TextBold>
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
