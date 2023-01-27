const paragraphs = document.querySelectorAll('p');

paragraphs.forEach((paragraph) => {
    const content = `<p>Added another paragraph using querySelectorAll</p>`
    paragraph.innerHTML += content;
});