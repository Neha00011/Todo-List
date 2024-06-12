import React from 'react';
import { FaCheckCircle, FaTrash, FaExchangeAlt } from 'react-icons/fa';
import { CgSandClock } from 'react-icons/cg';

function TodoCard({ todo, onStatusChange, onDelete }) {
	return (
		<div className='w-full mb-6'>
			<div className='w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 p-4 md:p-6 rounded-xl bg-gradient-to-r from-[#34495e] to-[#2c3e50] shadow-2xl relative overflow-hidden'>
				<div className='flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 w-full z-10'>
					<div className='flex flex-col items-start flex-grow'>
						<h1 className='text-white text-base md:text-xl font-semibold'>
							{todo.title}
						</h1>
					</div>
					<div className='flex flex-col items-start flex-grow'>
						<h1 className='text-white text-base md:text-xl font-semibold'>
							{todo.date}
						</h1>
					</div>
					<div className='flex items-center gap-1 md:gap-2 flex-grow'>
						{todo.completed ? (
							<FaCheckCircle className='text-green-500 text-lg md:text-2xl' />
						) : (
							<CgSandClock className='text-red-500 text-lg md:text-2xl' />
						)}
						<span className='text-white text-sm md:text-lg'>
							{todo.completed ? 'Completed' : 'Pending'}
						</span>
					</div>
				</div>
				<div className='flex items-center gap-1 md:gap-2 mt-4 md:mt-0 z-10'>
					<button
						onClick={onStatusChange}
						className='text-yellow-500 hover:text-yellow-700 hover:bg-yellow-200 rounded-full p-1 md:p-2 transition duration-300 ease-in-out transform hover:scale-110'
					>
						<FaExchangeAlt className='text-lg md:text-2xl' />
					</button>
					<button
						onClick={onDelete}
						className='text-red-500 hover:text-red-700 hover:bg-red-200 rounded-full p-1 md:p-2 transition duration-300 ease-in-out transform hover:scale-110'
					>
						<FaTrash className='text-lg md:text-2xl' />
					</button>
				</div>
			</div>
		</div>
	);
}

export default TodoCard;
