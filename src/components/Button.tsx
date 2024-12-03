import { CSSProperties } from 'react';

export const buttonColor = {
	white: 'white',
	black: 'black',
	red: 'red',
} as const;

export type ButtonColor = (typeof buttonColor)[keyof typeof buttonColor];

export const buttonColorStyle = {
	white: 'border-2 border-gray-100 text-gray-700 bg-white',
	black: 'border-2 border-gray-800 text-white bg-gray-800',
	red: 'border-2 border-status-error text-status-error bg-white',
};

export const buttonDisabledStyle =
	'border border-gray-100 bg-gray-50 text-gray-400';

export interface ButtonProps {
	children: JSX.Element | string;
	color?: ButtonColor;
	disabled?: boolean;
	style?: CSSProperties;
	onClick?: () => void;
}

export function Button(props: ButtonProps) {
	return (
		<div
			style={props.style}
			onClick={props.disabled ? undefined : props.onClick}
			className={`px-[36px] py-[16px] flex gap-[12px] rounded-full items-center border-2 w-fit text-[26px] font-semibold leading-[32px] ${
				props.disabled
					? buttonDisabledStyle
					: buttonColorStyle[props.color ?? buttonColor.white]
			}`}>
			{props.children}
		</div>
	);
}
