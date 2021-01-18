const time = document.querySelector(".js-time");


const setTimeFormat = (num) => {
    // 삼항연산자를 사용하면 코드가 간결함
    const temp = num > 10 ? num : `0${num}`;
    return temp;
}

const updateTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    // ``은 ${}를 사용해서 문자열과 변수를 적절히 같이 사용할 수 있다
    time.innerText = `${setTimeFormat(hour)}:${setTimeFormat(minute)}:${setTimeFormat(second)}`;

}

const init = () => {
    // setInterval() - 입력된 시간마다 함수를 매번 실행
    // setTimeout() - 입력된 시간이 지나면 함수를 한번 실행
    setInterval(updateTime, 1000);
};

init();



