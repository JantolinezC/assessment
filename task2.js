// task2.js
import fetch from 'node-fetch';

export function listUsers() {
  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {

      const formattedUsers = users.map(user => {
        return `{\n  id: ${user.id},\n  first_name: '${user.first_name}',\n  last_name: '${user.last_name}',\n  email: '${user.email}'\n}`;
      });
      console.log('[\n' + formattedUsers.join(',\n') + '\n]');
    })
    .catch(error => console.error('Error fetching users:', error));
}