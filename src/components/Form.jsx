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
		<div className='flex justify-center items-center w-full p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black'>
			<form
				className='relative grid grid-cols-8 gap-4 w-full items-center bg-[#333A49] px-6 py-8 rounded-xl shadow-lg'
				onSubmit={handleSubmit}
			>
				{/* Decorative Background Elements */}
				<div className='absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl'>
					<div className='absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent'></div>
					<div className='absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent'></div>
				</div>

				{/* Decorative Icon */}
				<div className='col-span-8 flex justify-center mb-4'>
					<svg
						className='w-12 h-12 text-[#B3C5EF]'
						fill='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12C24 5.373 18.627 0 12 0zm0 21.917c-5.471 0-9.917-4.446-9.917-9.917C2.083 6.529 6.529 2.083 12 2.083c5.471 0 9.917 4.446 9.917 9.917 0 5.471-4.446 9.917-9.917 9.917z' />
						<path d='M12.333 7.292h-1.666v5.333L16.083 15l.917-1.417-4.667-2.583z' />
					</svg>
				</div>

				<Input
					type='text'
					placeholder='Enter your todo here...'
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					className='col-span-4 p-3 bg-[#444C5C] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 z-10'
				/>
				<Input
					type='date'
					placeholder='dd-mm-yyyy'
					className='col-span-3 p-3 bg-[#444C5C] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 z-10'
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
				<button
					type='submit'
					className='bg-[#5262f3] text-white py-3 rounded-lg flex items-center justify-center hover:bg-blue-800 col-span-1 transition duration-300 ease-in-out transform hover:scale-105 z-10'
				>
					<svg
						stroke='currentColor'
						fill='currentColor'
						strokeWidth='0'
						t='1551322312294'
						viewBox='0 0 1024 1024'
						version='1.1'
						height='1.5em'
						width='1.5em'
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
