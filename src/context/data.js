import { createContext, useContext } from 'react';

const initialTodos = [
	{
		id: 0,
		title: '',
		date: '',
		completed: false,
	},
];

export const dataContext = createContext({
	todos: initialTodos,
	setTodo: () => {},
	deleteTodo: () => {},
	toggleComplete: () => {},
	deleteAllTodo: () => {},
});

export const DataProvider = dataContext.Provider;

export default function useData() {
	return useContext(dataContext);
}
