const paragraph = document.getElementsByTagName('p');

const content = `<p>Added another paragraph using getElementsByTagName()</p>`

paragraph[0].innerHTML += content;
paragraph[2].innerHTML += content;