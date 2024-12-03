import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
	Checkbox,
	checkboxValue,
	CheckboxValue,
	getCheckValue,
} from './Checkbox';
import { UpdownArrows } from 'icons/UpDownArrows';
import { Dropdown } from './Dropdown';

export interface DataGridHeader {
	field: string;
	headerName: string;
	className?: string;
	render?: (value: any, row: any) => React.ReactNode;
}

interface DataGridProps {
	columns: DataGridHeader[];
	rows: any[];
	edit?: boolean;
	title?: string;
	selectedIdList?: (string | number)[];
	setSelectedIdList?: Dispatch<SetStateAction<(string | number)[]>>;
}

export function DataGrid(props: DataGridProps) {
	const [topCheckValue, setTopCheckValue] = useState<CheckboxValue>(
		checkboxValue.unSelected
	);
	const [orderCol, setOrderCol] = useState<DataGridHeader>();
	const [orderedRows, setOrderedRows] = useState<any[]>([]);

	useEffect(() => {
		setOrderedRows(props.rows);
	}, [props.rows]);

	useEffect(() => {
		if (props.selectedIdList) {
			setTopCheckValue(
				getTopCheckValue(props.selectedIdList, props.rows)
			);
		}
	}, [props.selectedIdList, props.rows]);

	useEffect(() => {
		setOrderCol(props.columns[0]);
	}, [props.columns]);

	const getTopCheckValue = (
		selectedIdList: (number | string)[],
		rows: any[]
	) => {
		if (selectedIdList.length === 0) {
			return checkboxValue.unSelected;
		}
		if (selectedIdList.length === rows.length) {
			return checkboxValue.selected;
		}
		return checkboxValue.inDeterminate;
	};

	const onClickTopCheckbox = () => {
		if (
			topCheckValue === checkboxValue.unSelected ||
			topCheckValue === checkboxValue.inDeterminate
		) {
			setTopCheckValue(checkboxValue.selected);
			if (props.setSelectedIdList) {
				props.setSelectedIdList(props.rows.map((row) => row.id));
			}
		} else {
			setTopCheckValue(checkboxValue.unSelected);

			if (props.setSelectedIdList) {
				props.setSelectedIdList([]);
			}
		}
	};

	const onClickRowCheckbox = (row: any) => {
		if (props.setSelectedIdList) {
			props.setSelectedIdList((prev) => {
				const idx = prev.findIndex((id) => row.id === id);
				if (idx === -1) {
					prev.push(row.id);
				} else {
					prev.splice(idx, 1);
				}
				return [...prev];
			});
		}
	};

	const getCheckboxValue = (row: any) => {
		if (props.selectedIdList) {
			return getCheckValue(props.selectedIdList?.includes(row.id));
		}
		return checkboxValue.unSelected;
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
											value={getCheckboxValue(row)}
											onClick={() =>
												onClickRowCheckbox(row)
											}
										/>
									</td>
								)}
								{props.columns.map((col, j) => (
									<td
										key={j}
										className={`py-[40px] font-medium`}>
										{col.render
											? col.render(row[col.field], row)
											: row[col.field]}
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
