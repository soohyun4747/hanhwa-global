import { UpdownArrows } from 'icons/UpDownArrows';
import { CommonTemplate } from './CommonTemplate';
import { Button } from 'components/Button';
import { DataGrid } from 'components/DataGrid';
import { ChevronRight } from 'icons/ChevronRight';
import { useState } from 'react';
import { UserAuthorityDetailTemplate } from './UserAuthority/UserAuthorityDetailTemplate';

const userAuthorityRowData = [
	{
		id: 1,
		level: <div className='text-ava-violet'>L9</div>,
		name: 'B fox jumping on a sleeping dog',
	},
	{
		id: 2,
		level: <div className='text-ava-orange'>L6</div>,
		name: 'C fox jumping on a sleeping dog',
	},
	{
		id: 3,
		level: <div className='text-ava-lue'>L2</div>,
		name: 'D fox jumping on a sleeping dog',
	},
	{
		id: 4,
		level: <div className='text-ava-erald'>L1</div>,
		name: 'A fox jumping on a sleeping dog',
	},
];

export function UserAuthority() {
	const [detailUser, setDetailUser] = useState<any>();

	const userAutorityColumnData = [
		{
			field: 'level',
			headerName: 'Level',
			className: 'w-[200px]',
		},
		{
			field: 'name',
			headerName: 'User name',
			className: 'w-full w-max',
			icon: (
				<ChevronRight
					width={32}
					height={32}
					fill='#9D9D9D'
				/>
			),
			onClick: (row: any) => {
				setDetailUser(row);
			},
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
						edit={true}
						columns={userAutorityColumnData}
						rows={userAuthorityRowData}
					/>
				</CommonTemplate>
			)}
		</>
	);
}
