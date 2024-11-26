import { secondsToTimeFormat } from 'utils/time';

//time in seconds
export function TimeHalfCircle({
	startTime,
	remainTime,
	error,
}: {
	startTime: number;
	remainTime: number;
	error: boolean;
}) {
	function getGradientBackground(
		startSeconds: number,
		remainSeconds: number
	): string {
		// Calculate the percentage of remaining time
		const percentage =
			((startSeconds - remainSeconds) / startSeconds) * 100;

		// Convert the percentage to degrees (out of 360 for a circle)
		const degrees = (percentage / 100) * 180;

		// Generate the gradient string
		return `conic-gradient(from -90deg, #F37321, #FFD1B1 ${degrees}deg, lightgray ${degrees}deg)`;
	}

	return (
		<div className='flex flex-col items-center relative mt-[50px]'>
			<UnionMask />
			<div
				style={{
					mask: 'url(#union-mask)',
					WebkitMask: 'url(#union-mask)',
					clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)',
					background:
						startTime && remainTime
							? getGradientBackground(startTime, remainTime)
							: '#F37321',
				}}
				className={`absolute top-[63px] w-[600px] h-[600px] flex justify-center items-center rounded-full`}>
				<div className='w-[490.88px] h-[490.88px] border-[13.79px] border-[#FCFCFC] flex justify-center items-center rounded-full'>
					<div className='w-[452.26px] h-[452.26px] bg-[#FCFCFC] rounded-full pt-[120px]' />
				</div>
			</div>
			<div className='flex flex-col items-center leading-[normal] gap-[12px] z-[1]'>
				<div className='text-gray-800 text-[32px] font-semibold'>
					Remaining Time
				</div>
				<div
					className={`${
						error ? 'text-gray-400' : 'text-hanhwa-orange'
					} text-[68px] font-bold`}>
					{remainTime ? secondsToTimeFormat(remainTime) : '00:00'}
				</div>
			</div>
		</div>
	);
}

const UnionMask = () => {
	return (
		<svg
			className='h-[230px]'
			xmlns='http://www.w3.org/2000/svg'
			width='601'
			height='300'
			viewBox='0 0 601 300'
			fill='none'>
			<mask id='union-mask'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M303.543 0V249.49L346.915 3.51567L352.824 4.55756L306.726 265.993L397.701 16.0403L403.339 18.0924L312.557 267.514L445.534 37.1904L450.73 40.1904L318.008 270.072L488.969 66.329L493.565 70.1857L322.964 273.5L526.668 102.572L530.525 107.168L327.18 277.795L557.527 144.804L560.527 150L330.589 282.755L580.594 191.761L582.646 197.399L333.197 288.191L595.116 242.007L596.158 247.916L334.805 294H600.73V300H335.237L597.229 346.196L596.188 352.105L334.76 306.009L584.683 396.973L582.631 402.611L333.265 311.849L563.549 444.804L560.549 450L330.673 317.281L534.419 488.244L530.562 492.841L327.175 322.179L498.165 525.956L493.568 529.812L322.939 326.464L455.927 556.806L450.73 559.806L317.998 329.906L408.972 579.856L403.334 581.908L312.553 332.489L358.735 594.4L352.826 595.442L303.543 315.943V600H297.543V318.07L248.635 595.442L242.726 594.4L288.908 332.489L198.127 581.908L192.489 579.856L283.463 329.906L150.73 559.806L145.534 556.806L278.522 326.464L107.893 529.812L103.296 525.956L274.285 322.179L70.8984 492.841L67.0417 488.244L270.788 317.281L40.9121 450L37.9121 444.804L268.196 311.849L18.8301 402.611L16.778 396.973L266.701 306.009L5.27344 352.105L4.23155 346.196L266.224 300H90.7305H0.730469V294H90.7305H266.656L5.30286 247.916L6.34475 242.007L268.264 288.191L18.8153 197.399L20.8674 191.761L270.873 282.755L40.9336 150L43.9336 144.804L274.281 277.795L70.9358 107.168L74.7926 102.572L278.497 273.5L107.896 70.1857L112.492 66.329L283.452 270.072L150.73 40.1904L155.927 37.1904L288.904 267.514L198.122 18.0924L203.76 16.0403L294.735 265.993L248.637 4.55756L254.546 3.51567L297.543 247.363V0H303.543Z'
					fill='white'
				/>
			</mask>
		</svg>
	);
};
