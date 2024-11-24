export function Close({
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
				width='48'
				height='48'
				viewBox='0 0 48 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<g clipPath='url(#clip0_1523_32119)'>
					<path
						d='M36.59 14.23C37.3687 13.4513 37.3687 12.1887 36.59 11.41C35.8113 10.6313 34.5487 10.6313 33.77 11.41L24 21.18L14.23 11.41C13.4513 10.6313 12.1887 10.6313 11.41 11.41C10.6313 12.1887 10.6313 13.4513 11.41 14.23L21.18 24L11.41 33.77C10.6313 34.5487 10.6313 35.8113 11.41 36.59C12.1887 37.3687 13.4513 37.3687 14.23 36.59L24 26.82L33.77 36.59C34.5487 37.3687 35.8113 37.3687 36.59 36.59C37.3687 35.8113 37.3687 34.5487 36.59 33.77L26.82 24L36.59 14.23Z'
						fill='#262626'
					/>
				</g>
				<defs>
					<clipPath id='clip0_1523_32119'>
						<rect
							width='48'
							height='48'
							fill='white'
						/>
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}
