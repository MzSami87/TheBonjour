const form = document.getElementById('form');
const msgContainer = document.querySelector('.msg-container');
const msg = document.getElementById('new');

let isValid = false;

function validateForm() {
    //Using Constraint API
    isValid = form.checkValidity();
    
    //Style main message
    if(isValid) {
    msg.textContent = 'Message Sent!';
    msg.style.color = 'green';
    msg.style.fontSize = '20px';
    msgContainer.style.borderColor = 'green';
    // alertMsg();
    }
}

function alertMsg() {
        setTimeout(function()
        {popupS.alert('Thank you!\n\nWe value all feedback!');
    }, 
    1000);
    }


function storeFormData () {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        comment: form.comment.value
    };
    //Do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    //Validate Form
    validateForm();
    //Submit Data if Valid
    if (isValid) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);