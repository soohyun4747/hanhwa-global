import { GrayBox } from './GrayBox';

export function GrayButtonListBox({
	list,
}: {
	list: { leftElements: JSX.Element[]; rightElements: JSX.Element[] }[];
}) {
	return (
		<GrayBox>
			<>
				{list.map((item, i) => (
					<div
						key={i}
						className='flex flex-col gap-[40px]'>
						<div className='w-full justify-between flex items-center'>
							<div className='flex gap-[20px] items-center'>
								{item.leftElements.map((element) => element)}
							</div>
							<div className='flex gap-[20px] items-center'>
								{item.rightElements.map((element) => element)}
							</div>
						</div>
						{i !== list.length - 1 && (
							<div className='self-stretch h-[1px] bg-gray-300' />
						)}
					</div>
				))}
			</>
		</GrayBox>
	);
}
