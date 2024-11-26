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

export function Button({
	label,
	icon,
	color,
	onClick,
}: {
	label: string;
	icon?: JSX.Element;
	color?: ButtonColor;
	onClick?: () => void;
}) {
	return (
		<div
			onClick={onClick}
			className={`px-[36px] py-[16px] flex gap-[12px] rounded-full items-center border-2 w-fit ${
				buttonColorStyle[color ?? buttonColor.white]
			}`}>
			<div className='text-[26px] font-semibold leading-[32px]'>
				{label}
			</div>
			{icon}
		</div>
	);
}
