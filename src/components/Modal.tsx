import { ButtonColor } from './Button';
import { ButtonMedium } from './ButtonMedium';

export function Modal({
	title,
	description,
	content,
	contentRight,
	secondBtn,
	close,
}: {
	title: string;
	description: string;
	content?: JSX.Element;
	contentRight?: JSX.Element;
	secondBtn: { label: string; onClick?: () => void; color?: ButtonColor };
	close: () => void;
}) {
	return (
		<div className='absolute top-0 left-0 w-[100vw] h-[100vh] bg-black/40 flex items-center justify-center z-[2]'>
			<div className='p-[60px] bg-white rounded-[24px] shadow-modal'>
				<div className={`flex gap-[80px]`}>
					<div className={`flex flex-col gap-[60px]`}>
						<div className='flex flex-col gap-[12px]'>
							<div className='text-[60px] font-semibold leading-[140%]'>
								{title}
							</div>
							<div className='text-[#737373] text-[32px] font-medium leading-[140%] whitespace-pre-wrap'>
								{description}
							</div>
						</div>
						{content}
						<div className='flex gap-[20px]'>
							<ButtonMedium
								children={'Close'}
								onClick={close}
								className='w-[290px] h-[92px]'
							/>
							<ButtonMedium
								children={secondBtn.label}
								onClick={secondBtn.onClick}
								color={secondBtn.color}
								className='w-[290px] h-[92px]'
							/>
						</div>
					</div>
					{contentRight}
				</div>
			</div>
		</div>
	);
}
