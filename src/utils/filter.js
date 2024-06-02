export const allTodos = (todos) => {
	return todos;
};

export const completedTodos = (todos) => {
	return todos.filter((todo) => todo.completed);
};

export const pendingTodos = (todos) => {
	return todos.filter((todo) => !todo.completed);
};
