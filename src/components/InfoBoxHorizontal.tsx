import { GrayBox } from './GrayBox';
import { GrayBoxInfo } from './InfoBox';

export function InfoBoxHorizontal({ infoList }: { infoList: GrayBoxInfo[] }) {
	return (
		<GrayBox>
			<div className='flex'>
				{infoList.map((info, i) => (
					<div
						key={i}
						className='flex flex-1'>
						<div
							key={i}
							className='flex flex-col flex-1'>
							{info.title && (
								<div className='font-medium mb-[16px] text-gray-500 text-[24px]'>
									{info.title}
								</div>
							)}
							{info.content && (
								<div className='flex gap-[20px] items-center'>
									<div className='font-semibold text-[28px]'>
										{info.content}
									</div>
									<div className='font-medium text-gray-400 text-[22px]'>
										{info.detail}
									</div>
								</div>
							)}
						</div>
						{i !== infoList.length - 1 && (
							<div className='h-full w-[1px] bg-gray-300 mx-[40px]' />
						)}
					</div>
				))}
			</div>
		</GrayBox>
	);
}
