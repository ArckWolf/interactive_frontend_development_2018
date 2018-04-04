class Game {
  constructor() {
    this.state = {movesUser: [], movesAi: [], results: []};
  }
  getState() {
    return this.state;
  }
  generateMove() {
    const aviableMoves=['R', 'P', 'S'];
    let aiMove=aviableMoves[Math.floor(Math.random()*aviableMoves.length)];
    this.state.movesAi.push(this.refactorResult(aiMove));
    return aiMove;
  }
  refactorResult(result) {
    switch (result) {
      case 'R':
        return 'ROCK';
      case 'P':
        return 'PAPER';
      case 'S':
        return 'SCISSORS';
    }
  }
  play(moveUser) {
    this.state.movesUser.push(this.refactorResult(moveUser));
    let moveAI=this.generateMove();
    let result = '';
      switch (moveUser) {
        case 'R':
            if (moveAI=='S') {
              result = 'won';
            } else if (moveAI=='R') {
              result = 'tied';
            } else {
              result = 'lost';
            }
            break;
        case 'P':
            if (moveAI=='R') {
              result = 'won';
            } else if (moveAI=='P') {
              result = 'tied';
            } else {
              result = 'lost';
            }
            break;
        case 'S':
            if (moveAI=='P') {
              result = 'won';
            } else if (moveAI=='S') {
              result = 'tied';
            } else {
              result = 'lost';
            }
            break;
      }
    this.state.results.push(result);
  }
}

export default Game;
