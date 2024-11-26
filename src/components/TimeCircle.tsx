import { secondsToTimeFormat } from 'utils/time';

//time in seconds
export function TimeCircle({ time }: { time: number }) {
	return (
		<div className='bg-white rounded-full border border-hanhwa-orange/60 w-[335px] h-[335px] p-[8px]'>
			<div className='rounded-full w-full h-full border-2 border-hanhwa-orange flex justify-center items-center'>
				<div className='flex flex-col items-center gap-[11.38px]'>
					<div className='text-gray-800 font-semibold text-[26px] leading-normal'>
						Remaining Time
					</div>
					<div className='h-[68px] text-[64px] text-hanhwa-orange font-bold flex items-center'>
						{secondsToTimeFormat(time)}
					</div>
				</div>
			</div>
		</div>
	);
}
