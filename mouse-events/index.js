const clickBlock = document.querySelector('.click');
const button = document.querySelector('.click .btn');
const modifyStylesOfParagraph = () => {
    const paragraph = document.querySelector('.click p');
    const buttonText = button.textContent;
    if (buttonText.includes('add')) {
        paragraph.style.color = 'brown';
        paragraph.style.border = '2px solid violet';
        button.textContent = 'Click me to remove the border';
    }
    if (buttonText.includes('remove')) {
        paragraph.style.color = '';
        paragraph.style.border = '';
        button.textContent = 'Click me to add the border';
    }
}
button.addEventListener('click', modifyStylesOfParagraph);

const copyBlock = document.querySelector('.copy p');
copyBlock.addEventListener('copy', (event) => {
    alert('You cannot copy the data!!');
})

const box = document.querySelector('.box');
box.addEventListener('mousemove', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const values = `X value is ${x}, Y value is ${y}`;
    box.textContent = values;
})