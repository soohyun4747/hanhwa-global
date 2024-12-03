import { CSSProperties, Dispatch, SetStateAction } from 'react';

export function TextField({
	value,
	placeholder,
	element,
	inputType,
	style,
	onChange,
	onClick,
}: {
	value: string;
	placeholder?: string;
	element?: JSX.Element;
	inputType?: React.HTMLInputTypeAttribute;
	style?: CSSProperties;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onClick?: React.MouseEventHandler<HTMLInputElement>;
}) {
	return (
		<div
			style={style}
			className={`h-[92px] p-[28px] flex items-center justify-between self-stretch rounded-[12px] border-2 border-gray-200 bg-white`}>
			<input
				className='placeholder:text-gray-400 placeholder:font-medium w-full text-[28px] font-semibold leading-[130%] focus:outline-none'
				placeholder={placeholder}
				type={inputType}
				onChange={onChange}
				onClick={onClick}
				value={value}
			/>
			{element}
		</div>
	);
}
