
const place = document.querySelector('.js-place');
const temp = document.querySelector('.js-temp');



const API_KEY = '89b6124ac4edc46208c8f01fe63aafb2';
// LS == Local Storage
const COORD_LS = "coordinate";


const saveCoord = (obj) => {
    // localStorage는 문자열밖에 저장을 못함
    // JSON.stringify는 자바스크립트 코드를 그대로 문자열로 만들어줌.
    const tempStringify = JSON.stringify(obj);
    localStorage.setItem(COORD_LS, tempStringify);
}


const handleGeoSuccess = (position) => {
    // position === typeof object
    // position = {
    //     a : "asd",
    //     b : [1,2,3],
    //     c : function(),
    //     d : { e : [1,2,3]};
    // }
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const tempObj = {
        // key로 value를 호출, 이름이 같을 경우 한번만 적어도 됨.
        latitude: latitude,
        longitude: longitude,
    };
    saveCoord(tempObj);
    // 처음 방문해도 바로 동네와 온도가 뜨도록
    setWeather(latitude, longitude);
};

const handleGeoError = () => {
    console.log("못찾겠음");
};

// 함수명을 동사로 하면 명시적이고, 기능을 잘 분할할 수 있음.
const getCurrentLocation = () => {
    // GeolocationPosition은 단 두 가지만 가진다.
    //하나는 GeolocationCoordinates 인스턴스를 가진 coords 속성
    //다른 하나는 위치 정보의 기록 시점을 나타내는 DOMTimeStamp 인스턴스
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);

}

const setWeather = (lat, lon) => {
    // fetch를 호출하면 브라우저는 요청을 보내고 Promise 객체를 반환한다.
    // 요청이 완료되면 성공 여부에 상관없이 Promise가 resolved 되어 Response 객체가 반환된다. 
    // Response 객체는 응답에 대한 정보를 담고 있다.
    
    // then() 메서드는 url이 호출되는 걸 기다린 후 실행함. 중첩 사용 가능
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then((response) => {
        return response.json();
    }).then((data) => {
        place.innerText = data.name;
        temp.innerText = `${data.main.temp}'C`;
    });

};

const loadCoord = () => {
    // localstorage에서 이름이 COORD_LS인 아이템을 가져옴
    const loadedCoord = localStorage.getItem(COORD_LS);

    if (loadedCoord === null) {
        // 좌표를 가지고 온 후에 로컬스토리지에 저장
        getCurrentLocation();
    } else {
        // JSON.parse는 문자열을 자바스크립트 코드로 바꿔줌
        const parsedCoord = JSON.parse(loadedCoord);
        setWeather(parsedCoord.latitude, parsedCoord.longitude);
        // 지정된 좌표를 이용하여 날씨 정보를 불러올 것임
    }
};

const init = () => {
    loadCoord();
};

init();