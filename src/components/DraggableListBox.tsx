import React, { useRef, useState } from 'react';
import DraggableList from 'react-draggable-list';
import { GrayBox } from './GrayBox';
import { Moveable } from 'icons/Moveable';

export interface DraggableListItem {
	id: number;
	content: string;
}

interface DraggableListIdxItem extends DraggableListItem {
	idx: number;
}

interface ItemProps {
	item: DraggableListIdxItem;
	index: number;
	itemSelected: number;
	dragHandleProps: any;
}

// Prevent scroll function
const preventScroll = (e: Event) => {
	e.preventDefault(); // Block scrolling
};

// Function to disable scrolling
const disableScroll = () => {
	document.body.style.overflow = 'hidden'; // Disable body scrolling
	document.body.style.height = '100%'; // Fix height to prevent content shifts

	// Prevent scrolling events on the entire document
	window.addEventListener('scroll', preventScroll, { passive: false });
	window.addEventListener('wheel', preventScroll, { passive: false });
	window.addEventListener('touchmove', preventScroll, { passive: false });
};

// Function to enable scrolling
const enableScroll = () => {
	document.body.style.overflow = ''; // Restore body overflow
	document.body.style.height = ''; // Restore body height

	// Remove scrolling event listeners
	window.removeEventListener('scroll', preventScroll);
	window.removeEventListener('wheel', preventScroll);
	window.removeEventListener('touchmove', preventScroll);
};

class Item extends React.Component<ItemProps> {
	render() {
		const { item, dragHandleProps } = this.props;
		const { onMouseDown, onTouchStart } = dragHandleProps;

		return (
			<div className='select-none flex flex-col gap-[40px]'>
				<div className='text-[28px] flex justify-between'>
					<div className='flex gap-[20px]'>
						<div className='font-medium text-gray-600'>
							{item.idx}
						</div>
						<div className='font-semibold'>{item.content}</div>
					</div>
					<div
						onTouchStart={(e: any) => {
							disableScroll();
							onTouchStart(e);
						}}
						onMouseDown={(e: any) => {
							disableScroll();
							onMouseDown(e);
						}}
						onTouchEnd={(e: any) => {
							enableScroll();
						}}
						onMouseUp={() => {
							enableScroll();
						}}>
						<Moveable />
					</div>
				</div>
				<div className='h-[1px] bg-gray-300 w-full mb-[40px]' />
			</div>
		);
	}
}

export function DraggableListBox({
	list,
	setList,
}: {
	list: DraggableListItem[];
	setList: React.Dispatch<React.SetStateAction<DraggableListItem[]>>;
}) {
	const containerRef = useRef<HTMLDivElement>(null);

	const onListChange = (newList: DraggableListItem[]) => {
		setList(newList);
	};

	return (
		<div ref={containerRef}>
			<GrayBox>
				<div>
					<DraggableList
						itemKey='id'
						template={Item}
						list={list.map((item, i) => ({ ...item, idx: i + 1 }))}
						onMoveEnd={(newList: any) => onListChange(newList)}
						container={() => containerRef.current}
					/>
					<div className='text-status-success text-[28px] font-medium'>
						Add language...
					</div>
				</div>
			</GrayBox>
		</div>
	);
}
