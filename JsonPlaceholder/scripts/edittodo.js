'use strict';

const todoIdEl = document.getElementById('todoId');
const addBtnEl = document.getElementById('addBtn');

addBtnEl.addEventListener('click', () => {
    const todoId = todoIdEl.value;
    const todoApi = fetch(` http://localhost:3000/todos/${todoId}`);
    todoApi.then((response) => response.json()).then((data) => {
        document.getElementById('userId').value = data.userId;
        document.getElementById('title').value = data.title;
        document.getElementById('completed').value = data.completed;
        document.getElementById('id').value = data.id;
    })
});

updateBtn.addEventListener('click', () => {
    const updatedFile = {
        
    }
})
