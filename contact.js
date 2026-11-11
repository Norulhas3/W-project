// contact.js - one small DOM script: live form check on the contact page

var nameBox = document.getElementById('c-name');
var emailBox = document.getElementById('c-email');
var msgBox = document.getElementById('c-msg');
var form = document.getElementById('contact-form');

// Show a message under a field and colour its border green or red
function showResult(box, hintId, isOk, text) {
    var hint = document.getElementById(hintId);
    box.classList.toggle('ok', isOk);
    box.classList.toggle('bad', !isOk);
    hint.textContent = text;
    hint.classList.toggle('bad-text', !isOk);
}

function checkName() {
    var good = nameBox.value.trim().length >= 3;
    showResult(nameBox, 'name-hint', good, good ? 'Looks good' : 'Enter at least 3 characters');
    return good;
}

function checkEmail() {
    var good = emailBox.validity.valid && emailBox.value !== '';
    showResult(emailBox, 'email-hint', good, good ? 'Looks good' : 'Enter a valid email address');
    return good;
}


// Check while the user types
nameBox.addEventListener('input', checkName);
emailBox.addEventListener('input', checkEmail);
msgBox.addEventListener('input', checkMessage);

// Check again on submit and show a success message
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var status = document.getElementById('form-status');
    if (checkName() & checkEmail() & checkMessage()) {
        status.textContent = 'Thanks! Your message has been sent.';
        form.reset();
    } else {
        status.textContent = '';
    }
});
