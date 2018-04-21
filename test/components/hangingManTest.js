import React from 'react';
import {shallow} from 'enzyme';

import HangingMan from '../../src/components/Hangman/HangingMan';

describe('HangingMan', () => {
    it('renders', () => {
      expect(shallow(
        <HangingMan imageId={0} />
      )).to.exist;
    });
    it('renders contained element', () => {
      expect(shallow(
          <HangingMan imageId={0} />
      ).find('img')).to.have.attr('src', 'img/Hangman-0.png');
    });
});
