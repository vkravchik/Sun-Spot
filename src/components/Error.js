import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (
  <h2>
    {error.toString()}
  </h2>
);

Error.propTypes = {
  error: PropTypes.objectOf(PropTypes.object).isRequired
};

export default Error;
