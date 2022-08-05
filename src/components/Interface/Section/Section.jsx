import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({ title, children }) => {
  return (
    <SectionMy>
      <TitleMy>{title}</TitleMy>
      {children}
    </SectionMy>
  );
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};

const SectionMy = styled.section``;
const TitleMy = styled.h3``;

export default Section;
