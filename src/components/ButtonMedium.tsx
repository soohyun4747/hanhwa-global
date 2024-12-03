import {
	buttonColor,
	buttonColorStyle,
	buttonDisabledStyle,
	ButtonProps,
} from './Button';

export function ButtonMedium(props: ButtonProps) {
	return (
		<div
			style={props.style}
			onClick={props.disabled ? undefined : props.onClick}
			className={`justify-center text-[28px] font-semibold leading-[normal] p-[28px] self-stretch rounded-[12px] flex gap-[12px] items-center ${
				props.disabled
					? buttonDisabledStyle
					: buttonColorStyle[props.color ?? buttonColor.white]
			}`}>
			{props.children}
		</div>
	);
}
