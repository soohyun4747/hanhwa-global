/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'toggle-on-gradient':
					'linear-gradient(261deg, #0066C3 5.7%, #1488F3 102.29%)',
				'toggle-off-gradient':
					'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%), linear-gradient(261deg, #0066C3 5.7%, #1488F3 102.29%)',
			},
			boxShadow: {
				home: '0px 0px 20px 0px rgba(0, 0, 0, 0.15)',
				dropdown: '0px 2px 15px 0px rgba(0, 0, 0, 0.20)',
			},
			colors: {
				'variation-1': '#FEE2D3',
				'variation-2': '#F1BFA8',
				'off-white': '#FAFAFA',
				'hanhwa-orange': '#F37321',
				'hanhwa-orange-70': 'rgba(243,115,33,0.7)',
				'hanhwa-orange-70-100': '#F79D64',
				'hanhwa-orange-50': 'rgba(243,115,33,0.5)',
				'hanhwa-orange-50-100': '#F9B990',
				'gray-50': '#F5F5F5',
				'gray-100': '#E5E5E5',
				'gray-200': '#D9D9D9',
				'gray-300': '#C4C4C4',
				'gray-400': '#9D9D9D',
				'gray-500': '#7B7B7B',
				'gray-600': '#555555',
				'gray-700': '#434343',
				'gray-800': '#262626',
				'status-done': '#34C759',
				'status-error': '#F20F00',
				'status-success': '#1289F8',
				'status-notification': '#FFB424',
				'ava-violet': '#6B57FF',
				'ava-orange': '#FF6400',
				'ava-lue': '#1D9EFF',
				'ava-erald': '#1D9EFF',
			},
		},
	},
	plugins: [],
};
