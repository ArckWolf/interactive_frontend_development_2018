class Game {
  constructor() {
    this.state = {history: []};
  }
  getHistory() {
    return this.state.history;
  }
  generateMove() {
    const aviableMoves=['R', 'P', 'S'];
    return aviableMoves[Math.floor(Math.random()*aviableMoves.length)];
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
        default:
            return null;
      }

    moveAI=this.refactorResult(moveAI);
    moveUser=this.refactorResult(moveUser);

    if (this.state.history.length>0) {
      const lastHistory = this.state.history[this.state.history.length - 1];
      this.state.history=this.state.history.concat({moveAI, moveUser, result, id: lastHistory.id + 1});
    } else {
      this.state.history=this.state.history.concat({moveAI, moveUser, result, id: 0});
    }
  }
}

export default Game;
