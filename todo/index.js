

const list = document.querySelector('.js-list');
const form = document.querySelector('.js-form');
const input = form.querySelector('.js-input');

//Window.localStorage 사용
const TODO_LS = "todos";
let toDos = [];

const loadTodos = () => {
  const data = localStorage.getItem(TODO_LS);   //localStorage에 저장

  if (data !== null) {  //빈 객체가 아닐때만 실행
    const jsonData = JSON.parse(data);

    //json에 있는 data로 반복
    jsonData.forEach((todo)=>{  //data를 todo로 명칭할 것임
      createToDo(todo.value);
    });
  }
};

const saveTodos = () => {
  // [1,2,3,4] => "[1,2,3,4]"
  const stringToDos = JSON.stringify(toDos);
  
  //localStorage.setItem(저장할 이름, 저장할 객체);
  localStorage.setItem(TODO_LS, stringToDos);
}

const handleDelete = (evnet) => {
  const parent = evnet.target.parentNode; //누른 타겟의 부모노드를 저장
  parent.remove();

  // const arr = [1,2,3];
  // const arr2 = arr.filter((num)=> {
  //   return num  % 2 == 0;
  // });
  // arr2 = [2];

  const cleanedTodos = toDos.filter((todo)=>{ 
    //filter는 반환 값이 true인 것만 모아서 리스트로 만듬
    return todo.id !== parseInt(parent.id);
  })

  toDos = cleanedTodos;
  saveTodos();
}

const createToDo = (value) => {
    const newTodo = document.createElement("li");
    newTodo.innerText = value;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", handleDelete);

    newTodo.appendChild(deleteBtn);   //newTodo 안에 deleteBtn 생성
    list.appendChild(newTodo);

    const newID = toDos.length + 1;
    newTodo.id = newID;
    const tempTodo = {  //딕셔너리 형태
      value: value,
      id: newID,
    };

    toDos.push(tempTodo); //빈 array list에 만든 object를 넣음
    saveTodos();
  };

// camelCase
//addEventListener는 기본적으로 event 객체 반환
const handleSubmit = (event) => {
    event.preventDefault();   //기본적인 event를 막음(새로고침, value 초기화)
    const value = input.value;
    input.value = "";         //input의 value 값을 빈 문자열로
    createToDo(value);        //value 값으로 todo 생성
}

const init = () => {
  form.addEventListener("submit", handleSubmit);
  loadTodos();
};

init();