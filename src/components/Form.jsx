import React, { useState } from 'react';
import Input from './Input';
import useData from '../context/data';

function Form() {
	const [newTodo, setNewTodo] = useState('');
	const [date, setDate] = useState('');

	const { setTodo } = useData();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newTodo || !date) {
			alert('Please fill all the fields');
			return;
		}

		setTodo({
			id: Date.now(),
			title: newTodo.trim(),
			date,
			completed: false,
		});

		setNewTodo('');
		setDate('');
	};

	return (
		<div className='flex justify-center items-center w-full'>
			<form
				className='grid grid-cols-8 gap-4 w-full items-center'
				onSubmit={handleSubmit}
			>
				<Input
					type='text'
					placeholder='Enter your todo here...'
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					className='col-span-4'
				/>
				<Input
					type='date'
					placeholder='dd-mm-yyyy'
					className='col-span-3'
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
				<button
					type='submit'
					className='bg-[#828DF8] text-white py-4 rounded-lg flex items-center justify-center hover:bg-blue-800 col-span-1'
				>
					<svg
						stroke='currentColor'
						fill='currentColor'
						strokeWidth='0'
						t='1551322312294'
						viewBox='0 0 1024 1024'
						version='1.1'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'
					>
						<defs></defs>
						<path d='M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z'></path>
						<path d='M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z'></path>
					</svg>
				</button>
			</form>
		</div>
	);
}

export default Form;
