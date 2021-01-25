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
 #### 20.1.4
  + ##### Todo
    + localStorage를 사용해 웹페이지의 세션이 끝나도 데이터가 지워지지 않도록 한다.
    + todo를 생성할 때 id와 value를 딕셔너리로 저장하여 삭제도 가능하도록
    + filter는 반환 값이 true인 것만 모아 리스트로 반환한다.
#### 20.1.5
  + #### Responsive Web
    + flex 속성을 사용해 반응형 navbar와 todo 리스트를 만들었다.
    + @media를 사용해 width가 1000px 이하일 경우 todo 리스트를 한줄로 정렬하고 배경색을 바꿨다.
#### 20.1.10
+ #### Sign up
  + javascript를 다룬지 오랜만이어서 구글링을 아주 많이 했다ㅎㅎ 확실히 프로젝트를 진행해보니 배웠던 개념을 더 정확하게 알 수 있었고 어떻게 응용하면 되는 지 알게 됐다. 이벤트가 전달되면 checkInputs() 메서드로 유효성을 검사했다. setErrorMessage() 메서드를 만들어 값이 유효하지 않으면 classList로 변수명에 "error"를 추가해 error message를 출력했다. 
  + css적인 부분은 flex를 사용해 반응형으로 만들었고, 일정 width 이하면 background-color를 바꿨다. 그리고, 애니메이션으로 header가 공이 튀는 듯한 모션을 넣었다.
#### 20.1.18
+ #### Time & API
  + 백틱(`)을 사용하면 문자열과 변수를 같이 사용할 수 있다.
  + Date 객체를 이용해 현재 시간을 출력하는 방법을 공부했다.
  + setInterval() 메서드와 setTimeout() 메서드의 차이를 알았다.
  + geolocation 객체를 이용해 현재위치를 가져오고 console에 띄웠다.
#### 20.1.25
  + #### Weather API
    + loadCoord() 메서드는 좌표가 없을 경우 저번에 만든 getCurrentLocation() 메서드로 현재위치를 불러온 후 local storage에 저장하고, 좌표가 있을 경우 setWeather() 메서드로 날씨정보를 웹에 띄웠다.
    + JSON.stringify는 자바스크립트 코드를 그대로 문자열로 변환 <=> JSON.parse는 문자열을 자바스크립트 코드로 변환
    + 동기 : 서버에서 요청을 보냈을 때 응답이 돌아와야 다음 동작을 수행할 수 있다. 설계가 매우 간단하고 직관적이지만 결과가 주어질 때까지 계속 대기해야 하는 단점이 있다.  비동기 : 요청을 보냈을 때 응답 상태와 상관없이 다음 동작을 수행 할 수 있다. 동기보다 복잡하지만 결과가 주어지는데 시간이 걸리더라도 그 시간 동안 다른 작업을 할 수 있으므로 자원을 효율적으로 사용할 수 있는 장점이 있습니다.  클라이언트에서 서버로 데이터를 요청 했을 때, 서버가 그 요청에 대한 응답을 언제 줄지 모르는데 계속 기다릴 수 없어 비동기처리가 필요하다.