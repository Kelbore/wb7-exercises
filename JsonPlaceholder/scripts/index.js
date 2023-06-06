'use strict';

const goBtnEl = document.getElementById('goBtn');
const todoInputEl = document.getElementById('todoInput');
const todoEl = document.getElementById('todo');

goBtnEl.addEventListener('click', () => { 
     const todoId = todoInputEl.value;
     const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
     fetch(url).then((response) => response.json()).then((todo) => {
      todoEl.innerHTML = todo.title;
        })
});