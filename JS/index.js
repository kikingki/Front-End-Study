// const(값 변화x), let(최신), val(옛날 방식) 변수 선언 방법 3가지
// .은 클래스라는 뜻.  ,로 연결해도 됨.
const title = document.querySelector(".js-title"),
    increase = document.querySelector(".js-increase"),
    decrease = document.querySelector(".js-decrease"),
    modal = document.querySelector(".js-modal");

// ==, ===, !=, !==
// == 값만 비교
// === 값과 변수형 비교
// 1 = "1"     --> true
// 1 === "1"   --> false

const EVEN_CN = "even";
const MODAL_CN = "modal-active";

function checkIsEven(currentValue) {
    // if (currentValue % 2 === 0) {
    //     title.classList.add(EVEN_CN);
    // } else {
    //     title.classList.remove(EVEN_CN);
    // }

    title.classList.toggle(EVEN_CN);
}

function handleIncrease() {
    // innerHTML - 태그 안의 내용물을 가져옴
    // parseInt - int형으로 바꿈
    const currentValue = parseInt(title.innerHTML);
    title.innerHTML = currentValue + 1;
    checkIsEven(currentValue + 1);

    modal.classList.add(MODAL_CN);
    // console.log(typeof currentValue) 변수의 타입을 알 수 있음
    
}

// function hadnleDecrease() {
//     const currentValue = parseInt(title.innerHTML);
//     title.innerHTML = currentValue - 1;

//     checkIsEven(currentValue - 1);
// }

// 화살표 함수
const hadnleDecrease = () => {
    const currentValue = parseInt(title.innerHTML);
    title.innerHTML = currentValue - 1;
    checkIsEven(currentValue - 1);
}

function init(){
    increase.addEventListener("click", handleIncrease);
    decrease.addEventListener("click", hadnleDecrease);
}

init();