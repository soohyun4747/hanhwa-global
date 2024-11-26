export function ToastMessage({
	icon,
	label,
}: {
	icon?: JSX.Element;
	label: string;
}) {
	return (
		<div className='absolute top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center z-[2]'>
			<div className='px-[60px] py-[20px] flex gap-[20px] rounded-[100px] bg-black/70 backdrop-blur-[15px] text-white text-[32px] font-medium leading-[normal]'>
				{icon}
				{label}
			</div>
		</div>
	);
}
