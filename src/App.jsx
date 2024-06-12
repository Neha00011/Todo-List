import { useEffect, useState } from 'react';
import Form from './components/Form';
import Show from './components/Show';
import { DataProvider } from './context/data';
import { Helmet } from 'react-helmet';

function App() {
	const [todos, setTodos] = useState([]);

	const setTodo = (todo) => {
		const titleRegex = /^(?!\s*$).{1,30}$/;
		const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

		if (
			todos
				.map((item) => item.title.toLowerCase())
				.includes(todo.title.toLowerCase())
		) {
			alert('Todo already exists');
			return;
		}

		if (!titleRegex.test(todo.title)) {
			alert(
				'Please enter a valid todo title (1-30 characters, not only whitespace)'
			);
			return;
		}

		if (!dateRegex.test(todo.date)) {
			alert('Please enter a valid date (YYYY-MM-DD)');
			return;
		}

		setTodos([...todos, todo]);
	};

	const deleteAllTodo = () => {
		setTodos([]);
	};

	const toggleComplete = (id) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem('todos'));

		if (todos && todos.length > 0) {
			setTodos(todos);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<DataProvider
			value={{
				todos,
				setTodo,
				deleteTodo,
				toggleComplete,
				deleteAllTodo,
			}}
		>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Todo List </title>
				<meta
					name='description'
					content=' A simple Todo List application built using ReactJS. Manage your tasks efficiently with our Todo List application.'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					name='author'
					content='Neha Panda'
				/>
				<meta
					name='keywords'
					content='Todo List, React, ReactJS, ReactJS Project, React Project, React Todo List, Todo List App, React Todo List App'
				/>
				<link
					rel='icon'
					href='/logo.png'
				/>
				<meta
					property='og:title'
					content='Todo List Application'
				/>
				<meta
					property='og:description'
					content='A simple Todo List application built using ReactJS. Manage your tasks efficiently with our Todo List application.'
				/>
				<meta
					property='og:image'
					content='/logo.png'
				/>
			</Helmet>
			<div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black'>
				<div className='flex flex-col gap-4 bg-[#333A49] md:w-1/2 border-zinc-300 border-2 justify-center items-center rounded-xl p-8 shadow-lg shadow-[#ffffff2b]'>
					<h1 className='text-4xl font-serif text-[#B3C5EF] mb-4'>Todo App</h1>
					{/* Input Field */}
					<div className='w-full'>
						<Form />
					</div>
					{/* Show Field */}
					<div className='w-full mt-4'>
						<Show />
					</div>
				</div>
			</div>
		</DataProvider>
	);
}

export default App;
