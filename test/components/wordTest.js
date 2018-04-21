import React from 'react';
import {shallow} from 'enzyme';

import Word from '../../src/components/Hangman/Word';

describe('Word', () => {
  it('renders', () => {
    expect(shallow(
      <Word wordView='_____' />
    )).to.exist;
  });
  it('renders contained element', () => {
    expect(shallow(
        <Word wordView='___r__' />
    )).to.include.text('___r__');
  });
});
