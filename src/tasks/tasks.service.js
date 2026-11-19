import { tasks } from './tasks.data.js';
import { getUserById } from '../users/users.service.js';

// Next id continues from the highest id already in the data.
let nextId = Math.max(0, ...tasks.map((task) => task.id)) + 1;

export function getAllTasks() {
  return tasks;
}

export function getTaskById(id) {
  return tasks.find((task) => task.id === id);
}

export function getTasksByUserId(userId) {
  return tasks.filter((task) => task.userId === userId);
}

export function addTask({ title, userId }) {
  if (typeof title !== 'string' || title.trim() === '') {
    throw new Error('Task title is required');
  }
  if (!getUserById(userId)) {
    throw new Error(`User with id ${userId} does not exist`);
  }

  const task = { id: nextId++, title: title.trim(), completed: false, userId };
  tasks.push(task);
  return task;
}

// Returns the updated task, or undefined if no task has this id.
export function completeTask(id) {
  const task = getTaskById(id);
  if (task) {
    task.completed = true;
  }
  return task;
}

// Returns true if a task was removed, false if no task has this id.
export function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    return false;
  }
  tasks.splice(index, 1);
  return true;
}
