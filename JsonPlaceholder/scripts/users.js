'use strict';

const tbody = document.querySelector('#usersTable tbody');
const usersBtn = document.getElementById('usersBtn');
const usersInput = document.getElementById('usersInput');



usersBtn.addEventListener('click', () => {
    const id = usersInput.value;
    const usersUrl = fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    usersUrl.then((response) => response.json()).then((data) => {
      const row = tbody.insertRow(-1);

      const cell1 = row.insertCell(0);
      cell1.innerHTML = data.id;
      const cell2 = row.insertCell(1);
      cell2.innerHTML = data.name;
      const cell3 = row.insertCell(2);
      cell3.innerHTML = data.username;
      const cell4 = row.insertCell(3);
      cell4.innerHTML = data.email;
    })
    document.getElementById('usersTable').style.display = 'table';
});


