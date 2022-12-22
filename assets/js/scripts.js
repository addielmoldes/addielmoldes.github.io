let home = document.querySelector('#home');
let about = document.querySelector('#about');
let contact = document.querySelector('#contact');
let goBtn = document.querySelector('#goBtn');
let homeBtn = document.querySelector('#homeBtn');
let aboutBtn = document.querySelector('#aboutBtn');
let contactBtn = document.querySelector('#contactBtn');

homeBtn.addEventListener('click', function () {
    about.style.display = 'none';
    aboutBtn.className = 'navitem';
    contact.style.display = 'none';
    contactBtn.className = 'navitem';
    home.style.display = 'flex';
    this.className = 'navitem-active';
});

goBtn.addEventListener('click', function(){
    home.style.display = 'none';
    homeBtn.className = 'navitem';
    contact.style.display = 'none';
    contactBtn.className = 'navitem';
    about.style.display = 'flex';
    aboutBtn.className = 'navitem-active';
});

aboutBtn.addEventListener('click', function () {
    home.style.display = 'none';
    homeBtn.className = 'navitem';
    contact.style.display = 'none';
    contactBtn.className = 'navitem';
    about.style.display = 'flex';
    this.className = 'navitem-active';
});

contactBtn.addEventListener('click', function () {
    home.style.display = 'none';
    homeBtn.className = 'navitem';
    about.style.display = 'none';
    aboutBtn.className = 'navitem';
    contact.style.display = 'flex';
    this.className = 'navitem-active';
});