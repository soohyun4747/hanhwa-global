export function ButtonSmall({
	label,
	onClick,
	icon,
}: {
	label: string;
	onClick?: () => void;
	icon?: JSX.Element;
}) {
	return (
		<div
			onClick={onClick}
			className='bg-white px-[24px] py-[16px] flex gap-[12px] rounded-full items-center border-2 border-gray-100 w-fit'>
			<div className='text-[26px] text-gray-700 font-semibold leading-[32px]'>
				{label}
			</div>
			{icon}
		</div>
	);
}
