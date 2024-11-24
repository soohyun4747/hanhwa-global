import { ButtonBack } from 'components/ButtonBack';
import { CommonTemplate } from '../CommonTemplate';
import { GrayBox } from 'components/GrayBox';
import { BlueRoundedIcon } from 'components/BlueRoundedIcon';
import { SettingsEthernet } from 'icons/SettingsEthernet';
import { ButtonSmall } from 'components/ButtonSmall';
import { ChevronRight } from 'icons/ChevronRight';
import { InfoBox } from 'components/InfoBox';

const ethernetInfo = [
	{ content: 'Configure IPv4', detail: 'Manual' },
	{ content: 'IP address', detail: '192.168.10.20' },
	{ content: 'Subnet Mask', detail: '255.255.255.0' },
	{ content: 'Router', detail: 'Router' },
	{ content: 'DNS server', detail: 'DNS Server' },
	{ content: 'Find Domain', detail: 'Search Domain' },
];

export function EthernetTemplate({ onClickBack }: { onClickBack: () => void }) {
	return (
		<CommonTemplate
			title={
				<div className='flex gap-[24px] items-center'>
					<ButtonBack onClick={() => onClickBack()} />
					<div>Ethernet</div>
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
											<SettingsEthernet
												fill='white'
												width={40}
												height={40}
											/>
										}
									/>
									<div className='text-[32px] font-semibold'>
										Ethernet
									</div>
								</div>
								<div className='flex items-center gap-[12px]'>
									<div className='rounded-full w-[16px] h-[16px] bg-status-success' />
									<div className='font-semibold text-[24px] text-status-success'>
										Connected
									</div>
								</div>
							</div>
							<div className='self-stretch h-[1px] bg-gray-300' />
							<div className='w-full justify-between flex items-center'>
								<div className='font-semibold'>AX88179A</div>
								<div className='flex gap-[20px] items-center'>
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
					<div className='text-gray-800'>Ethernet Information</div>
					<InfoBox infoList={ethernetInfo} />
				</div>
			</div>
		</CommonTemplate>
	);
}
