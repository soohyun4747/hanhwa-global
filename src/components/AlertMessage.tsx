export function AlertMessage({
	icon,
	label,
}: {
	icon: JSX.Element;
	label: string;
}) {
	return (
		<div className='px-[20px] py-[12px] flex gap-[10px] rounded-[20px] w-fit items-center bg-status-error/10'>
			{icon}
			<div className='text-[22px] text-status-error font-medium'>
				{label}
			</div>
		</div>
	);
}
