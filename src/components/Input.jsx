import { useId } from 'react';
import { forwardRef } from 'react';

const Input = forwardRef(function Input(
	{ value, placeholder, type, required, disabled, onChange, className },
	ref
) {
	const id = useId();
	return (
		<div className={`flex flex-col shadow-lg shadow-[#828ef882]  ${className}`}>
			<input
				id={id}
				ref={ref}
				type={type}
				placeholder={placeholder}
				required={required}
				disabled={disabled}
				onChange={onChange}
				value={value}
				className='p-2 border-[#828DF8] rounded-lg bg-[#0F1729] text-[#B3C5EF] border-2 focus:outline-none focus:border-[#828DF8] shadow-[#333A49]'
			/>
		</div>
	);
});
export default Input;
