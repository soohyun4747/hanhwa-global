import { ArrowLeft } from 'icons/ArrowLeft';
import { Dispatch, SetStateAction } from 'react';

const valueList = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'0',
	'.',
	'delete',
];

export function NumPad({
	type = '4*3',
	setValue,
}: {
	type?: '4*3' | '3*4';
	setValue?: Dispatch<SetStateAction<string>>;
}) {
	return (
		<div
			className={`grid ${
				type === '4*3' ? 'grid-cols-4' : 'grid-cols-3'
			} gap-[16px] h-[446px]`}>
			{valueList.map((value) => {
				return (
					<div
						className='col-span-1 w-[138px] h-[138px] flex items-center justify-center bg-white text-center text-[50.899px] font-semibold leading-normal text-gray-800 rounded-[12.725px] border-[1.06px] border-gray-300'
						onClick={() => {
							if (setValue) {								
								setValue((prev) => {									
									if (value === 'delete') {
										return prev.slice(0, -1);
									} else {
										return prev + value;
									}
								});
							}
						}}>
						{value === 'delete' ? <ArrowLeft /> : value}
					</div>
				);
			})}
		</div>
	);
}
