export function BlueRoundedIcon({ icon }: { icon: JSX.Element }) {
	return (
		<div className='w-[54px] h-[54px] flex items-center justify-center bg-status-success rounded-full'>
			{icon}
		</div>
	);
}
