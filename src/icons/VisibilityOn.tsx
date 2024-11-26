export function VisibilityOn({ onClick }: { onClick?: () => void }) {
	return (
		<svg
			onClick={onClick}
			xmlns='http://www.w3.org/2000/svg'
			width='40'
			height='40'
			viewBox='0 0 40 40'
			fill='none'>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M36 20C36 22.5 28.8366 32 20 32C11.1634 32 4 22.5 4 20C4 17.5 11.1634 8 20 8C28.8366 8 36 17.5 36 20ZM28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20ZM20 26C23.3137 26 26 23.3137 26 20C26 16.6863 23.3137 14 20 14C16.6863 14 14 16.6863 14 20C14 23.3137 16.6863 26 20 26Z'
				fill='#9D9D9D'
			/>
		</svg>
	);
}
