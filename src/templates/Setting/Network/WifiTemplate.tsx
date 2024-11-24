import { CommonTemplate } from '../CommonTemplate';
import { Wifi } from 'icons/Wifi';
import { Toggle } from 'components/Toggle';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Lock } from 'icons/Lock';
import { ButtonSmall } from 'components/ButtonSmall';
import { ChevronRight } from 'icons/ChevronRight';
import { GrayBox } from 'components/GrayBox';
import { ButtonBack } from 'components/ButtonBack';
import { BlueRoundedIcon } from 'components/BlueRoundedIcon';
import { MenuItem } from 'components/DropdownMenu';
import { VerticalLine } from 'components/VerticalLine';
import { Dropdown } from 'components/Dropdown';
import { More } from 'icons/More';

interface WifiInfo {
	id: string;
	name: string;
	isLocked?: boolean;
}

const WifiListBox = ({
	wifiList,
	my,
}: {
	wifiList: WifiInfo[];
	my?: boolean;
}) => {
	return (
		<GrayBox>
			<>
				{wifiList.map((wifi, i) => (
					<div
						key={i}
						className='flex flex-col gap-[40px]'>
						<div className='flex justify-between'>
							<div className='font-semibold'>{wifi.name}</div>
							<div className='flex items-center gap-[20px]'>
								{wifi.isLocked && <Lock />}
								<Wifi
									width={40}
									height={40}
								/>
								{my && (
									<Dropdown
										id={wifi.id}
										menuList={myNetworkDropdownMenu}
										element={<More id={wifi.id} />}
									/>
								)}
							</div>
						</div>
						{i !== wifiList.length - 1 && <VerticalLine />}
					</div>
				))}
			</>
		</GrayBox>
	);
};

const myNetworkDropdownMenu: MenuItem[][] = [
	[
		{ label: 'Automatic connection', selected: true },
		{ label: 'Copy password' },
		{ label: 'Network setting' },
	],
	[{ label: 'Delete network' }],
];

const wifiList: WifiInfo[] = [
	{ name: 'TP-Link_D5E4_5G', isLocked: true, id: '1' },
	{ name: 'TP-Link_D5E4_5G', id: '2' },
	{ name: 'TP-Link_D5E4_5G', id: '3' },
	{ name: 'TP-Link_D5E4_5G', id: '4' },
];

export function WifiTemplate({ onClickBack }: { onClickBack: () => void }) {
	const [wifiOn, setWifiOn] = useState<boolean>(true);

	return (
		<CommonTemplate
			title={
				<div className='flex gap-[24px] items-center'>
					<ButtonBack onClick={() => onClickBack()} />
					<div>Wifi</div>
				</div>
			}>
			<div className='flex flex-col gap-[60px] font-semibold text-[28px]'>
				<div className='flex flex-col gap-[28px]'>
					<div className='text-gray-800'>Network Setting</div>
					<GrayBox>
						<div className='flex flex-col gap-[40px]'>
							<div className='w-full justify-between flex items-center'>
								<div className='flex gap-[20px] items-center'>
									<BlueRoundedIcon
										icon={
											<Wifi
												fill='white'
												width={40}
												height={40}
											/>
										}
									/>
									<div className='text-[32px] font-semibold'>
										Wifi
									</div>
								</div>
								<Toggle
									value={wifiOn}
									setValue={setWifiOn}
								/>
							</div>
							<div className='self-stretch h-[1px] bg-gray-300' />
							<div className='w-full justify-between flex items-center'>
								<div className='font-semibold'>
									TP-Link_D5E4_5G
								</div>
								<div className='flex gap-[20px] items-center'>
									<Lock />
									<Wifi
										width={40}
										height={40}
									/>
									<ButtonSmall
										label={'Details'}
										icon={<ChevronRight />}
									/>
								</div>
							</div>
						</div>
					</GrayBox>
				</div>
				<div className='flex flex-col gap-[28px]'>
					<div className='text-gray-800'>My networks</div>
					<WifiListBox
						wifiList={wifiList}
						my={true}
					/>
				</div>
				<div className='flex flex-col gap-[28px]'>
					<div className='text-gray-800'>Other networks</div>
					<WifiListBox wifiList={wifiList} />
				</div>
			</div>
		</CommonTemplate>
	);
}
