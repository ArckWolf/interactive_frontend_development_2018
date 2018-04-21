import reducer from '../../src/reducers/index';
import {
    rpsGameCreated,
    hangmanGameCreated,
    submitHangman,
    submitRPS
} from '../../src/actions/index';


describe('reducer', () => {
  it('has nothing initially', () => {
    expect(reducer(undefined, {})).to.eql({});
  });

  it('create new RPS game when new button RPS game pressed', () => {
    const previousState = {};
    const newGmae = rpsGameCreated();
    const newState = reducer(previousState, newGmae);

    expect(newState).to.be.an.instanceof(Object);
    expect(newState[newGmae.payload.id]).to.be.an.instanceof(Object);
    expect(newState[newGmae.payload.id].id).to.eq(newGmae.payload.id);
    expect(newState[newGmae.payload.id].type).to.eq('RPS');
    expect(newState[newGmae.payload.id].moves).to.be.an('array').that.have.lengthOf(0);
  });

  it('create new Hangman game when new button Hangman game pressed', () => {
    const previousState = {};
    const newGmae = hangmanGameCreated();
    const newState = reducer(previousState, newGmae);

    expect(newState).to.be.an.instanceof(Object);
    expect(newState[newGmae.payload.id]).to.be.an.instanceof(Object);
    expect(newState[newGmae.payload.id].id).to.eq(newGmae.payload.id);
    expect(newState[newGmae.payload.id].type).to.eq('Hangman');
    expect(newState[newGmae.payload.id].wrongCounter).to.eq(0);
    expect(newState[newGmae.payload.id].wordView).to.be.a('string').lengthOf.above(0);
  });

  it('submitHangman false', () => {
    const newGmae = hangmanGameCreated();
    const previousState = {};
    const newPreviousState = reducer(previousState, newGmae);
    const newState = reducer(newPreviousState, submitHangman(newGmae.payload.id, 'x'));

    expect(newState[newGmae.payload.id].wrongCounter).to.eq(1);
    expect(newState[newGmae.payload.id].wordView).not.to.have.string('x');
    expect(newState[newGmae.payload.id].status).to.be.a('string').lengthOf.above(0);
  });

  it('submitHangman true', () => {
    const newGmae = hangmanGameCreated();
    const previousState = {};
    const newPreviousState = reducer(previousState, newGmae);
    const newState = reducer(newPreviousState, submitHangman(newGmae.payload.id, 'r'));

    expect(newState[newGmae.payload.id].wrongCounter).to.eq(0);
    expect(newState[newGmae.payload.id].wordView).to.have.string('r');
    expect(newState[newGmae.payload.id].status).to.be.a('string').lengthOf.above(0);
  });

  it('submitRPS false', () => {
    const newGmae = rpsGameCreated();
    const previousState = {};
    const newPreviousState = reducer(previousState, newGmae);
    const newState = reducer(newPreviousState, submitRPS(newGmae.payload.id, 'x'));

    expect(newState[newGmae.payload.id].moves).to.be.an('array').that.is.empty;
    expect(newState[newGmae.payload.id].status).to.be.a('string').lengthOf.above(0);
  });

  it('submitRPS true', () => {
    const newGmae = rpsGameCreated();
    const previousState = {};
    const newPreviousState = reducer(previousState, newGmae);
    const newState = reducer(newPreviousState, submitRPS(newGmae.payload.id, 'R'));

    expect(newState[newGmae.payload.id].moves).to.be.an('array').that.have.lengthOf(1);
    expect(newState[newGmae.payload.id].status).to.be.a('string').lengthOf.above(0);
  });
});
