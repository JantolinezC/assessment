import fetch from 'node-fetch';
import { getServerURL } from './task1.js';

async function deleteUser(id) {
  const url = `${getServerURL()}users/${id}`;

  try {
    const response = await fetch(url, { method: 'DELETE' });

    if (response.status === 200 || response.status === 204) {
      console.log(`User with ID ${id} deleted successfully.`);
    } else if (response.status === 404) {
      console.log(`User with ID ${id} not found, cannot delete.`);
    } else {
      console.error(`Error deleting user with ID ${id}: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

// Función principal para eliminar usuarios
(async () => {
  await deleteUser(5);
  await deleteUser(6);
})();



