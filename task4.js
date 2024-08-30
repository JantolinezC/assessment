import fetch from 'node-fetch';
import { getServerURL } from './task1.js';

export async function deleteUser(id) {
  const url = getServerURL() + '/users/' + id;

  try {
    
    const deleteResponse = await fetch(url, { method: 'DELETE' });

    if (deleteResponse.status === 200 || deleteResponse.status === 204) {
      console.log(`User with ID ${id} deleted successfully.`);
    } else if (deleteResponse.status === 404) {
      console.log(`User with ID ${id} not found, cannot delete.`);
      return;
    } else {
      console.error(`Error deleting user with ID ${id}: ${deleteResponse.statusText}`);
      return;
    }

    const getResponse = await fetch(getServerURL() + '/users');

    if (!getResponse.ok) {
      throw new Error(`Error fetching updated user list: ${getResponse.statusText}`);
    }

    const users = await getResponse.json();

    const formattedUsers = users.map((user) => ({
      id: Number(user.id),
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    }));

    const output = JSON.stringify(formattedUsers, null, 2)
      .replace(/"([^"]+)":/g, "$1:")
      .replace(/"/g, "'"); 

    
    console.log(output);

  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

(async () => {
  await deleteUser(5);
  await deleteUser(6);
})();