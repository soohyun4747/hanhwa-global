export function HomeRound({
	className,
	onClick,
}: {
	className?: string;
	onClick?: () => void;
}) {
	return (
		<div
			className={className}
			onClick={onClick}>
			<svg
				width='140'
				height='140'
				viewBox='0 0 140 140'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<g filter='url(#filter0_d_1523_32124)'>
					<circle
						cx='70'
						cy='70'
						r='49.5'
						fill='white'
						stroke='#C4C4C4'
					/>
					<path
						d='M57.25 88C56.0812 88 55.0811 87.5975 54.2495 86.7925C53.4165 85.9861 53 85.0171 53 83.8857V65.3714C53 64.72 53.1509 64.1029 53.4526 63.52C53.753 62.9371 54.1688 62.4571 54.7 62.08L67.45 52.8229C67.8396 52.5486 68.2469 52.3429 68.6719 52.2057C69.0969 52.0686 69.5396 52 70 52C70.4604 52 70.9031 52.0686 71.3281 52.2057C71.7531 52.3429 72.1604 52.5486 72.55 52.8229L85.3 62.08C85.8312 62.4571 86.2477 62.9371 86.5495 63.52C86.8498 64.1029 87 64.72 87 65.3714V83.8857C87 85.0171 86.5842 85.9861 85.7526 86.7925C84.9196 87.5975 83.9187 88 82.75 88H76.25C75.1454 88 74.25 87.1046 74.25 86V75.6C74.25 74.4954 73.3546 73.6 72.25 73.6H67.75C66.6454 73.6 65.75 74.4954 65.75 75.6V86C65.75 87.1046 64.8546 88 63.75 88H57.25Z'
						fill='black'
					/>
				</g>
				<defs>
					<filter
						id='filter0_d_1523_32124'
						x='0'
						y='0'
						width='140'
						height='140'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'>
						<feFlood
							flood-opacity='0'
							result='BackgroundImageFix'
						/>
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='10' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_1523_32124'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_1523_32124'
							result='shape'
						/>
					</filter>
				</defs>
			</svg>
		</div>
	);
}
