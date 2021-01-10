

const form = document.querySelector('.js-form'),
    username = form.querySelector('.js-username'),
    email = form.querySelector('.js-email'),
    password = form.querySelector('.js-password'),
    check_password = form.querySelector('.js-check_password');


form.addEventListener("submit", (e)=> {
    e.preventDefault();

    checkInputs();
});

const setErrorMessage = (input, message) => {
    const formElement = input.parentElement;
    const small = formElement.querySelector('.js-small');

    small.innerText = message;
    formElement.classList.add('error');
}

const setSucess = (input) => {
    const formElement = input.parentElement;
    formElement.classList.remove('error'); 
    formElement.classList.add('success'); 
}

const checkInputs = () => {
    //trim() 메서드는 양쪽의 공백을 제거
    const n = username.value.trim();
    const e = email.value.trim();
    const p = password.value.trim();
    const cp = check_password.value.trim();

    const regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(n === '') {
        setErrorMessage(username, "Username can't be blank");
    } else {
        setSucess(username);
    }

    if(e === ''){
        setErrorMessage(email, "Email can't be blank");
    } else if(!regEmail.test(e)) {
        setErrorMessage(email, "Email is not valid" );
    } else {
        setSucess(email);
    }

    if(p === ''){
        setErrorMessage(password, "Password can't be blank");
    } else if (p.length < 6){
        setErrorMessage(password, "Password must be at least 6 characters");
    } else {
        setSucess(password);
    }

    if(p === ''){
        setErrorMessage(check_password, "Confirm password can't be blank");
    } else if (p!==cp){
        setErrorMessage(check_password, "Passwords do not match");
    } else {
        setSucess(check_password);
    }
}

