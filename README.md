# Todo List Application

A simple and responsive Todo List application built with React.

## Features

- Add, edit, and delete todos
- Mark todos as completed or pending
- Filter todos by status (all, completed, pending)
- Sort todos by date (default, ascending, descending)
- Clear all todos
- Responsive design for mobile and desktop

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

- `components/`: Contains all the React components.
- `context/`: Contains context API files for state management.
- `utils/`: Contains utility functions such as filtering todos.
- `public/`: Contains the public assets.
- `src/`: Main source directory for the React application.

## Testing Guidance

To ensure the Todo List Application works as expected, follow these testing guidelines:

### Prerequisites

- Clone the repository to your local machine.
- Ensure all dependencies are installed by running `bun install`.
- Make sure the application is running locally by executing `bun run dev`.

### Testing Steps

- **Add a Todo**
  - Enter a todo in the input field and click the "Add Todo" button.
  - Verify the todo appears in the list with the correct text.

- **Edit a Todo**
  - Click on the text of an existing todo.
  - Edit the text and press Enter.
  - Ensure the todo text updates correctly in the list.

- **Delete a Todo**
  - Click the delete icon/button on a todo item.
  - Confirm that the todo is removed from the list.

- **Mark a Todo as Completed/Pending**
  - Click the checkbox on a todo item to toggle its status.
  - Check that the todo's status updates and is reflected correctly.

- **Filter Todos**
  - Use the filter dropdown to switch between "All", "Completed", and "Pending" views.
  - Verify that the list displays the correct todos based on the selected filter.

- **Sort Todos**
  - Use the sort dropdown to sort todos by "Default", "Ascending", and "Descending".
  - Ensure that todos are sorted by their date in the selected order.

- **Clear All Todos**
  - Click the "Clear All" button.
  - Confirm that all todos are removed from the list.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various todo list applications available online. Specially [Todoist](https://todotify.vercel.app/)
by <https://github.com/abdellatif-laghjaj> for the UI idea.
- Thanks to [Tailwind CSS](https://tailwindcss.com/) for making styling a breeze.
