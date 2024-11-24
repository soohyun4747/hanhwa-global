import { CastConnected } from 'icons/CastConnected';
import { ElectricBolt } from 'icons/ElectricBolt';
import { KeyVertical } from 'icons/KeyVertical';
import { NetworkManage } from 'icons/NetworkManage';
import { Setting } from 'icons/Setting';
import { Tablet } from 'icons/Tablet';

const SnbMenus = [
	{
		icon: Setting,
		label: 'General',
	},
	{
		icon: Tablet,
		label: 'Device',
	},
	{
		icon: NetworkManage,
		label: 'Network',
	},
	{
		icon: CastConnected,
		label: 'Blasting Mode',
	},
	{
		icon: KeyVertical,
		label: 'User Authority',
	},
	{
		icon: ElectricBolt,
		label: 'Calibration',
	},
];

export function Snb({
	selectedIdx,
	setMenuIdx,
}: {
	selectedIdx: number;
	setMenuIdx: React.Dispatch<React.SetStateAction<number>>;
}) {
	return (
		<div className='bg-[#FBFBFB] w-[400px] flex flex-col pt-[70px] gap-[80px] h-[100vh] border-r border-gray-200'>
			<div className='pl-[40px] text-[40px] font-bold text-gray-800'>
				Setting
			</div>
			<div className='flex flex-col gap-[20px] px-[20px] w-full'>
				{SnbMenus.map((menu, i) => (
					<div
						key={i}
						onClick={() => setMenuIdx(i)}
						className={`font-semibold text-[28px] h-[92px] w-full pl-[28px] flex gap-[20px] rounded-[12px] items-center ${
							selectedIdx === i ? 'bg-[#262626]' : 'bg-none'
						}`}>
						<menu.icon
							fill={selectedIdx === i ? 'white' : '#7B7B7B'}
						/>
						<div
							className={
								selectedIdx === i
									? 'text-white'
									: 'text-gray-500'
							}>
							{menu.label}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
