import fetch from 'node-fetch';
import { getServerURL } from './task1.js';

export async function addUser(firstName, lastName, email) {
  const url = getServerURL() + '/users';

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Error fetching users: ${response.statusText}`);
    }

    const users = await response.json();

    const maxId = users.reduce((max, user) => Math.max(max, user.id), 0);
    const newUserId = maxId + 1;
    
    const newUser = {
      id: newUserId.toString(), 
      first_name: firstName, 
      last_name: lastName, 
      email: email
    };

    const postResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    if (!postResponse.ok) {
      throw new Error(`Error adding user: ${postResponse.statusText}`);
    }

    const addedUser = await postResponse.json();

    const output = `{
      id: ${Number(addedUser.id)},
      first_name: '${addedUser.first_name}',
      last_name: '${addedUser.last_name}',
      email: '${addedUser.email}'
    }`;

    console.log(output);

  } catch (error) {
    console.error('Error connecting to server:', error);
  }
}
addUser('Kai', 'Nathaniel', 'kai.n@example.org');