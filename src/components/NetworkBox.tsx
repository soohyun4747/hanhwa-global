import { ChevronRight } from 'icons/ChevronRight';
import { GrayBox } from './GrayBox';

export function NetworkBox({
	icon,
	subTitle,
	title,
	onClick,
}: {
	icon: JSX.Element;
	subTitle: string;
	title: string;
	onClick: () => void;
}) {
	return (
		<GrayBox onClick={onClick}>
			<div className='flex items-center justify-between'>
				<div className='flex gap-[28px]'>
					<div className='w-[80px] h-[80px] bg-[#007AFF] flex items-center justify-center rounded-full'>
						{icon}
					</div>
					<div className='flex flex-col justify-between h-full font-semibold'>
						<div className='text-[24px] text-gray-600'>
							{subTitle}
						</div>
						<div className='text-[32px]'>{title}</div>
					</div>
				</div>
				<ChevronRight />
			</div>
		</GrayBox>
	);
}
