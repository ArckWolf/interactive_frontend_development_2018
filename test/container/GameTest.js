import React from 'react';
import {shallow} from 'enzyme';

import Word from '../../src/components/Hangman/Word';
import Move from '../../src/components/RPS/Move';

import HangingMan from '../../src/components/Hangman/HangingMan';
import InputChangesOnChange from '../../src/components/Inputs/InputChangesOnChange';
import InputChangesOnSubmit from '../../src/components/Inputs/InputChangesOnSubmit';

import RPSGameContainer from '../../src/containers/RPS/Game';
import HangmanGameContainer from '../../src/containers/Hangman/Game';

import Hangman from '../../src/games/Hangman';
import RPS from '../../src/games/RPS';

describe('Game Hangman', () => {
  it('renders', () => {
    expect(shallow(
        <HangmanGameContainer game={new Hangman} key={0}/>
    )).to.exist;
  });

  it('renders contained image element', () => {
    expect(shallow(
        <HangmanGameContainer game={new Hangman} key={0}/>
    )).to.contain(<HangingMan imageId={0} />);
  });

  it('renders contained InputChangesOnChange element', () => {
    expect(shallow(
        <HangmanGameContainer game={new Hangman} key={0}/>
    )).to.have.exactly(1).descendants(InputChangesOnChange);
  });

  it('renders contained Word element', () => {
    expect(shallow(
        <HangmanGameContainer game={new Hangman} key={0}/>
    )).to.have.exactly(1).descendants(Word);
  });
});

describe('Game RPS', () => {
    it('renders', () => {
      expect(shallow(
          <RPSGameContainer game={new RPS} key={0}/>
      )).to.exist;
    });

    it('renders contained InputChangesOnSubmit element', () => {
      expect(shallow(
        <RPSGameContainer game={new RPS} key={0}/>
      )).to.have.exactly(1).descendants(InputChangesOnSubmit);
    });

    it('renders does not contained Move element', () => {
      expect(shallow(
        <RPSGameContainer game={new RPS} key={0}/>
      )).to.have.exactly(0).descendants(Move);
    });
  });
