import React from 'react';
import { FaCheckCircle, FaTrash, FaExchangeAlt } from 'react-icons/fa';
import { CgSandClock } from 'react-icons/cg';

function TodoCard({ todo, onStatusChange, onDelete }) {
	return (
		<div className='w-full mb-4'>
			<div className='w-full flex flex-col md:flex-row justify-between items-center gap-8 p-4 rounded-lg bg-[#2C3E50] shadow-lg'>
				<div className='flex flex-col md:flex-row items-start md:items-center gap-4 w-full'>
					<div className='flex flex-col items-start flex-grow'>
						<h1 className='text-white'>{todo.title}</h1>
					</div>
					<div className='flex flex-col items-start flex-grow'>
						<h1 className='text-white'>{todo.date}</h1>
					</div>
					<div className='flex items-center gap-2 flex-grow'>
						{todo.completed ? (
							<FaCheckCircle className='text-green-500 text-2xl' />
						) : (
							<CgSandClock className='text-red-500 text-2xl' />
						)}
						<span className='text-white'>
							{todo.completed ? 'Completed' : 'Pending'}
						</span>
					</div>
				</div>
				<div className='flex items-center gap-2 mt-4 md:mt-0'>
					<button
						onClick={onStatusChange}
						className='text-yellow-500 hover:text-yellow-700 hover:bg-yellow-200 rounded-full p-1'
					>
						<FaExchangeAlt className='text-xl' />
					</button>
					<button
						onClick={onDelete}
						className='text-red-500 hover:text-red-700 hover:bg-red-200 rounded-full p-1'
					>
						<FaTrash className='text-xl' />
					</button>
				</div>
			</div>
		</div>
	);
}

export default TodoCard;
