const ul = document.querySelector('ul');

const first = document.createElement('li');
first.textContent = `This is the first item added by JS DOM`;
first.classList.add('dom');

const second = document.createElement('li');
second.textContent = `This is the second item added by JS DOM`;
second.classList.add('dom');

ul.prepend(first);
ul.append(second);

const items = document.querySelectorAll('li');
items[3].remove();