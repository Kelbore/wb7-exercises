'use strict';

document.getElementById('addBtn').addEventListener('click', ()=> {
   const updatedData = {
    userId: document.getElementById('userId').value,
    title: document.getElementById('title').value,
    completed: false
   }

   fetch('http://localhost:3000/todos', {
    method: 'POST',
    body: JSON.stringify(updatedData),
    headers: {'Content-type': 'application/json; charset = utf-8'}
   }).then((response) => response.json()).then((data) => {
    console.log(data)
})
})

