export function ChevronRight({
	width,
	height,
	fill,
}: {
	width?: string | number;
	height?: string | number;
	fill?: string;
}) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '24'}
			height={height ?? '25'}
			viewBox='0 0 24 25'
			fill='none'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M7.61905 21.8112C8.12221 22.2424 8.87977 22.1842 9.31111 21.681L16.5111 13.2807C16.8962 12.8313 16.8962 12.1681 16.511 11.7187L9.31105 3.31907C8.87977 2.81588 8.12221 2.75762 7.61899 3.18894C7.11583 3.62025 7.05757 4.37781 7.48891 4.881L14.0195 12.4998L7.48885 20.1191C7.05757 20.6223 7.11583 21.3798 7.61905 21.8112Z'
				fill={fill ?? '#434343'}
			/>
		</svg>
	);
}
