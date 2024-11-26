import { Dispatch, SetStateAction, useState } from 'react';
import { TextField } from './TextField';
import { VisibilityOn } from 'icons/VisibilityOn';
import { VisibilityOff } from 'icons/VisibilityOff';

export function TextfieldPassword({
	value,
	label,
	placeholder,
	className,
	onChange,
	onClick,
}: {
	value: string;
	label?: string;
	placeholder?: string;
	className?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onClick?: React.MouseEventHandler<HTMLInputElement>;
}) {
	const [visibility, setVisibility] = useState<boolean>(false);

	return (
		<div className='flex flex-col gap-[24px] text-gray-800 text-[24px] font-medium leading-[normal]'>
			{label}
			<TextField
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onClick={onClick}
				inputType={visibility ? 'text' : 'password'}
				className={className}
				element={
					visibility ? (
						<VisibilityOn onClick={() => setVisibility(false)} />
					) : (
						<VisibilityOff onClick={() => setVisibility(true)} />
					)
				}
			/>
		</div>
	);
}
