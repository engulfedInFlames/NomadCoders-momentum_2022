const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];

const TODOS_KEY = "toDos";

function deleteToDo() {
  const item = this.parentElement;
  //deleteToDo(event) ... event.target.parentElement
  item.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(item.id));
  saveToDo();
}

function saveToDo() {
  //변수를 받게 되면 저장되는 item이 입력 때마다 추가가 아닌, 대체된다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(Obj) {
  const item = document.createElement("li");
  item.id = Obj.id;
  const itemSpan = document.createElement("span");
  itemSpan.innerText = Obj.text;
  const itemButton = document.createElement("button");
  itemButton.innerHTML = "❌";
  itemButton.addEventListener("click", deleteToDo);
  item.appendChild(itemButton);
  item.appendChild(itemSpan);
  toDoList.appendChild(item);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  //toDos가 const일 때는 element의 값을 변경하거나 추가는 가능
  //type 자체를 바꾸거나 다른 주소를 가리키게 하는 것은 불가능
  parsedToDos.forEach(paintToDo);
}
