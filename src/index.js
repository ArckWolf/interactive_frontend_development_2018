import Counter from './Counter';

const counter = new Counter();
const btn = document.createElement('button');
const items = document.getElementsByClassName('item');

btn.innerHTML='Clicked '+counter.getCount() + ' times';

btn.onclick = function() {
    counter.increase();
    btn.innerHTML='Clicked '+counter.getCount() + ' times';
  };

items[0].appendChild(btn);

