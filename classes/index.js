const header = document.querySelector('h1');
header.classList.toggle('header');

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach((paragraph) => {
    if (paragraph.textContent.includes('success')) {
        paragraph.classList.add('success');
    }
    if (paragraph.textContent.includes('error')) {
        paragraph.classList.add('error');
    }
});

paragraphs[10].classList.remove('success')
paragraphs[11].classList.remove('error');