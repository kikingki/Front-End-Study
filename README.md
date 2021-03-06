# Front End Study✍
#### 20.12.23
  + ##### Flex & Grid
    + vw, vh 단위를 알게 됐다. viewport에 맞춰 상대적인 크기를 반환하므로 반응형 웹사이트 제작에 편리하다.
    + flex의 주축과 부축에 따른 정렬 방향, 줄바꿈 설정 등 flex의 속성을 공부했다.
    + fr은 grid를 분할하여 영역을 차지
#### 20.12.28
  + ##### JS
    + JavaScript는 interactive한 개발을 위해 필요하다.
    + querySelector로 요소를 불러와 변수를 저장한다.
    + 화살표 함수를 사용해 숫자를 증감시키는 increase, decrease 선언
    + classList의 add, remove, toggle 메서드를 이용해 클래스를 조작하는 방법을 배웠다.
    + transition으로 애니메이션 효과를 넣었다.
 #### 21.1.4
  + ##### Todo
    + localStorage를 사용해 웹페이지의 세션이 끝나도 데이터가 지워지지 않도록 한다.
    + todo를 생성할 때 id와 value를 딕셔너리로 저장하여 삭제도 가능하도록
    + filter는 반환 값이 true인 것만 모아 리스트로 반환한다.
#### 21.1.5
  + #### Responsive Web
    + flex 속성을 사용해 반응형 navbar와 todo 리스트를 만들었다.
    + @media를 사용해 width가 1000px 이하일 경우 todo 리스트를 한줄로 정렬하고 배경색을 바꿨다.
#### 21.1.10
+ #### Sign up
  + JS: javascript를 다룬지 오랜만이어서 구글링을 아주 많이 했다ㅎㅎ 확실히 프로젝트를 진행해보니 배웠던 개념을 더 정확하게 알 수 있었고 어떻게 응용하면 되는 지 알게 됐다. 이벤트가 전달되면 checkInputs() 메서드로 유효성을 검사했다. setErrorMessage() 메서드를 만들어 값이 유효하지 않으면 classList로 변수명에 "error"를 추가해 error message를 출력했다. 
  + CSS: flex를 사용해 반응형으로 만들었고, 일정 width 이하면 background-color를 바꿨다. 그리고, 애니메이션으로 header가 공이 튀는 듯한 모션을 넣었다.
#### 21.1.18
+ #### Time & API
  + 백틱(`)을 사용하면 문자열과 변수를 같이 사용할 수 있다.
  + Date 객체를 이용해 현재 시간을 출력하는 방법을 공부했다.
  + setInterval() 메서드와 setTimeout() 메서드의 차이를 알았다.
  + geolocation 객체를 이용해 현재위치를 가져오고 console에 띄웠다.
#### 21.1.25
  + #### Weather API
    + loadCoord() 메서드는 좌표가 없을 경우 저번에 만든 getCurrentLocation() 메서드로 현재위치를 불러온 후 local storage에 저장하고, 좌표가 있을 경우 setWeather() 메서드로 날씨정보를 웹에 띄웠다.
    + JSON.stringify는 자바스크립트 코드를 그대로 문자열로 변환 <=> JSON.parse는 문자열을 자바스크립트 코드로 변환
    + 동기 : 서버에서 요청을 보냈을 때 응답이 돌아와야 다음 동작을 수행할 수 있다. 설계가 매우 간단하고 직관적이지만 결과가 주어질 때까지 계속 대기해야 하는 단점이 있다.
    
      비동기 : 요청을 보냈을 때 응답 상태와 상관없이 다음 동작을 수행 할 수 있다. 동기보다 복잡하지만 결과가 주어지는데 시간이 걸리더라도 그 시간 동안 다른 작업을 할 수 있으므로 자원을 효율적으로 사용할 수 있는 장점이 있다. 클라이언트에서 서버로 데이터를 요청 했을 때, 서버가 그 요청에 대한 응답을 언제 줄지 모르는데 무한정 기다릴 수 없으므로 비동기처리가 필요하다.

#### 21.1.31
  + #### Modules
    + JS: 지금까지 배운 것들을 모두 종합해 하나의 웹사이트를 만들었다. localStorage 사용법이 헷갈렸었는데, 이름을 저장하는 기능과 Todo 기능을 함께 만들어보니 변수의 선언과 코드들이 왜 이렇게 쓰이는 건지 정확히 알게 됐다. 하지만 API를 다루는 건 아직 좀 미숙한 것 같다. 이부분은 카카오 API를 활용한 미니프로젝트를 진행해봐야겠다. 그리고 classList를 사용하니 css 디자인을 유동적으로 다룰 수 있어 쓸 일이 자주 있을 것 같다.
    + CSS: 지정된 시간의 % 비율로 배경화면과 글씨 투명도가 바뀌는 slide 애니메이션을 만들어 적용했다. Todo 리스트는 스크롤을 none으로 숨기고, underline을 추가해 todo 리스트를 명확히 구분하는 등 디자인을 깔끔하게 정리했다. 현재 지역과 온도는 왼쪽 하단에 position을 absolute로 설정하여 위치를 고정했다.
    + font size의 단위인 rem이 최상위 요소에 비례하는 크기이므로 반응형 웹을 만드는 데 효과적이었다.

#### 21.2.8
  + #### ReactFirst & Counter
    + component, className, Fragment 등 리액트의 기본 문법에 대해 학습했다.
    + 클래스형 컴포넌트와 함수형 컴포넌트의 차이를 배웠다. 클래스형 컴포넌트의 경우 state 기능과 life cycle 기능을 사용할 수 있고, render 함수가 꼭 있어야 한다. 
    
      함수형 컴포넌트의 경우 클래스형 컴포넌트보다 선언하기 좀 더 편하고, 메모리 자원을 덜 사용한다. state 기능과 life cycle 기능을 사용할 수 없다는 단점이 있었는데 리액트 훅이 도입되며 함수형 컴포넌트와 함께 사용함으로써 해결되었다.
    + 함수형 컴포넌트든 클래스형 컴포넌트든 state를 직접 조작하는 것이 아닌, setState나 useState와 같은 세터 함수를 반드시 사용하여 조작해야 한다.

#### 21.2.15
  + #### [Movie App](https://github.com/kikingki/Movie_app)
    + 영화 API를 사용하여 영화의 제목, 줄거리, 포스터 등을 띄웠다.
    + 클래스형 컴포넌트를 사용해 App.js를 작성했다. state 기능으로 로딩의 유무(isLoaded), 영화목록(movies)을 가져왔다. 
    + Ajax는 Javascript 를 사용한 비동기 통신이며, 클라이언트와 서버간의 XML 데이터를 주고받는 기술이다. react의 API 호출 메서드는 fetch와 axios가 있는데, 둘 다 Promise 객체를 반환한다. 
    
      axios는 fetch에서 지원하지 않는 응답시간 초과 설정, 요청 취소, JSON 데이터 자동 변환의 기능이 있다. 구형 브라우저를 지원한다.
    
      fetch는 내장 라이브러리로 import를 하지 않아도 사용이 가능하고, 라이브러리의 업데이트에 따른 에러방지가 가능하다. 하지만 지원하지 않는 브라우저가 있다.
    + 삼항연산자를 사용해, isLoaded 값이 false이면 로딩바를 띄우고, true이면 영화정보를 띄웠다. 로딩바의 경우 rotate() 메서드와 animation-timing-function값을 사용해 손쉽게 만들었다.
    + React 컴포넌트는 Life Cycle이 있다. componentDidMount에서는 DOM에 접근할 수 있어, AJAX 요청을 하거나, setTimeout, setInterval를 처리하는 코드를 작성한다.
    + Mount(생성)
      1. constructor(state, context, defaultProps 저장)
      2. render
      3. componentDidMount
    + async & await은 자바스크립트의 비동기 처리 패턴 중 하나이다. 기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완하고 개발자가 읽기 좋은 코드로 작성할 수 있다. 일반적으로 await의 대상이 되는 비동기 처리 코드는 Axios, fetch같은 'Promise 객체'를 반환하는 API 호출 함수이다.
    + async & await의 기본 문법
    ```
    async function 함수명() {
      await 비동기 처리 메서드 명();
    }
    ```
