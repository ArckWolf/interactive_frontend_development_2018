import React from 'react';
import PropTypes from 'prop-types';

const Word = ({wordView}) => {
    return (
        <div className='wordView'>
            {wordView}
        </div>
    );
  };

  Word.propTypes = {
    wordView: PropTypes.string.isRequired
  };

  export default Word;
