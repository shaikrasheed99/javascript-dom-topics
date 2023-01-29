const paragraphOne = document.querySelector('.innerHtml');
const paragraphTwo = document.querySelector('.innerText');
const paragraphThree = document.querySelector('.textContent');

const element = `<p>Html block added by the innerHTML property</p>`
paragraphOne.innerHTML += element;

const messageOne = `Message is added by the innerText property`;
paragraphTwo.innerHTML += `<br>`;
paragraphTwo.innerText += messageOne;

const messageTwo = `Message is added by the textContent property`;
paragraphThree.innerHTML += `<br>`;
paragraphThree.textContent += messageTwo;