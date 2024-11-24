export const buttonColor = {
	white: 'white',
	black: 'black',
} as const;

export type ButtonColor = (typeof buttonColor)[keyof typeof buttonColor];

export const buttonColorStyle = {
	white: 'border-gray-100 text-gray-700',
	black: 'border-gray-800 text-white bg-gray-800',
};

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
