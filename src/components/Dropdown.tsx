import { More } from 'icons/More';
import { useEffect, useState } from 'react';
import { DropdownMenu, MenuItem } from './DropdownMenu';

export function Dropdown({
	menuList,
	id,
	element,
}: {
	menuList: MenuItem[][];
	id?: string;
	element: JSX.Element;
}) {
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		// Add click listener to the document
		document.addEventListener('click', handleClickOutside);

		// Cleanup the listener on component unmount
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	const handleClickOutside = (e: MouseEvent) => {
		const target = e.target as HTMLElement | undefined;
		if (target && target.id === id) {
			setOpen(true);
		} else {
			setOpen(false); // Change state when clicking outside
		}
	};

	return (
		<div
			className='relative'
			onClick={(e) => {
				setOpen(true);
			}}>
			{element}
			{open && (
				<DropdownMenu
					lists={menuList}
					className='absolute top-[54px] right-[-4px] z-[1]'
				/>
			)}
		</div>
	);
}
