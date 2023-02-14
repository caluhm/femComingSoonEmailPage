let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

const buttonSubmit = document.querySelector('#submit');

buttonSubmit.addEventListener('click', e => {
    e.preventDefault();
    let email = document.querySelector('#email');
    if(!validEmail.test(email.value) || email.value == '') {
        email.classList.toggle('email-action-container-invalid');
        email.value = '';
        email.placeholder = 'Invalid email address...';
        
        setTimeout(() => {
            email.classList.toggle('email-action-container-invalid');
            email.placeholder = 'Your email address...';
        }, 2000)
    } else {
        email.classList.toggle('email-action-container-valid');
        email.value = '';
        email.placeholder = 'Thank you for subscribing!';
        
        setTimeout(() => {
            email.classList.toggle('email-action-container-valid');
            email.placeholder = 'Your email address...';
        }, 2000)
    }
});
