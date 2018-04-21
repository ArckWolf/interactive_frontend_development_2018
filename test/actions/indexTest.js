import {
    rpsGameCreated,
    hangmanGameCreated,
    submitHangman,
    submitRPS
} from '../../src/actions/index';

describe('rpsGameCreated', () => {
    it('has increasing game ID', () => {
        const actions = [
            rpsGameCreated(),
            rpsGameCreated()
        ];
        expect(actions[1].payload.id).to.eq(actions[0].payload.id + 1);
    });
    it('created game type RPS', () => {
        const action = rpsGameCreated();
        expect(action.payload.type).to.eq('RPS');
    });
    it('created rps game with moves: []', () => {
        const action = rpsGameCreated();
        expect(action.payload.moves).to.be.an('array').that.is.empty;
    });
});

describe('hangmanGameCreated', () => {
    it('has increasing game ID', () => {
      const actions = [
        hangmanGameCreated(),
        hangmanGameCreated()
      ];
      expect(actions[1].payload.id).to.eq(actions[0].payload.id + 1);
    });
    it('created game type hangman', () => {
        const action = hangmanGameCreated();
        expect(action.payload.type).to.eq('Hangman');
    });
    it('created hangman game with wrongCounter: 0', () => {
        const action = hangmanGameCreated();
        expect(action.payload.wrongCounter).to.eq(0);
    });
    it('created hangman game with wordView', () => {
        const action = hangmanGameCreated();
        expect(action.payload.wordView).to.be.a('string').lengthOf.above(0);
    });
});

describe('submitHangman', () => {
    let game;

    beforeEach(() => {
        game = hangmanGameCreated();
    });

    it('submitHangman x. wrongCounter must be updated', () => {
        const action = submitHangman(game.payload.id, 'x');
        expect(action.payload.wrongCounter).to.eq(1);
    });

    it('submitHangman r. wordView must be updated', () => {
        const action = submitHangman(game.payload.id, 'r');
        expect(action.payload.wordView).to.not.eq(game.payload.wordView);
    });
});

describe('submitRPS', () => {
    let game;

    beforeEach(() => {
        game = rpsGameCreated();
    });

    it('submitRPS R and P. moves must be updated', () => {
        const action = submitRPS(game.payload.id, 'R');
        expect(action.payload.moves).to.be.an('array').that.have.lengthOf(1);

        const action2 = submitRPS(game.payload.id, 'P');
        expect(action2.payload.moves).to.be.an('array').that.have.lengthOf(2);
    });

    it('submitRPS X. moves must not be updated', () => {
        const action = submitRPS(game.payload.id, 'X');
        expect(action.payload.moves).to.be.an('array').that.have.lengthOf(0);
    });
});
