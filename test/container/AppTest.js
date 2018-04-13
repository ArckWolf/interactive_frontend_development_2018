import React from 'react';
import {shallow} from 'enzyme';

import App from '../../src/containers/App';
import InputGame from '../../src/components/Inputs/InputGame';
import GameList from '../../src/components/GameList';

import RPS from '../../src/games/RPS';
import Hangman from '../../src/games/Hangman';

describe('App', () => {
  it('initially renders empty GameList', () => {
    expect(
      shallow(<App />)
    ).to.contain(
      <GameList allGames={[]} />
    );
  });

  it('renders InputGame', () => {
    expect(
      shallow(<App />)
    ).to.contain.descendants(
      InputGame
    );
  });

  it('adds new game to GameList when submitted from InputGame', () => {
    const app = shallow(<App />);
    const rps = new RPS();
    const hangman = new Hangman();

    app.find(InputGame).find('[text="Create RPS game"]').props().onSubmit({type: 'RPS', play: rps, id: 1});
    app.find(InputGame).find('[text="Create Hangman game"]').props().onSubmit({type: 'Hangman', play: hangman, id: 2});
    app.update();

    expect(app).to.contain(
      <GameList allGames={[
        {type: 'RPS', play: rps, id: 1},
        {type: 'Hangman', play: hangman, id: 2}
      ]} />
    );
  });
});
