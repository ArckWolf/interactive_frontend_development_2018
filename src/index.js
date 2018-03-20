import Counter from './Counter';

const counter = new Counter();
const btn = document.createElement('button');
const items = document.getElementsByClassName('item');

items[0].innerHTML = '<h1>Homework 1</h1>';

btn.innerHTML='Clicked '+counter.getCount() + ' times';

btn.onclick = function() {
    counter.increase();
    btn.innerHTML='Clicked '+counter.getCount() + ' times';
  };

items[1].appendChild(btn);

