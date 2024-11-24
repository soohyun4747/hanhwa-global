export function Check({
	fill,
	width,
	height,
}: {
	fill?: string;
	width?: number | string;
	height?: number | string;
}) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '40'}
			height={height ?? '40'}
			viewBox='0 0 40 40'
			fill='none'>
			<path
				d='M16.4342 30.0624C15.9123 30.5812 15.0693 30.5812 14.5474 30.0624L6.31918 21.8833C5.59189 21.1603 5.59189 19.9836 6.31918 19.2606C7.04034 18.5437 8.20503 18.5437 8.9262 19.2606L15.4908 25.7861L31.0738 10.2959C31.795 9.5791 32.9596 9.57909 33.6808 10.2959C34.4081 11.0189 34.4081 12.1956 33.6808 12.9186L16.4342 30.0624Z'
				fill={fill ?? '#434343'}
			/>
		</svg>
	);
}
