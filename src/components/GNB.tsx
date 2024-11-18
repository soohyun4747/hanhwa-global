import { Bluetooth } from 'icons/Bluetooth';
import { HaLow } from 'icons/HaLow';
import { HomeRound } from 'icons/HomeRound';
import { LoRa } from 'icons/LoRa';
import { Setting } from 'icons/Setting';
import { SettingsEthernet } from 'icons/SettingsEthernet';
import { Wifi } from 'icons/Wifi';

export function Gnb() {
	return (
		<div className='bg-gray-50 border-r border-gray-200 pt-[20px] pb-[60px] w-[160px] flex flex-col justify-between items-center h-[100vh]'>
			<div className='flex flex-col gap-[4px]'>
				<HomeRound />
				<div className='flex flex-col h-[56px] text-center'>
					<div className='text-xl font-semibold text-gray-500'>
						Level
					</div>
					<div className='text-[28px] font-bold'>L9</div>
				</div>
			</div>
			<div className='flex flex-col items-center gap-[40px]'>
				<Wifi />
				<SettingsEthernet />
				<Bluetooth />
				<HaLow />
				<LoRa />
				<div className='flex bg-gray-600 border rounded-full w-[100px] h-[100px] items-center justify-center'>
					<Setting width={36} height={36} />
				</div>
			</div>
		</div>
	);
}
