import React from 'react';
import PropTypes from 'prop-types';

export const ComponentA = ({
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <p>Component A</p>
  );
};

ComponentA.propTypes = {
  isVisible: PropTypes.bool,
};

ComponentA.defaultProps = {
  isVisible: false,
};

export default ComponentA;
