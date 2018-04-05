/* eslint-env node, mocha */
import Game from '../src/Game';

describe('Game getHistory() test', () => {
    let game;

    beforeEach(() => {
        game = new Game();
        game.state.history=game.state.history.concat(
            {moveAI: 'testMoveAI', moveUser: 'testMoveUser', result: 'testResult', id: 0}
        );
    });

    it('getHistory() 1 element test', () => {
        expect(game.getHistory()).to.eql(game.state.history);
    });

    it('getHistory() 2 elements test', () => {
        game.state.history=game.state.history.concat(
            {moveAI: 'testMoveAI2', moveUser: 'testMoveUser2', result: 'testResult2', id: 1}
        );

        let history = game.getHistory();
        expect(history[0]).to.eql(game.state.history[0]);
        expect(history[1]).to.eql(game.state.history[1]);
    });
});

describe('Game refactorResult() test', () => {
    const game = new Game();

    it('refactorResult("R") test', () => {
        expect(game.refactorResult('R')).to.eql('ROCK');
    });
    it('refactorResul("P") test', () => {
        expect(game.refactorResult('P')).to.eql('PAPER');
    });
    it('refactorResult("S") test', () => {
        expect(game.refactorResult('S')).to.eql('SCISSORS');
    });
});

describe('Game generateMove() test', () => {
    const game = new Game();
    let move;

    it('generateMove() R,P,S test', () => {
        for (let play = 1; play <= 10; play++) {
            move = game.generateMove();
            expect(['R', 'P', 'S']).to.include(move);
        }
    });
});

describe('Game play() test', () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    it('play() first move id=0 test', () => {
        game.play('P');
        expect(game.state.history[0].id).to.eql(0);
    });
    it('play() id increase test', () => {
        for (let play = 0; play <= 10; play++) {
            game.play('P');
            expect(game.state.history[play].id).to.eql(play);
        }
    });
    it('play("P") result test (10 games)', () => {
        for (let play = 0; play <= 10; play++) {
            game.play('P');
            if (game.state.history[play].moveUser==game.state.history[play].moveAI) {
                expect(game.state.history[play].result).to.eql('tied');
            }
            if (game.state.history[play].moveAI=='ROCK') {
                expect(game.state.history[play].result).to.eql('won');
            }
            if (game.state.history[play].moveAI=='SCISSORS') {
                expect(game.state.history[play].result).to.eql('lost');
            }
        }
    });
    it('play("S") result test (10 games)', () => {
        for (let play = 0; play <= 10; play++) {
            game.play('S');
            if (game.state.history[play].moveUser==game.state.history[play].moveAI) {
                expect(game.state.history[play].result).to.eql('tied');
            }
            if (game.state.history[play].moveAI=='ROCK') {
                expect(game.state.history[play].result).to.eql('lost');
            }
            if (game.state.history[play].moveAI=='PAPER') {
                expect(game.state.history[play].result).to.eql('won');
            }
        }
    });
    it('play("R") result test (10 games)', () => {
        for (let play = 0; play <= 10; play++) {
            game.play('R');
            if (game.state.history[play].moveUser==game.state.history[play].moveAI) {
                expect(game.state.history[play].result).to.eql('tied');
            }
            if (game.state.history[play].moveAI=='PAPER') {
                expect(game.state.history[play].result).to.eql('lost');
            }
            if (game.state.history[play].moveAI=='SCISSORS') {
                expect(game.state.history[play].result).to.eql('won');
            }
        }
    });
});
