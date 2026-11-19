# Task 1 — Node.js ESM Tasks & Users

A small Node.js project that manages tasks and users in memory. It uses ES Modules (`import` / `export`) and keeps Tasks and Users in separate modules.

## Requirements

- Node.js 18.11 or newer (needed for `node --watch`)

The project has no external dependencies, so there is nothing to install.

## Getting started

```bash
git clone https://github.com/zainabwatfa/task1.git
cd task1
npm start
```

## Scripts

| Command       | What it does                                             |
| ------------- | -------------------------------------------------------- |
| `npm start`   | Runs the project once (`node src/index.js`)              |
| `npm run dev` | Runs the project and restarts it whenever a file changes |

## Project structure

```
task1/
├── package.json          # "type": "module" enables ESM
├── .gitignore
└── src/
    ├── index.js          # Entry point: runs every operation and prints the result
    ├── tasks/
    │   ├── tasks.data.js     # In-memory tasks array
    │   └── tasks.service.js  # Task operations
    └── users/
        ├── users.data.js     # In-memory users array
        └── users.service.js  # User lookups
```

Each module has a `data` file that holds the array and a `service` file that holds the functions working on it. `index.js` only talks to the service files.

## Task operations

All of these are exported from `src/tasks/tasks.service.js`.

| Function                     | Description                              | Returns                      |
| ---------------------------- | ---------------------------------------- | ---------------------------- |
| `getAllTasks()`              | Lists every task                         | Array of tasks               |
| `getTaskById(id)`            | Finds one task                           | The task, or `undefined`     |
| `getTasksByUserId(userId)`   | Lists the tasks that belong to one user  | Array of tasks               |
| `addTask({ title, userId })` | Adds a new, not-yet-completed task       | The new task                 |
| `completeTask(id)`           | Marks a task as completed                | The task, or `undefined`     |
| `deleteTask(id)`             | Removes a task                           | `true` if removed, else `false` |

`addTask` throws an error if the title is empty or if `userId` does not match an existing user.

User lookups (`getAllUsers`, `getUserById`) are exported from `src/users/users.service.js`.

## Example output

Running `npm start` prints the users, the initial tasks, the result of each operation, and the final task list:

```
Added task #4: "Push the project to GitHub"
Completed task #2: "Organize the project structure"
Deleted task #1: true
Deleted task #99 (does not exist): false
Rejected invalid task: Task title is required

Final tasks:
┌─────────┬────┬──────────────────────────────────┬───────────┬────────┐
│ (index) │ id │ title                            │ completed │ userId │
├─────────┼────┼──────────────────────────────────┼───────────┼────────┤
│ 0       │ 2  │ 'Organize the project structure' │ true      │ 1      │
│ 1       │ 3  │ 'Write the README'               │ false     │ 2      │
│ 2       │ 4  │ 'Push the project to GitHub'     │ false     │ 2      │
└─────────┴────┴──────────────────────────────────┴───────────┴────────┘
```

## Note on data

The data lives only in memory. Nothing is saved to a file or a database, so every run starts again from the same initial tasks and users.
