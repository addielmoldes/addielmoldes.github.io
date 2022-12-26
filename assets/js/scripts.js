let message = document.querySelector('#message');
let form = document.querySelector('#form');
let email = document.querySelector('#email');

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