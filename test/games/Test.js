import React from 'react';
import {shallow} from 'enzyme';

import Word from '../../src/components/Hangman/Word';
import HangingMan from '../../src/components/Hangman/HangingMan';

describe('Word', () => {
  it('renders', () => {
    expect(shallow(
      <Word wordView='text' />
    )).to.exist;
  });
  it('renders contained element', () => {
    expect(shallow(
        <Word wordView='text' />
    )).to.include.text('text');
  });
});

describe('HangingMan', () => {
    it('renders', () => {
      expect(shallow(
        <HangingMan imageId='0' />
      )).to.exist;
    });
    it('renders contained element', () => {
      const imageId = 0;
      expect(shallow(
          <HangingMan imageId={imageId} />
      ).find('img')).to.have.attr('src', 'img/Hangman-0.png');
    });
});
