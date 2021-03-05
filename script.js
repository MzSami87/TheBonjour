const form = document.getElementById('res_contact');
const msgContainer = document.querySelector('.msg-container');
const msg = document.getElementById('new');


let isValid = true;

function validateForm() {
    //Using Constraint API
    isValid = form.checkValidity();

if(isValid) {
    msg.textContent = 'Reservation Accepted!';
    msg.style.color = 'green';
    msgContainer.style.borderColor = 'green';
    }
}

//Set Reservation Type with Corresponding Guest Number Value
function setNum() {
    const numContainer = document.querySelector('.num-container');
    const num_msg = document.getElementById('num_msg');
    let selectType = document.getElementById("restype").value;

    const restype = document.getElementById('restype');
    const party1 = document.getElementById('party1');
    const party2 = document.getElementById('party2');
    party1.style.display = (selectType == "Dinner") ? "initial" :
                           (selectType == "VIP") ? "initial" :
                           (selectType == "Private Room") ? "initial":"none";
    party2.style.display = (selectType == "Birthday") ? "initial" : 
                           (selectType == "Work Event") ? "initial": 
                           (selectType == "Private Room Party") ? "initial":"none";

    if(selectType) {
        num_msg.innerText = 'Birthday, Work Event \n and Private Room Party \n require 6 or more guests!';
        num_msg.style.color = 'red';
    } else {
        num_msg.style.display = "none";
    }
}

function holidayDates() {
    const form = document.getElementById('res_contact');
    const msgContainer = document.querySelector('.date-container');
    const date_msg = document.getElementById('date_msg');
    const input = document.getElementById('date').value;

    // Convert input date into inputDt string
    const d1 = new Date(input);
    const inputDt = d1.getFullYear() + "-" + (d1.getMonth() + 1) + "-" + d1.getDate();

    // Convert date into tDate string
    const d2 = new Date("2021-11-18");
    const tDate = d2.getFullYear() + "-" + (d2.getMonth() + 1) + "-" + d2.getDate();

    // Convert date into xmasDt string
    const d3 = new Date('2021-12-25');
    const xmasDt = d3.getFullYear() + "-" + (d3.getMonth() + 1) + "-" + d3.getDate();


    if(inputDt == tDate) {
        date_msg.textContent = 'Bonjour will be closed to observe Thanksgiving. Please select another date!';
        date_msg.style.color = 'red';
        return;
    } else if(inputDt == xmasDt) {
        date_msg.textContent = 'Bonjour will be closed to observe the holidays. Please select another date!';
        date_msg.style.color = 'red';
        return;
    } else {
        date_msg.style.display = "none";
        }

    }


function storeFormData () {
    const user = {
        fname: form.fname.value,
        lname: form.lname.value,
        email: form.email.value,
        restype: form.restype.value,
        party1: form.party1.value,
        party2: form.party2.value,
        date: form.date.value,
        restime: form.restime.value
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
        // setNum();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);


