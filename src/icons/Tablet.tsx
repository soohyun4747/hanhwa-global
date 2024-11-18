export function Tablet({
	className,
	fill,
	onClick,
}: {
	className?: string;
	fill?: string;
	onClick?: () => void;
}) {
	return (
		<div
			className={className}
			onClick={onClick}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='30'
				height='30'
				viewBox='0 0 30 30'
				fill='none'>
				<path
					d='M3.54545 26C2.84545 26 2.24642 25.731 1.74836 25.1929C1.24945 24.6539 1 24.0063 1 23.25V6.75C1 5.99375 1.24945 5.34658 1.74836 4.8085C2.24642 4.2695 2.84545 4 3.54545 4H26.4545C27.1545 4 27.754 4.2695 28.2529 4.8085C28.751 5.34658 29 5.99375 29 6.75V23.25C29 24.0063 28.751 24.6539 28.2529 25.1929C27.754 25.731 27.1545 26 26.4545 26H3.54545ZM7.36364 23.25H22.6364V6.75H7.36364V23.25Z'
					fill={fill ?? 'white'}
				/>
			</svg>
		</div>
	);
}
