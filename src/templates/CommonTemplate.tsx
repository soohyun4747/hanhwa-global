import { Gnb } from 'components/Gnb';
import { Snb } from 'components/Snb';
import { ReactNode, useState } from 'react';

export function CommonTemplate({ children }: { children: ReactNode }) {

	return (
		<div className='flex'>
			<Gnb />
			{children}
		</div>
	);
}
