import { ButtonColor, ButtonProps } from './Button';
import { ButtonMedium } from './ButtonMedium';

export function Modal({
	title,
	description,
	content,
	firstBtn,
	secondBtn,
}: {
	title: string;
	description: string;
	content?: JSX.Element;
	firstBtn: ButtonProps;
	secondBtn?: ButtonProps;
}) {
	return (
		<div className='absolute top-0 left-0 w-[100vw] h-[100vh] bg-black/40 flex items-center justify-center z-[2]'>
			<div className='p-[60px] bg-white rounded-[24px] shadow-modal'>
				<div className={`flex flex-col gap-[80px]`}>
					<div className={`flex flex-col gap-[60px]`}>
						<div className='flex flex-col gap-[12px]'>
							<div className='text-[60px] font-semibold leading-[140%]'>
								{title}
							</div>
							<div className='text-[#737373] text-[32px] font-medium leading-[140%] whitespace-pre-wrap'>
								{description}
							</div>
						</div>
						{content && (
							<div className='self-center'>{content}</div>
						)}
					</div>
					<div className='flex gap-[20px]'>
						{firstBtn && <ButtonMedium
							children={firstBtn.children}
							onClick={firstBtn.onClick}
							color={firstBtn.color}
							style={{ width: '100%', height: 92 }}
						/>}
						{secondBtn && (
							<ButtonMedium
								children={secondBtn.children}
								onClick={secondBtn.onClick}
								color={secondBtn.color}
								style={{ width: '100%', height: 92 }}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
