export function KeyVertical({
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
					d='M8.75 16.875C8.0625 16.875 7.47396 16.6302 6.98437 16.1406C6.49479 15.651 6.25 15.0625 6.25 14.375C6.25 13.6875 6.49479 13.099 6.98437 12.6094C7.47396 12.1198 8.0625 11.875 8.75 11.875C9.4375 11.875 10.026 12.1198 10.5156 12.6094C11.0052 13.099 11.25 13.6875 11.25 14.375C11.25 15.0625 11.0052 15.651 10.5156 16.1406C10.026 16.6302 9.4375 16.875 8.75 16.875ZM8.75 21.875C6.66667 21.875 4.89583 21.1458 3.4375 19.6875C1.97917 18.2292 1.25 16.4583 1.25 14.375C1.25 12.2917 1.97917 10.5208 3.4375 9.0625C4.89583 7.60417 6.66667 6.875 8.75 6.875C10.1458 6.875 11.4115 7.21875 12.5469 7.90625C13.6823 8.59375 14.5833 9.5 15.25 10.625L25.7187 10.625C25.8854 10.625 26.0469 10.6562 26.2031 10.7187C26.3594 10.7812 26.5 10.875 26.625 11L29.125 13.5C29.25 13.625 29.3385 13.7604 29.3906 13.9062C29.4427 14.0521 29.4687 14.2083 29.4687 14.375C29.4687 14.5417 29.4427 14.6979 29.3906 14.8437C29.3385 14.9896 29.25 15.125 29.125 15.25L25.1562 19.2187C25.0521 19.3229 24.9271 19.4062 24.7812 19.4687C24.6354 19.5312 24.4896 19.5729 24.3437 19.5937C24.1979 19.6146 24.0521 19.6042 23.9062 19.5625C23.7604 19.5208 23.625 19.4479 23.5 19.3437L21.875 18.125L20.0937 19.4687C19.9896 19.5521 19.875 19.6146 19.75 19.6562C19.625 19.6979 19.5 19.7187 19.375 19.7187C19.25 19.7187 19.1198 19.6979 18.9844 19.6562C18.849 19.6146 18.7292 19.5521 18.625 19.4687L16.7187 18.125L15.25 18.125C14.5833 19.25 13.6823 20.1562 12.5469 20.8437C11.4115 21.5312 10.1458 21.875 8.75 21.875ZM8.75 19.375C9.91667 19.375 10.9427 19.0208 11.8281 18.3125C12.7135 17.6042 13.3021 16.7083 13.5937 15.625L17.5 15.625L19.3125 16.9062L21.875 15L24.0937 16.7187L26.4375 14.375L25.1875 13.125L13.5937 13.125C13.3021 12.0417 12.7135 11.1458 11.8281 10.4375C10.9427 9.72917 9.91667 9.375 8.75 9.375C7.375 9.375 6.19792 9.86458 5.21875 10.8437C4.23958 11.8229 3.75 13 3.75 14.375C3.75 15.75 4.23958 16.9271 5.21875 17.9062C6.19792 18.8854 7.375 19.375 8.75 19.375Z'
					fill={fill ?? 'white'}
				/>
			</svg>
		</div>
	);
}