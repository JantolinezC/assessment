import fetch from 'node-fetch';
import { getServerURL } from './task1.js';

async function addUser(firstName, lastName, email) {
  const url = `${getServerURL()}users`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ first_name: firstName, last_name: lastName, email: email })
    });

    if (response.ok) {
      const user = await response.json();
      console.log(user);  // Mostrar el usuario agregado para verificar la salida.
    } else {
      console.error(`Error adding user: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error connecting to server:', error);
  }
}

// Llamar a la función para agregar un usuario específico.
addUser('Kai', 'Nathaniel', 'kai.n@example.org');

  