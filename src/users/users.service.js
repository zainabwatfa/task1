import { users } from './users.data.js';

export function getAllUsers() {
  return users;
}

export function getUserById(id) {
  return users.find((user) => user.id === id);
}
