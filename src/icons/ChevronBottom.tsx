export function ChevronBottom({
	fill,
	width,
	height,
	id,
}: {
	fill?: string;
	width?: string;
	height?: string;
	id?: string;
}) {
	return (
		<svg
			id={id}
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '32'}
			height={height ?? '32'}
			viewBox='0 0 32 32'
			fill='none'>
			<path
				id={id}
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M3.5859 10.1588C3.01086 10.8297 3.08854 11.8398 3.7595 12.4149L14.9599 22.0149C15.5591 22.5284 16.4433 22.5284 17.0425 22.0148L28.242 12.4148C28.913 11.8398 28.9906 10.8297 28.4155 10.1587C27.8405 9.48787 26.8304 9.41019 26.1595 9.98531L16.0011 18.6927L5.84198 9.98523C5.1711 9.41019 4.16102 9.48787 3.5859 10.1588Z'
				fill={fill ?? '#434343'}
			/>
		</svg>
	);
}
