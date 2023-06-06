'use strict';

const btn = document.getElementById('btn');
const tbody = document.querySelector('tbody');
const todoId = document.getElementById('todoId');

btn.addEventListener('click', () => {
    
     let fetchAp = fetch('https://jsonplaceholder.typicode.com/todos/1');
     fetchAp.then(response => response.json()).then(data => {
        let row = tbody.insertRow(-1);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = data.userId;
        let cell2 = row.insertCell(1);
        cell2.innerHTML = data.id;
        let cell3 = row.insertCell(2);
        cell3.innerHTML = data.title;
        let cell4 = row.insertCell(3);
        cell4.innerHTML = data.completed;

     });
     document.getElementById('messageDiv').style.display = table;
});