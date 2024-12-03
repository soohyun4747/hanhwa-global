import { Check } from 'icons/Check';
import { Dispatch, SetStateAction } from 'react';

export const checkboxValue = {
	selected: 1,
	unSelected: 0,
	inDeterminate: -1,
} as const;

export type CheckboxValue = (typeof checkboxValue)[keyof typeof checkboxValue];

const checkboxValueStyles = {
	[checkboxValue.unSelected]: { style: 'border-gray-500', icon: null },
	[checkboxValue.selected]: {
		style: 'border-gray-800 bg-gray-800',
		icon: <Check fill='white' />,
	},
	[checkboxValue.inDeterminate]: {
		style: 'border-gray-800 bg-gray-800',
		icon: <div className='w-[16px] h-[2.6px] rounded-full bg-white' />,
	},
};

export const getCheckValue = (value: boolean) => {
	if (value === true) {
		return checkboxValue.selected;
	} else {
		return checkboxValue.unSelected;
	}
};

// export const getCheckValue = (value: CheckboxValue) => {
// 	if (value === checkboxValue.unSelected) {
// 		return checkboxValue.selected;
// 	} else {
// 		return checkboxValue.unSelected;
// 	}
// };

export function Checkbox({
	value = 0,
	onClick,
}: {
	value: CheckboxValue;
	onClick?: () => void;
}) {
	return (
		<div
			onClick={onClick}
			className={`w-[32px] h-[32px] rounded-[4px] border-2 flex items-center justify-center ${checkboxValueStyles[value].style}`}>
			{checkboxValueStyles[value].icon}
		</div>
	);
}
