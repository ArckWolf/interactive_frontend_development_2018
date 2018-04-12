const POSSIBLE_WORDS = {
  1: 'barracuda',
  2: 'pufferfish',
  3: 'oyster',
  4: 'stringray',
};

class Hangman {
  constructor() {
    this.status = 'waiting';
    this.wrongCounter = 0;
    this.word = this.generateWord();
  }

  getStatus() {
    return this.status;
  }

  getImageId() {
    return this.wrongCounter;
  }

  getWordView() {
    return this.word.wordView;
  }

  generateWord() {
    const wordId = Math.floor(Math.random() * 4)+1;
    const wordView = this.generateEmtyStringForUserView(wordId);
    return {wordId: wordId, wordView: wordView};
  }

  generateEmtyStringForUserView(wordId) {
    let view='';
    for (let index = 0; index < POSSIBLE_WORDS[wordId].length; index++) {
        view += '_';
      }
    return view;
  }

  updateStringForUserView(guess) {
    let newView = '';
    for (let index = 0; index < POSSIBLE_WORDS[this.word.wordId].length; index++) {
        if (POSSIBLE_WORDS[this.word.wordId].charAt(index) == guess) {
          newView += guess;
        } else if (POSSIBLE_WORDS[this.word.wordId].charAt(index) == this.word.wordView.charAt(index)) {
          newView += this.word.wordView.charAt(index);
        } else {
          newView += '_';
        }
      }
    return newView;
  }

  guess(guess) {
    if (POSSIBLE_WORDS[this.word.wordId].includes(guess) && !this.word.wordView.includes(guess)) {
        this.word.wordView = this.updateStringForUserView(guess);

        if (!this.word.wordView.includes('_')) {
          this.status = 'finished_won';

          return {result: true, wordView: this.word.wordView};
        } else {
          return {result: true, wordView: this.word.wordView};
        }
    } else {
        this.wrongCounter+=1;
        if (this.wrongCounter == 6) {
          this.status = 'finished_lost';

          return {result: false, wordView: this.word.wordView};
        } else {
          return {result: false, wordView: this.word.wordView};
        }
    }
  }
}

export default Hangman;
