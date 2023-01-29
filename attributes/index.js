const link = document.querySelector('a');
const website = link.getAttribute('href');
const github = 'https://www.github.com';

link.setAttribute('href', github);
link.innerText = 'GitHub';

const paragraph = document.querySelector('p');
paragraph.setAttribute('class', 'error');
paragraph.innerText += `Add extra text through innerText property`;

const question = document.querySelector('.question');
const answer = question.hasAttribute('href');
let answerBlock = document.querySelector('#answer');
answerBlock.innerText += answer;

const removeElement = document.querySelector('.remove');
removeElement.removeAttribute('href');
const hasAttribute = removeElement.hasAttribute('href')
answerBlock = document.querySelector('#returned');
if (!hasAttribute) {
    answerBlock.innerText += true;
} else {
    answerBlock.innerText += false;
}

const attribute = document.createAttribute('class');
attribute.value = 'attributeTwo';
const element = document.getElementsByTagName('p')[3];
element.setAttributeNode(attribute);