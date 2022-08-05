import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.p``;

const Notification = ({ message }) => {
  return <Text>{message}</Text>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
