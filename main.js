'use strict';

const todo_form = document.getElementById("todo_form");
const todo_input = todo_form.querySelector(".input_text");
const todo_ul = document.querySelector("ul");
const todo_check = document.querySelector(".check");
const todo_trash = document.querySelectorAll(".trash");

function todo_submit(event) {
    event.preventDefault();
    const newTodo = todo_input.value;
    todo_create(newTodo);
}

function todo_create(newTodo) {
    const li = document.createElement("li");
    const btnCheck = document.createElement("button");
    const btnTrash = document.createElement("button");
    const iconCheck = document.createElement("i");
    const iconTrash = document.createElement("i");

    iconCheck.classList.add("fas", "fa-check");
    iconTrash.classList.add("fas", "fa-trash-alt");

    
    btnCheck.classList.add("btn", "check");
    btnTrash.classList.add("btn", "trash");
    
    li.innerText = newTodo;

    btnCheck.appendChild(iconCheck);
    btnTrash.appendChild(iconTrash);

    btnCheck.addEventListener("click", todo_complete);
    btnTrash.addEventListener("click", todo_delete);

    li.appendChild(btnCheck);
    li.appendChild(btnTrash);
    todo_ul.appendChild(li);
}

function todo_complete(event) {
    const li = event.target.parentElement.parentElement;
    li.classList.toggle("done");
}

function todo_delete(event) {
    const li = event.target.parentElement.parentElement;
    li.remove();
}


todo_form.addEventListener("submit", todo_submit);

