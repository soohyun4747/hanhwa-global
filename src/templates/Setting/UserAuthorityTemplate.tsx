import { UpdownArrows } from 'icons/UpDownArrows';
import { CommonTemplate } from './CommonTemplate';
import { Button } from 'components/Button';
import { DataGrid, DataGridHeader } from 'components/DataGrid';
import { ChevronRight } from 'icons/ChevronRight';
import { useState } from 'react';
import { UserAuthorityDetailTemplate } from './UserAuthority/UserAuthorityDetailTemplate';

const userAuthorityRowData = [
	{
		id: '1',
		level: 'L9',
		name: 'B fox jumping on a sleeping dog',
	},
	{
		id: 2,
		level: 'L6',
		name: 'C fox jumping on a sleeping dog',
	},
	{
		id: 3,
		level: 'L2',
		name: 'D fox jumping on a sleeping dog',
	},
	{
		id: 4,
		level: 'L1',
		name: 'A fox jumping on a sleeping dog',
	},
];

export const userLevel = {
	L1: 'L1',
	L2: 'L2',
	L6: 'L6',
	L9: 'L9',
} as const;

export type UserLevel = (typeof userLevel)[keyof typeof userLevel];

const getLevelColor = (levelVal: UserLevel): string => {
	switch (levelVal) {
		case userLevel.L1:
			return 'text-ava-erald';
		case userLevel.L2:
			return 'text-ava-lue';
		case userLevel.L6:
			return 'text-ava-orange';
		case userLevel.L9:
			return 'text-ava-violet';
		default:
			return '';
	}
};

export function UserAuthorityTemplate() {
	const [detailUser, setDetailUser] = useState<any>();

	const userAutorityColumnData: DataGridHeader[] = [
		{
			field: 'level',
			headerName: 'Level',
			className: 'w-[200px]',
			render: (value: any, row: any) => (
				<div className={getLevelColor(value)}>{value}</div>
			),
		},
		{
			field: 'name',
			headerName: 'User name',
			className: 'w-full w-max',
			render: (value: any, row: any) => (
				<div
					className='flex justify-between items-center w-full'
					onClick={() => {
						setDetailUser(row);
					}}>
					{value}
					<ChevronRight
						width={32}
						height={32}
						fill='#9D9D9D'
					/>
				</div>
			),
		},
		{
			field: 'date_added',
			headerName: 'Date Added',
			className: 'hidden',
		},
		{
			field: 'date_modified',
			headerName: 'Date Modified',
			className: 'hidden',
		},
	];

	return (
		<>
			{detailUser ? (
				<UserAuthorityDetailTemplate
					user={detailUser}
					onClickBack={() => setDetailUser(undefined)}
				/>
			) : (
				<CommonTemplate
					title={'User Authority'}
					leftElements={[
						<Button label={'Edit'} />,
						<Button
							label={'Add User'}
							color='black'
						/>,
					]}>
					<DataGrid
						title='Registered Authorities'
						columns={userAutorityColumnData}
						rows={userAuthorityRowData}
					/>
				</CommonTemplate>
			)}
		</>
	);
}
