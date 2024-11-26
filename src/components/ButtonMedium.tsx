import {
	buttonColor,
	ButtonColor,
	buttonColorStyle,
	buttonDisabledStyle,
} from './Button';

export function ButtonMedium({
	children,
	color,
	className,
	disabled,
	onClick,
}: {
	children: JSX.Element | string;
	color?: ButtonColor;
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
}) {
	return (
		<div
			onClick={disabled ? undefined : onClick}
			className={`justify-center text-[28px] font-semibold leading-[normal] p-[28px] self-stretch rounded-[12px] flex gap-[12px] items-center ${
				disabled
					? buttonDisabledStyle
					: buttonColorStyle[color ?? buttonColor.white]
			} ${className}`}>
			{children}
		</div>
	);
}
