import Counter from '../src/Counter';

describe('Counter test', () => {
    let count;
    
    beforeEach(() => {
        console.log('Running beforeEach');
        count = new Counter();
    });

    it('Increase test', () => {
        count.increase();
      expect(count.getCount()).to.eql(1);
    });
  
    it('GetCount test', () => {
        for (let click = 1; click <= 10; click++) {
            count.increase();
            console.log(click  + " . "+ count.getCount());
            expect(count.getCount()).to.eql(click);
        }
    });
  });