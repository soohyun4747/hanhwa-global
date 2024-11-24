import { BatteryCharging } from 'icons/BatteryCharging';
import { BatteryDefault } from 'icons/BatteryDefault';
import { BatteryFull } from 'icons/BatteryFull';
import { BatteryLow } from 'icons/BatteryLow';

export function FloatingBar({
	charge,
	isCharging,
}: {
	charge: number;
	isCharging?: boolean;
}) {
	const getBatteryIcon = () => {
		if (isCharging) {
			return <BatteryCharging />;
		} else {
			if (charge <= 20) {
				return <BatteryLow />;
			} else if (charge >= 80) {
				return <BatteryFull />;
			} else {
				return <BatteryDefault />;
			}
		}
	};

	return (
		<div className='rounded-[100px] border border-gray-200 bg-white shadow-[0px_2px_18px_rgba(0,0,0,0.10)] h-[72px] flex px-[28px] gap-[24px] items-center absolute top-[40px] right-[40px]'>
			<div className='font-bold text-[28px]'>Blaster</div>
			<div className='h-[24px] border border-gray-200 w-0' />
			<div className='font-semibold text-[28px]'>
				A fox jumping on a sleeping dog
			</div>
			<div className='h-[24px] border border-gray-200 w-0' />
			<div className='flex gap-[10px] items-center'>
				{getBatteryIcon()}
				<div className='text-[26px] font-semibold'>{charge}%</div>
			</div>
		</div>
	);
}
