export function CommonTemplate({
	title,
	children,
	leftElements,
}: {
	title: string | JSX.Element;
	children: JSX.Element;
	leftElements?: JSX.Element[];
}) {
	return (
		<div className='flex flex-col pt-[174px] pb-[60px] gap-[48px] px-[40px] w-full h-[100vh] overflow-y-auto'>
			<div className='flex flex-col gap-[24px] w-full'>
				<div className='flex items-center justify-between'>
					<div className='text-[62px] font-semibold'>{title}</div>
					{leftElements && (
						<div className='flex items-center gap-[12px]'>
							{leftElements.map((element) => element)}
						</div>
					)}
				</div>
				<div className='h-0 w-full border border-gray-400' />
			</div>
			{children}
			<div className='w-[calc(100%-520px)] h-[90px] absolute top-0 bg-gradient-to-b from-white to-white/30' />
		</div>
	);
}
