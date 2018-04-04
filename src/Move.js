/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const Move = (props) => {
  return (
    <div className= 'result'>
      {props.children}
    </div>
  );
};

Move.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Move;
