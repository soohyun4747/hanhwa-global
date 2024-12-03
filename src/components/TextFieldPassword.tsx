import { CSSProperties, useState } from 'react';
import { TextField } from './TextField';
import { VisibilityOn } from 'icons/VisibilityOn';
import { VisibilityOff } from 'icons/VisibilityOff';
import { AlertMessage } from './AlertMessage';
import { Close } from 'icons/Close';

export function TextfieldPassword({
	value,
	label,
	placeholder,
	style,
	error,
	onChange,
	onClick,
}: {
	value: string;
	label?: string;
	placeholder?: string;
	style?: CSSProperties;
	error?: boolean;
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
				style={{ borderColor: error ? '#FF3B30' : '#D9D9D9', ...style }}
				element={
					visibility ? (
						<VisibilityOn onClick={() => setVisibility(false)} />
					) : (
						<VisibilityOff onClick={() => setVisibility(true)} />
					)
				}
			/>
			{error && (
				<AlertMessage
					icon={
						<Close
							width={24}
							height={24}
							fill='#FF3B30'
						/>
					}
					label={'Passwords do not match'}
				/>
			)}
		</div>
	);
}
