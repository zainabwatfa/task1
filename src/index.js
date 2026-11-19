import { getAllTasks } from './tasks/tasks.service.js';
import { getAllUsers } from './users/users.service.js';

console.log('Users:');
console.table(getAllUsers());

console.log('Tasks:');
console.table(getAllTasks());
