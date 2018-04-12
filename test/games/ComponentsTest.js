import React from 'react';
import {shallow} from 'enzyme';

import Word from '../../src/components/Hangman/Word';
import HangingMan from '../../src/components/Hangman/HangingMan';

import GameList from '../../src/components/GameList';

import RPSGameComponent from '../../src/components/RPS/Game';
import HangmanGameComponent from '../../src/components/Hangman/Game';

import RPS from '../../src/games/RPS';
import Hangman from '../../src/games/Hangman';

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

describe('GameList', () => {
    it('renders no games', () => {
        expect(shallow(<GameList allGames={[]} />))
          .to.not.contain.descendants(GameList);
      });

    it('renders 2 games RPS and Hangman', () => {
        const rps = new RPS();
        const hangman = new Hangman();
        const allGames = [
            {type: 'RPS', play: rps, id: 1},
            {type: 'Hangman', play: hangman, id: 2}
        ];

        const commentList = shallow(<GameList allGames={allGames} />);

        expect(commentList).to.have.exactly(1).descendants(RPSGameComponent);
        expect(commentList).to.have.exactly(1).descendants(HangmanGameComponent);
        expect(commentList).to.contain(<RPSGameComponent game={rps}/>);
        expect(commentList).to.contain(<HangmanGameComponent game={hangman}/>);
      });
  });
