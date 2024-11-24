import { GrayBox } from './GrayBox';

export interface GrayBoxInfo {
	title?: string;
	content?: string;
	detail?: string;
}

export function InfoBox({ infoList }: { infoList: GrayBoxInfo[] }) {
	return (
		<GrayBox>
			<>
				{infoList.map((info, i) => (
					<div key={i}>
						<div className='flex justify-between items-center'>
							<div
								key={i}
								className='flex flex-col text-[28px]'>
								{info.title && (
									<div className='font-medium mb-[24px] text-gray-600'>
										{info.title}
									</div>
								)}
								{info.content && (
									<div className='font-semibold'>
										{info.content}
									</div>
								)}
							</div>
							<div className='font-medium text-gray-600'>
								{info.detail}
							</div>
						</div>
						{i !== infoList.length - 1 && (
							<div className='mt-[40px] h-0 self-stretch border-[0.5px] border-gray-300' />
						)}
					</div>
				))}
			</>
		</GrayBox>
	);
}
