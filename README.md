# Todo List Application

A straightforward and responsive Todo List application developed using React.

## Features

- Add, edit, and delete tasks
- Toggle tasks between completed and pending states
- Filter tasks by status (all, completed, pending)
- Sort tasks by date (default, ascending, descending)
- Clear all tasks
- Responsive design suitable for both mobile and desktop

## Technologies Used

- React.js
- Tailwind CSS for styling
- Context API for state management

## Project Structure

```
├── public
│   └── logo.png
├── src
│   ├── components
│   │   ├── Form.jsx
│   │   └── Input.jsx
|   |   └── ShowTodo.js
|   |   └── TodoCard.jsx
│   ├── context
│   │   └── data.js
│   ├── utils
│   │   └──filter.js
│   ├── App.js
│   ├── index.css
|   ├── main.js
│   └──  index.html
│   
├── tailwind.config.js
├── package.json
└── README.md
```

- `components/`: All the React components.
- `context/`: Context API files for state management.
- `utils/`: Utility functions like filtering tasks.
- `public/`: Public assets.
- `src/`: Main source directory for the React application.

## Testing Guidance

To verify that the Todo List Application functions correctly, follow these testing steps:

### Prerequisites

- Clone the repository to your local machine.
- Install all dependencies with `bun install`.
- Ensure the application runs locally by executing `bun run dev`.

### Testing Steps

- **Add a Task**
  - Type a task into the input field and click "Add Todo".
  - Check that the task appears in the list with the correct text.

- **Edit a Task**
  - Click on the text of a task.
  - Modify the text and press Enter.
  - Verify that the task text updates correctly.

- **Delete a Task**
  - Click the delete icon/button on a task.
  - Confirm the task is removed from the list.

- **Toggle Task Status**
  - Click the checkbox on a task to change its status.
  - Ensure the task's status updates and is displayed correctly.

- **Filter Tasks**
  - Use the filter dropdown to switch between "All", "Completed", and "Pending" views.
  - Verify that the list shows the correct tasks based on the selected filter.

- **Sort Tasks**
  - Use the sort dropdown to sort tasks by "Default", "Ascending", and "Descending".
  - Ensure tasks are sorted by date in the chosen order.

- **Clear All Tasks**
  - Click the "Clear All" button.
  - Confirm that all tasks are removed from the list.

By following these steps, you can ensure that the Todo List Application is working as intended and provides a smooth user experience.
