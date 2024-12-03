import { ChevronBottom } from 'icons/ChevronBottom';
import { Dropdown } from './Dropdown';
import { MenuItem } from './DropdownMenu';
import { CSSProperties } from 'react';

export function DropdownField({
	menuList,
	value,
	id,
	style,
}: {
	menuList: MenuItem[][];
	value?: string | number;
	id?: string;
	style?: CSSProperties;
}) {
	return (
		<Dropdown
			menuList={menuList}
			id={id}
			element={
				<div
					style={style}
					id={id}
					className='h-[92px] rounded-[12px] border-gray-200 w-full p-[28px] bg-white flex justify-between items-center text-[28px] font-semibold leading-[130%]'>
					{value}
					<ChevronBottom id={id} />
				</div>
			}
			menuStyle={{
				width: '-webkit-fill-available',
				top: 108,
			}}
		/>
	);
}
