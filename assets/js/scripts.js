let home = document.querySelector('#home');
let about = document.querySelector('#about');
let contact = document.querySelector('#contact');
let homeBtn = document.querySelector('#homeBtn');
let aboutBtn = document.querySelector('#aboutBtn');
let contactBtn = document.querySelector('#contactBtn');
let message = document.querySelector('#message');
let form = document.querySelector('#form');
let email = document.querySelector('#email');

function homeInactive(){
    home.style.display = 'none';
    homeBtn.className = 'navitem';
}

function aboutInactive(){
    about.style.display = 'none';
    aboutBtn.className = 'navitem';
}

function contactInactive(){
    contact.style.display = 'none';
    contactBtn.className = 'navitem';
}

homeBtn.addEventListener('click', function () {
    aboutInactive();
    contactInactive();
    home.style.display = 'flex';
    this.className = 'navitem-active';
});

aboutBtn.addEventListener('click', function () {
    homeInactive();
    contactInactive();
    about.style.display = 'flex';
    this.className = 'navitem-active';
});

contactBtn.addEventListener('click', function () {
    homeInactive();
    aboutInactive();
    contact.style.display = 'flex';
    this.className = 'navitem-active';
});

message.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});

form.addEventListener('submit', function (e) {
    if (email.value == '' || message.value == '') {
        e.preventDefault();
        if (email.value == '') {
            email.focus();
            email.placeholder = 'This field is mandatory';
        }
        if (message.value == '') {
            message.focus();
            message.placeholder = 'This field is mandatory';
        }
    }
});