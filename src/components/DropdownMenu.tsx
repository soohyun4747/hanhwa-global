import { Check } from 'icons/Check';
import { CSSProperties } from 'react';

export interface MenuItem {
	label: string;
	selected?: boolean;
	onClick?: () => void;
}

interface DropdownMenuProps {
	lists: MenuItem[][];
	style?: CSSProperties;
}

export function DropdownMenu(props: DropdownMenuProps) {
	return (
		<div
			style={props.style}
			className={`flex flex-col p-[20px] gap-[20px] rounded-[12px] border-2 border-gray-100 bg-white shadow-dropdown w-max`}>
			{props.lists.map((list, i) => (
				<div className='flex flex-col gap-[20px]'>
					{list.map((item) => (
						<div
							onClick={(e) => {
								if (item.onClick) {
									item.onClick();
								}
							}}
							className={`flex gap-[12px] px-[20px] py-[8px] self-stretch items-center ${
								item.selected && 'bg-gray-50'
							} rounded-[6px]`}>
							<div
								className={`leading-[normal] self-center text-[28px] ${
									item.selected
										? 'font-bold text-gray-800'
										: 'font-medium text-gray-600'
								}`}>
								{item.label}
							</div>
							{item.selected && (
								<Check
									width={26}
									height={26}
								/>
							)}
						</div>
					))}
					{i !== props.lists.length - 1 && (
						<div className='self-stretch h-[1px] bg-gray-200' />
					)}
				</div>
			))}
		</div>
	);
}
