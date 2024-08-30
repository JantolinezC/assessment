// task2.js
import fetch from 'node-fetch'; //Para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. 
//En este caso, listar los usuarios de la API. 

export function listUsers() {
  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
      const formattedUsers = users.map(({ id, first_name, last_name, email }) =>
        `{\n  id: ${id},\n  first_name: '${first_name}',\n  last_name: '${last_name}',\n  email: '${email}'\n}`
      );
      console.log(`[\n${formattedUsers.join(',\n')}\n]`);
    })
    .catch(error => console.error('Error fetching users:', error));
}