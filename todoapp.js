//GETTING SELECTORS
const todoInput = document.querySelector("#todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

//Settings to prevent UI issues

//by default the submit button should be disabled
todoBtn.disabled = true;

// when user starts typing on the input field, undisable the button
todoInput.onkeyup = () => {
  if (todoInput.value.length > 0) {
    todoBtn.disabled = false;
  } else {
    todoBtn.disabled = true;
  }
};

//EVENTS AND FUNCTIONS
document.querySelector("form").onsubmit = () => {
  //prevents the form from submitting
  return false;
};

//ADDING EVENT AND FUNCTION TO EXECUTE TO THE BUTTON
todoBtn.onclick = () => {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoDiv");

  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.innerHTML = todoInput.value;
  todoDiv.appendChild(li);

  //check mark button
  const check = document.createElement("button");
  check.innerHTML = '<i class="fa fa-check"></i>';
  check.classList.add("check");
  todoDiv.appendChild(check);

  //trash button
  const trash = document.createElement("button");
  trash.innerHTML = '<i class="fa fa-trash"></i>';
  trash.classList.add("trash");
  todoDiv.appendChild(trash);

  // append tododiv to ul
  todoList.appendChild(todoDiv);

  //reset input field
  todoInput.value = "";

  //disabled submit button
  todoBtn.disabled = true;
};

//DELETING AND CHECKING EVENT AND FUNCTION ON THE UL
todoList.onclick = (e) => {
  //stores our even target in a variable
  const targ = e.target;

  //DELETE
  //if the target of our event has a class equal to trash
  if (targ.classList[0] === "trash") {
    const todo = targ.parentElement;
    todo.remove();
  }

  //CHECKLIST
  if (targ.classList[0] === "check") {
    const todo = targ.parentElement;
    todo.classList.toggle("crossed");
  }
};
