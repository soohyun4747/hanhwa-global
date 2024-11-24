import { ChevronLeftXl } from 'icons/ChevronLeftXl';

export function ButtonBack({ onClick }: { onClick: () => void }) {
	return (
		<div
			onClick={onClick}
			className='w-[60px] h-[60px] flex justify-center items-center'>
			<ChevronLeftXl />
		</div>
	);
}
