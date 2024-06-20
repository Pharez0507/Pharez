const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginBox = document.querySelector('.form-box.login');
const registerBox = document.querySelector('.form-box.register');

registerLink.addEventListener('click', () => {
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
});

loginLink.addEventListener('click', () => {
    loginBox.style.display = 'block';
    registerBox.style.display = 'none';
});

iconClose.addEventListener('click', () => {
    wrapper.style.display = 'none';
});

const loginForm = document.querySelector('.form-box.login form');

loginForm.addEventListener('submit', (e) => {

    // Add the 'welcome' class to trigger the animation
    wrapper.classList.add('welcome');

    // Optionally, you can remove the 'welcome' class after the animation completes
    setTimeout(() => {
        wrapper.classList.remove('welcome');
    }, 1000); // 1000ms = 1 second (duration of the animation)
});