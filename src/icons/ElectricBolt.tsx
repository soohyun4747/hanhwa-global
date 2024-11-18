export function ElectricBolt({
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
					d='M18.3633 2.76034L5.41328 14.3603C4.61328 15.0853 5.06328 16.4228 6.13828 16.5228L16.2508 17.4978L10.1883 25.9478C9.91328 26.3353 9.95078 26.8728 10.2883 27.2103C10.6633 27.5853 11.2508 27.5978 11.6383 27.2353L24.5883 15.6353C25.3883 14.9103 24.9383 13.5728 23.8633 13.4728L13.7508 12.4978L19.8133 4.04784C20.0883 3.66034 20.0508 3.12284 19.7133 2.78534C19.3383 2.41033 18.7508 2.39784 18.3633 2.76034Z'
					fill={fill ?? 'white'}
				/>
			</svg>
		</div>
	);
}
