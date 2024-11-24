export function BatteryCharging({
	className,
}: {
	className?: string;
}) {
	return (
		<div className={className}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='40'
				height='40'
				viewBox='0 0 40 40'
				fill='none'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M2 12C2 10.8954 2.89543 10 4 10H32C33.1046 10 34 10.8954 34 12V14H37C37.5523 14 38 14.4477 38 15V25C38 25.5523 37.5523 26 37 26H34V28C34 29.1046 33.1046 30 32 30H4C2.89543 30 2 29.1046 2 28V12ZM31 12C31.5523 12 32 12.4477 32 13V27C32 27.5523 31.5523 28 31 28H5C4.44771 28 4 27.5523 4 27V13C4 12.4477 4.44772 12 5 12H31Z'
					fill={'#34C759'}
				/>
				<rect
					x='4'
					y='12'
					width={'24'}
					height='16'
					fill={'#34C759'}
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M16.7692 18.8477V14L13 21H16.2308V25.8477L20 18.8477H16.7692Z'
					fill='white'
				/>
			</svg>
		</div>
	);
}
