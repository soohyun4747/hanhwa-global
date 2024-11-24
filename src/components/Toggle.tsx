import { Dispatch, SetStateAction } from 'react';

export function Toggle({
	value,
	setValue,
}: {
	value: boolean;
	setValue: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<div
			onClick={() => setValue((prev) => !prev)}
			className={`w-[90px] h-[48px] rounded-[120px] items-center p-[4px] ${
				value
					? 'bg-toggle-on-gradient justify-end'
					: 'bg-toggle-off-gradient'
			} flex`}>
			<div className='w-[40px] h-[40px] rounded-full bg-white' />
		</div>
	);
}
