import { ReactNode } from 'react';
import { GNB } from '../components/GNB';

export function CommonTemplate({ children }: { children: ReactNode }) {
	return (
		<div className=''>
			<GNB />
			{children}
		</div>
	);
}
