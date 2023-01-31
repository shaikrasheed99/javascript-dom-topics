document.querySelector('.grandparent').addEventListener('click', (event) => {
    console.log('grandparent');
}, true);

document.querySelector('.parent').addEventListener('click', (event) => {
    console.log('parent');
});

document.querySelector('.child').addEventListener('click', (event) => {
    console.log('child');
}, true);