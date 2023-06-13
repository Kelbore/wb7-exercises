'use strict';

const todoIdEl = document.getElementById('todoId');
const addBtnEl = document.getElementById('addBtn');
const cancelBtn = document.getElementById('cancelBtn');

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
    const id = todoIdEl.value;
    const updatedFile = {
      id: todoIdEl.value,  
      userId: document.getElementById('userId').value,
      title: document.getElementById('title').value,
      completed: document.getElementById('completed').value
    }

    fetch(` http://localhost:3000/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedFile),
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    }).then((response) => response.json()).then((data) => {
        console.log(data);
    })
});

cancelBtn.addEventListener('click', () => {
    window.location.href = './index.html';
})
