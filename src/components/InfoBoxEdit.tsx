import { Dispatch, SetStateAction } from 'react';
import { GrayBox } from './GrayBox';
import { GrayBoxInfo } from './InfoBox';
import { TextField } from './TextField';

interface GrayBoxEditInfo {
	title: string;
	content: string;
	setContent: Dispatch<SetStateAction<string>>;
}

export function InfoBoxEdit({ infoList }: { infoList: GrayBoxEditInfo[] }) {
	return (
		<GrayBox>
			<>
				{infoList.map((info, i) => (
					<div key={i}>
						<div
							key={i}
							className='flex flex-col text-[28px]'>
							<div className='font-medium mb-[24px] text-gray-500'>
								{info.title}
							</div>
							<TextField
								value={info.content}
								onChange={(e) =>
									info.setContent(e.target.value)
								}
							/>
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
