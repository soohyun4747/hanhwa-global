export function Wifi({
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
				width='80'
				height='80'
				viewBox='0 0 80 80'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<g clip-path='url(#clip0_1523_32137)'>
					<g filter='url(#filter0_d_1523_32137)'>
						<g clip-path='url(#clip1_1523_32137)'>
							<path
								d='M31.385 42.6242C33.67 40.403 36.7688 39.1552 40 39.1552C43.2312 39.1552 46.33 40.403 48.615 42.6242M24 35.4443C32.8355 26.8519 47.1622 26.8519 56 35.4443M41.2301 49.8041L40 51L38.7699 49.8041C39.0963 49.4872 39.5387 49.3092 40 49.3092C40.4613 49.3092 40.9037 49.4872 41.2301 49.8041Z'
								stroke='#262626'
								stroke-width='4'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</g>
					</g>
				</g>
				<defs>
					<filter
						id='filter0_d_1523_32137'
						x='-6.61361'
						y='-6.61361'
						width='93.2272'
						height='93.2273'
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
						<feGaussianBlur stdDeviation='5.8267' />
						<feComposite
							in2='hardAlpha'
							operator='out'
						/>
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_1523_32137'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_1523_32137'
							result='shape'
						/>
					</filter>
					<clipPath id='clip0_1523_32137'>
						<rect
							width='80'
							height='80'
							rx='40'
							fill='white'
						/>
					</clipPath>
					<clipPath id='clip1_1523_32137'>
						<rect
							x='5.03979'
							y='5.03979'
							width='69.9205'
							height='69.9205'
							rx='34.9602'
							fill='white'
						/>
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}
