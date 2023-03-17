const logreg = document.querySelector('.logreg');

const loginLink = document.querySelector('.login-link');

const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logreg.classList.add('active');

});


loginLink.addEventListener('click', () => {
    logreg.classList.remove('active');

});