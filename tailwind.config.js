/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
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
			},
		},
	},
	plugins: [],
};
