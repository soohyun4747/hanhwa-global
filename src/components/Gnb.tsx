import { Bluetooth } from 'icons/Bluetooth';
import { Close } from 'icons/Close';
import { HaLow } from 'icons/HaLow';
import { HomeRound } from 'icons/HomeRound';
import { LoRa } from 'icons/LoRa';
import { Setting } from 'icons/Setting';
import { SettingsEthernet } from 'icons/SettingsEthernet';
import { Wifi } from 'icons/Wifi';
import { useIsSettingStore } from 'stores/isSettingStore';

export function Gnb() {
	const isSetting = useIsSettingStore((state) => state.isSetting);
	const changeSetting = useIsSettingStore((state) => state.changeSetting);

	return (
		<div className='bg-gray-50 border-r border-gray-200 pt-[40px] pb-[60px] min-w-[160px] flex flex-col justify-between items-center h-[100vh]'>
			<div className='flex flex-col gap-[24px]'>
				<HomeRound />
				<div className='flex flex-col h-[56px] text-center'>
					<div className='text-xl font-semibold text-gray-500'>
						Level
					</div>
					<div className='text-[28px] font-bold'>L9</div>
				</div>
			</div>
			<div className='flex flex-col items-center gap-[40px]'>
				<div className='w-[80px] h-[80px] flex justify-center items-ceter'>
					<Wifi />
				</div>
				<div className='w-[80px] h-[80px] flex justify-center items-ceter'>
					<SettingsEthernet />
				</div>
				<div className='w-[80px] h-[80px] flex justify-center items-ceter'>
					<Bluetooth />
				</div>
				<div className='w-[80px] h-[80px] flex justify-center items-ceter'>
					<HaLow />
				</div>
				<div className='w-[80px] h-[80px] flex justify-center items-ceter'>
					<LoRa />
				</div>
				<div
					onClick={changeSetting}
					className={`flex ${
						isSetting ? 'bg-white' : 'bg-gray-600'
					} border rounded-full w-[100px] h-[100px] items-center justify-center mt-[8px]`}>
					{isSetting ? (
						<Close />
					) : (
						<Setting
							width={36}
							height={36}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
