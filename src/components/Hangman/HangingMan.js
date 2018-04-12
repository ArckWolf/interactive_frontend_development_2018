import React from 'react';
import PropTypes from 'prop-types';

const HangingMan = ({imageId}) => {
    const link = 'img/Hangman-' + imageId + '.png';
    const hangingMan =
      <img
        src={link}
      />;


    return (
        <div className='hangingMan'>
        {hangingMan}
        </div>
    );
  };

  HangingMan.propTypes = {
    imageId: PropTypes.number.isRequired
  };

  export default HangingMan;
