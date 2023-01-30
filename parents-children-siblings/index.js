const block = document.querySelector('.block');

const children = Array.from(block.children);

console.log(children[1].parentNode);
console.log(children[1].previousElementSibling);
console.log(children[1].nextElementSibling);