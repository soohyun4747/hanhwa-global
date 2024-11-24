import { useEffect, useState } from 'react';
import {
	Checkbox,
	checkboxValue,
	CheckboxValue,
	getCheckValue,
} from './Checkbox';
import { UpdownArrows } from 'icons/UpDownArrows';
import { Dropdown } from './Dropdown';

interface DataGridHeader {
	field: string;
	headerName: string;
	className?: string;
	icon?: JSX.Element;
	onClick?: (row: any) => void;
}

interface DataGridProps {
	columns: DataGridHeader[];
	rows: any[];
	edit?: boolean;
	title?: string;
}

export function DataGrid(props: DataGridProps) {
	const [topCheckValue, setTopCheckValue] = useState<CheckboxValue>(
		checkboxValue.unSelected
	);
	const [checkValueList, setCheckValueList] = useState<CheckboxValue[]>([]);
	const [orderCol, setOrderCol] = useState<DataGridHeader>();
	const [orderedRows, setOrderedRows] = useState<any[]>([]);

	useEffect(() => {
		setCheckValueList(
			new Array(props.rows.length).fill(checkboxValue.unSelected)
		);
		setOrderedRows(props.rows);
	}, [props.rows]);

	useEffect(() => {
		setTopCheckValue(getTopCheckValue());
	}, [checkValueList]);

	const getTopCheckValue = () => {
		if (checkValueList.every((val) => val === checkboxValue.selected)) {
			return checkboxValue.selected;
		} else {
			if (checkValueList.some((val) => val === checkboxValue.selected)) {
				return checkboxValue.inDeterminate;
			} else {
				return checkboxValue.unSelected;
			}
		}
	};

	const onClickTopCheckbox = () => {
		if (
			topCheckValue === checkboxValue.unSelected ||
			topCheckValue === checkboxValue.inDeterminate
		) {
			setTopCheckValue(checkboxValue.selected);
			setCheckValueList((prev) =>
				new Array(prev.length).fill(checkboxValue.selected)
			);
		} else {
			setTopCheckValue(checkboxValue.unSelected);
			setCheckValueList((prev) =>
				new Array(prev.length).fill(checkboxValue.unSelected)
			);
		}
	};

	return (
		<div className='flex flex-col gap-[28px] text-[28px]'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center gap-[10px]'>
					{props.title && (
						<div className='text-gray-800'>{props.title}</div>
					)}
					<div className='text-gray-500 font-semibold'>
						{orderedRows.length}
					</div>
				</div>
				<Dropdown
					id='user-data-order'
					menuList={[
						props.columns.map((col) => ({
							label: col.headerName,
							onClick: () => {
								setOrderCol(col);
								setOrderedRows((prev) => {
									return sortByField(col.field, prev);
								});
							},
							selected: orderCol?.field === col.field,
						})),
					]}
					element={
						<div className='flex items-center gap-[12px]'>
							<div
								className='text-gray-600 font-medium'
								id='user-data-order'>
								{orderCol?.headerName}
							</div>
							<UpdownArrows id='user-data-order' />
						</div>
					}
				/>
			</div>
			<div className='w-full px-[40px] pt-[24px] bg-[#FBFBFB] border border-gray-200 rounded-[12px]'>
				<table className='w-full'>
					<thead>
						<tr className='text-left'>
							{props.edit && (
								<th className='pb-[24px] w-[32px] pr-[40px]'>
									<Checkbox
										value={topCheckValue}
										onClick={onClickTopCheckbox}
									/>
								</th>
							)}
							{props.columns.map((col, i) => (
								<th
									key={i}
									className={`text-gray-600 text-[24px] font-medium pb-[24px] pr-[40px] ${col.className}`}>
									{col.headerName}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{orderedRows.map((row, i) => (
							<tr
								key={i}
								className='border-t border-gray-300'>
								{props.edit && (
									<td className='py-[40px]'>
										<Checkbox
											value={checkValueList[i]}
											onClick={() =>
												setCheckValueList((prev) => {
													prev[i] = getCheckValue(
														prev[i]
													);
													return [...prev];
												})
											}
										/>
									</td>
								)}
								{props.columns.map((col, j) => (
									<td
										onClick={() =>
											col.onClick && col.onClick(row)
										}
										key={j}
										className={`py-[40px] font-medium items-center justify-between ${
											col.icon && 'flex'
										}`}>
										{row[col.field]}
										{col.icon}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export const sortByField = (field: string, data: any[]) => {
	if (
		data[0] &&
		typeof data[0][field] !== 'string' &&
		typeof data[0][field] !== 'number'
	) {
		return data.sort((a, b) => {
			if (extractElementValue(a[field]) < extractElementValue(b[field]))
				return -1;
			if (extractElementValue(a[field]) > extractElementValue(b[field]))
				return 1;
			return 0;
		});
	} else {
		return data.sort((a, b) => {
			if (a[field] < b[field]) return -1;
			if (a[field] > b[field]) return 1;
			return 0;
		});
	}
};

const extractElementValue = (element: JSX.Element) => {
	return element.props.children as string | number; // Access the content
};
