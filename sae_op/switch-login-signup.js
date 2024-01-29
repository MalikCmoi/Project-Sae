let loginLink = document.getElementById('login-box-link');
let signupLink = document.getElementById('signup-box-link');
let loginForm = document.getElementById('connexion-process');
let signupForm = document.getElementById('inscription-process');

let currentUrl = window.location.href;
currentUrl = currentUrl.split('?')[1]
if(currentUrl){
    signupForm.classList.remove('hidden-form');
    loginForm.classList.add('hidden-form');
    loginLink.classList.remove('active');
    signupLink.classList.add('active');
}
console.log('Current URL:', currentUrl);


loginLink.addEventListener('click', function (event) {
    event.preventDefault();
    loginForm.classList.remove('hidden-form');
    signupForm.classList.add('hidden-form');
    loginLink.classList.add('active');
    signupLink.classList.remove('active');
});

signupLink.addEventListener('click', function (event) {
    event.preventDefault();
    signupForm.classList.remove('hidden-form');
    loginForm.classList.add('hidden-form');
    loginLink.classList.remove('active');
    signupLink.classList.add('active');
});
