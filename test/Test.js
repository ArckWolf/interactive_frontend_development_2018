/* eslint-env node, mocha */
import Counter from '../src/Counter';

describe('Counter test', () => {
    let counter;

    beforeEach(() => {
        // console.log('Running beforeEach');
        counter = new Counter();
    });

    it('Increase test', () => {
        counter.increase();
      expect(counter.count).to.eql(1);
    });

    it('GetCount test', () => {
        for (let click = 1; click <= 10; click++) {
            counter.increase();
            // console.log(click + ' . '+ counter.getCount());
            expect(counter.getCount()).to.eql(click);
        }
    });
  });
