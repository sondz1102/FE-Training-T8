// Truy cập theo id
// const title = document.getElementById("main-title");
// title.style.color = "red";
// title.textContent = 'Hello'

// Truy cập qua class name
const items = document.getElementsByClassName("item");
console.log(items);

// Truy cập qua tagname
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// console.log(items[0]);
// console.log(items[1]);

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i]);
}

// Truy cập qua CSS Selector
const item = document.querySelector(".item");
const allItems = document.querySelectorAll(".item");
console.log(allItems);

// for (let i = 0; i < allItems.length; i++) {
//   console.log(allItems[i]);
// }

allItems.forEach((item) => {
  console.log(item);
});

//  Thay đổi style của phần tử
const title = document.getElementById("main-title");
title.style.color = "blue";
title.style.backgroundColor = "red";

// Thay đổi thuộc tính của phần tử
const link = document.querySelector("a");
link.href = "https://tiktok.com";
link.target = "_blank";

link.setAttribute("data-index", 1);

// Thay đổi nội dung của phần tử
link.textContent = "Tiktok";

console.log(link);

// Thay đổi HTML
title.innerHTML = "<span>Hello</span>";

// Thêm/Xoá/Chuyển đổi class name
const item1 = document.querySelector(".item");
item1.classList.add("is-active"); // Thêm classs
item1.classList.remove("is-active"); // Xoá class
item1.classList.toggle("is-active"); // Toggle class

// Kiểm tra class
if (item1.classList.contains("is-active")) {
  console.log("có chứa is-active");
} else {
  console.log("không chứa is-active");
}

// Xoá phần tử
item1.remove();

// Tạo ra phần tử mới
const element = document.createElement("p");
element.textContent = "Đây là phần tử được tạo bởi JS";
element.setAttribute("custom-attr", "new-element");
element.style.color = "red";
element.classList.add("child");

// console.log(element);
// const parentEl = document.getElementById("parent-element");
// parentEl.appendChild(element);

// // Tìm phần tử cha
// const child = document.querySelector(".child");
// const parent = child.parentElement;
// console.log(parent);

// const rootElement = child.closest(".root-element");
// console.log(rootElement);

// Tìm phần tử con
const parentEl = document.getElementById("parent-element");
const childs = parentEl.children;
console.log(childs);

const firstElement = parentEl.firstElementChild;
const lastElement = parentEl.lastElementChild;

// console.log(firstElement);
// console.log(lastElement);

const child2 = document.querySelector(".child-2");
const nextElement = child2.nextElementSibling;
const prevElement = child2.previousElementSibling;
// console.log(nextElement);
console.log(prevElement);

// Handle event
const button = document.querySelector(".btn");
// console.log(button);

// attach event for button
// button.onclick = function () {
//   console.log("Clicked!");
// };

// button.addEventListener("click", () => {
//   button.style.backgroundColor = "red";
// });

// const input = document.querySelector(".input");

// // input.addEventListener("change", (event) => {
// //   console.log(event.target.value);
// // });

// input.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

// const checkbox = document.getElementById("check-box");
// checkbox.addEventListener("change", () => {
//   if (checkbox.checked) {
//     console.log(checkbox.value);
//   } else {
//     console.log("uncheck");
//   }
// });

const todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const submitBtn = document.getElementById("submit-btn");
const filtersTodo = document.querySelectorAll('input[name="filter"]');
let editingIndex = -1;
let currentFilter = "all";

filtersTodo.forEach((radio) => {
  radio.addEventListener("change", function () {
    currentFilter = this.value;
    render();
  });
});

function getFilterTodos() {
  switch (currentFilter) {
    case "completed":
      return todos.filter((todo) => todo.isCompleted);

    case "pending":
      return todos.filter((todo) => !todo.isCompleted);

    default:
      return todos;
  }
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = todoInput.value.trim();
  if (!title) return;

  // edit mode
  if (editingIndex >= 0) {
    todos[editingIndex].title = title;
    editingIndex = -1;
    submitBtn.textContent = "Thêm";
  } else {
    // add mode
    todos.unshift({
      id: Date.now(),
      title,
      isCompleted: false,
    });
  }

  saveToLocalStorage();
  todoInput.value = "";
  todoInput.focus();
  render();
});

todoList.addEventListener("click", function (event) {
  const target = event.target;

  const liElement = target.closest(".todo-item");
  const index = liElement.dataset.index;
  const id = liElement.dataset.id;

  if (target.tagName === "SPAN") {
    const todo = todos.find((todo) => todo.id === +id);
    todo.isCompleted = !todo.isCompleted;
  }

  if (target.classList.contains("edit-btn")) {
    submitBtn.textContent = "Sửa";
    todoInput.value = todos[index].title;
    editingIndex = index;
    todoInput.focus();
  }

  if (target.classList.contains("delete-btn")) {
    if (confirm("Bạn có muốn xoá công việc này không")) {
      todos.splice(index, 1);
      submitBtn.textContent = "Thêm";
      editingIndex = -1;
      todoInput.value = "";
    }
  }

  saveToLocalStorage();
  render();
});

function render() {
  const filteredTodos = getFilterTodos();

  const htmls = filteredTodos
    .map(
      (todo, index) => `
  <li data-id=${todo.id} data-index=${index} class="todo-item ${
        todo.isCompleted ? "is-completed" : ""
      }"><span class="todo-text">${todo.title}</span>
      
      <div class="action-button">
        <button type="button" class="edit-btn">Sửa</button>
        <button type="button" class="delete-btn">Xoá</button>
      </div>
      </li>  
`
    )
    .join("");

  todoList.innerHTML = htmls;
}

render();
