import {
  addTask,
  completeTask,
  deleteTask,
  getAllTasks,
  getTasksByUserId,
} from './tasks/tasks.service.js';
import { getAllUsers, getUserById } from './users/users.service.js';

console.log('Users:');
console.table(getAllUsers());

console.log('Initial tasks:');
console.table(getAllTasks());

const newTask = addTask({ title: 'Push the project to GitHub', userId: 2 });
console.log(`Added task #${newTask.id}: "${newTask.title}"`);

const completed = completeTask(2);
console.log(`Completed task #${completed.id}: "${completed.title}"`);

console.log(`Deleted task #1: ${deleteTask(1)}`);
console.log(`Deleted task #99 (does not exist): ${deleteTask(99)}`);

try {
  addTask({ title: '', userId: 1 });
} catch (error) {
  console.log(`Rejected invalid task: ${error.message}`);
}

const nour = getUserById(2);
console.log(`Tasks for ${nour.name}:`);
console.table(getTasksByUserId(nour.id));

console.log('Final tasks:');
console.table(getAllTasks());
