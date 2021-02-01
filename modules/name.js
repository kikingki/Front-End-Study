

const name = document.querySelector('.js-name');
const form = document.querySelector('.js-form');
const input = form.querySelector('.js-input');

//Window.localStorage 사용
const NAME_IN = "";

const loadName = () => {
  const data = localStorage.getItem(NAME_IN);   //localStorage에서 데이터 가져오기
  
  if (data !== null) {  //빈 객체가 아닐때만 실행
    createName(data);
  } else {              // 객체가 비어있을 경우 변수명에 hidden 삭제
    formElement.classList.remove('hidden');
  }
};

const createName = (value) => {
    const newName = name
    const formElement = input.parentElement;

    newName.innerText = `${value}님 반갑습니다.`;
    // 변수명에 hidden을 추가해 input 숨기기
    formElement.classList.add('hidden'); 

    localStorage.setItem(NAME_IN, value); //localStorage에 데이터 저장
  };

  
//addEventListener는 기본적으로 event 객체 반환
const handleSubmit = (event) => {
    event.preventDefault();   //기본적인 event를 막음(새로고침, value 초기화)
    const value = input.value;
    input.value = "";         //input의 value 값을 빈 문자열로
    createName(value);        //value 값으로 name 변경
}

const init3 = () => {
  form.addEventListener("submit", handleSubmit);
  loadName();
};

init3();