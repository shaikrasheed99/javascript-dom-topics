const form = document.querySelector('.form');
const usernamePattern = /^[a-zA-Z0-9]{6,}$/;
const result = document.querySelector('.result');

const isMatched = (usernamePattern, username) => {
    return usernamePattern.test(username);
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (isMatched(usernamePattern, form.username.value)) {
        result.textContent = `Username is correct`;
    } else {
        result.textContent = `Username should be captial, lower and have number`;
    }
});

form.username.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (isMatched(usernamePattern, form.username.value)) {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
})