const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

const checkInputs = () =>{
    //get values from inputs
    const usernameValue = username.value.trim(); //removes all white space
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    if (usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank');
    } 
    else{
        setSuccessFor(username); 
    }

    if(passwordValue===''){
        setErrorFor(password, 'Password cannot be blank');
    }
    else if(passwordValue.length < 6){
        setErrorFor(password, 'Password needs to be longer than 6 characters')
    }
    else{
        setSuccessFor(password)
    }

    if(emailValue===''){
        setErrorFor(email, 'Email cannot be blank');
    }
    else{
        setSuccessFor(email)
    }

    if(phoneValue===''){
        setErrorFor(phone, 'Phone number required');
    }
    else{
        setSuccessFor(phone)
    }
};

const setErrorFor = (input, message) => {
    const formControl = input.parentElement.parentElement.parentElement;
    console.log(formControl);
    const small = formControl.querySelector('small');
    console.log(small)

    small.innerText = message;

    formControl.id = 'input-div-error';
} 

const setSuccessFor = (input)=>{
    const formControl = input.parentElement.parentElement.parentElement;
    formControl.id = 'input-div-success';
}

