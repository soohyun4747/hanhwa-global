import { ButtonSmall } from 'components/ButtonSmall';
import { GrayBox } from 'components/GrayBox';
import { InfoBox } from 'components/InfoBox';
import { ChevronRight } from 'icons/ChevronRight';
import { CommonTemplate } from './CommonTemplate';

const DeviceInfo = [
	{ title: 'Model name', content: 'HEBS_B_2A HiRONIC II BLASTER' },
	{ title: 'S/N', content: 'B2#EISdev003G Made in Korea. UC_1_4310' },
	{ title: 'Local IP', content: '10.0.2.5' },
];

const SystemInfo = [
	{ title: 'S/W Version', content: 'V.0.1.5-PK1' },
	{ title: 'BM Version', content: '-' },
	{ title: 'Bluetooth MAC Adress', content: '-' },
];

export function DeviceTemplate() {
	return (
		<CommonTemplate title={'Device'}>
			<div className='flex flex-col gap-[60px] font-semibold text-[28px]'>
				<div className='flex flex-col gap-[28px]'>
					<div className='text-gray-800'>Device ID</div>
					<GrayBox className='pr-[100px] pl-[12px]'>
						<div className='flex items-center py-[12px]'>
							<img
								src='/images/device.png'
								alt='device'
								className='w-[478px]'
							/>
							<div className='h-[160px] w-[1px] bg-gray-300 mr-[100px] ml-[20px]' />
							<div className='flex flex-col justify-between h-full'>
								<div className='flex flex-col gap-[14px]'>
									<div className='text-gray-500 text-[24px] font-semibold'>
										Device ID
									</div>
									<div className='text-gray-800 text-[40px] font-semibold leading-[130%]'>
										A fox jumping on a sleeping dog
									</div>
								</div>
								<ButtonSmall
									label='Change ID'
									icon={<ChevronRight />}
								/>
							</div>
						</div>
					</GrayBox>
				</div>
				<div className='flex flex-col gap-[28px]'>
					<div className='text-gray-800'>Device Information</div>
					<InfoBox infoList={DeviceInfo} />
				</div>
				<div className='flex flex-col gap-[28px]'>
					<div className='text-gray-800'>System Information</div>
					<InfoBox infoList={SystemInfo} />
				</div>
			</div>
		</CommonTemplate>
	);
}
