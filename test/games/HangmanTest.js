import Hangman from '../../src/games/Hangman';

const POSSIBLE_WORD_VIEWS = {
    1: '_________',
    2: '__________',
    3: '______',
    4: '_________',
  };
const POSSIBLE_WORD_VIEWS_UPDATE = {
    1: '__rr_____',
    2: '_____r____',
    3: '_____r',
    4: '__r___r__',
  };
describe('Game getHistory() test', () => {
    let game;

    beforeEach(() => {
        game = new Hangman();
    });

    it('generateWord()', () => {
        const generatedWord = game.generateWord();
        expect([1, 2, 3, 4]).to.include(generatedWord.wordId);
        expect(generatedWord.wordView).to.eql(POSSIBLE_WORD_VIEWS[generatedWord.wordId]);
    });

    it('getStatus()', () => {
        expect(game.getStatus()).to.eql('waiting');
    });

    it('getImageId()', () => {
        expect(game.getImageId()).to.eql(0);
    });

    it('getWordView()', () => {
        expect(game.getWordView()).to.eql(game.word.wordView);
    });

    it('generateEmtyStringForUserView()', () => {
        for (let index = 1; index <= POSSIBLE_WORD_VIEWS.length+1; index++) {
            expect(game.generateEmtyStringForUserView()).to.eql(POSSIBLE_WORD_VIEWS[index]);
        }
    });

    it('updateStringForUserView()', () => {
        for (let index = 1; index <= POSSIBLE_WORD_VIEWS.length+1; index++) {
            game.word.wordView=POSSIBLE_WORD_VIEWS[index];
            game.word.wordId=index;
            expect(game.updateStringForUserView()).to.eql(POSSIBLE_WORD_VIEWS_UPDATE[index]);
        }
    });

    it('guess(-------------------)', () => {
        for (let index = 1; index <= POSSIBLE_WORD_VIEWS.length+1; index++) {
            game.word.wordView=POSSIBLE_WORD_VIEWS[index];
            game.word.wordId=index;
            expect(game.updateStringForUserView()).to.eql(POSSIBLE_WORD_VIEWS_UPDATE[index]);
        }
    });
});
