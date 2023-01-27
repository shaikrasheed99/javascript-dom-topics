const paragraph = document.getElementsByClassName('para');

const content = `<p>Added another paragraph using getElementsByClassName()</p>`

console.log(paragraph);

paragraph[0].innerHTML += content;