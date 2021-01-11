

const form = document.querySelector('.js-form'),
    username = form.querySelector('.js-username'),
    email = form.querySelector('.js-email'),
    password = form.querySelector('.js-password'),
    checkPwd = form.querySelector('.js-check_password');


const SUCCESS = 'success';
const ERROR = 'error';

// error message 출력 함수
const setErrorMessage = (input, message) => {
    const formElement = input.parentElement;    // input의 부모노드를 가져옴
    const small = formElement.querySelector('.js-small');

    small.innerText = message;              // smail 안의 text를 매개변수로 받은 message로 변경
    formElement.classList.add(ERROR);     //classList로 변수명에 error 추가
}

// 변수명에 success를 추가하는 함수
const setSucess = (input) => {
    const formElement = input.parentElement;
    formElement.classList.remove(ERROR); 
    formElement.classList.add(SUCCESS); 
}

const checkInputs = () => {
    // trim() 메서드는 양쪽의 공백을 제거
    const n = username.value.trim();
    const e = email.value.trim();
    const p = password.value.trim();
    const cp = checkPwd.value.trim();

    // 정규식으로 email 유효성 검사
    const regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(n === '') {
        setErrorMessage(username, "Username can't be blank");
    } else {
        setSucess(username);
    }

    if(e === ''){
        setErrorMessage(email, "Email can't be blank");
    } else if(!regEmail.test(e)) {      // test() 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 false로 반환
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
        setErrorMessage(checkPwd, "Confirm password can't be blank");
    } else if (p!==cp){
        setErrorMessage(checkPwd, "Passwords do not match");
    } else {
        setSucess(checkPwd);
    }
}

const init = () => {
    form.addEventListener("submit", (e)=> {
        e.preventDefault();
    
        checkInputs();
    })
}

init();