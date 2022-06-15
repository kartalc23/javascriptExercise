const form = document.getElementById("form");
const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
   todos.forEach((todo) => {
      addTodo(todo);
   });
}

function delTodo() {
   const todosEl = document.querySelectorAll(".li");

   todosEl.forEach((todo) => {
      todo.addEventListener("click", () => {
         todoList.removeChild(todo);
         updateLS();
      });
   });
}

function addTodo(todo) {
   let newTodoText = todoInput.value;

   if (todo) {
      newTodoText = todo.text;
   }

   if (newTodoText) {
      const li = document.createElement("li");
      li.classList.add("li");
      li.innerHTML = `
     <div class="left">
          <div class="circle"></div>
              <p class="todoItem">Todo list item</p>
          </div>
      <div class="right">
         <i class="fa fa-trash" aria-hidden="true" class="delBtn" onclick="delTodo()"></i>
      </div>`;

      let todoItem = li.querySelector(".todoItem");
      todoItem.innerHTML = newTodoText;
      todoList.appendChild(li);

      todoInput.value = "";

      li.addEventListener("click", () => {
         li.classList.toggle("completed");
         updateLS();
      });

      if (todo && todo.completed) {
         li.classList.add("completed");
         updateLS();
      }
   }

   updateLS();
}

function updateLS() {
   const todosEl = document.querySelectorAll(".li");
   const todosPriEl = document.querySelector(".li");

   const todos = [];

   todosEl.forEach((todo) => {
      todos.push({
         text: todo.innerText,
         completed: todo.classList.contains("completed"),
      });
   });

   localStorage.setItem("todos", JSON.stringify(todos));
}

form.addEventListener("submit", (e) => {
   e.preventDefault();
   addTodo();
   updateLS();
});
