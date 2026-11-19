// In-memory data: lives only while the program is running.
// userId links each task to its owner in the users module.
export const tasks = [
  { id: 1, title: 'Learn ESM modules', completed: true, userId: 1 },
  { id: 2, title: 'Organize the project structure', completed: false, userId: 1 },
  { id: 3, title: 'Write the README', completed: false, userId: 2 },
];
