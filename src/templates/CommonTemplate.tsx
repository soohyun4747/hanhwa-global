import { FloatingBar } from 'components/FloatingBar';
import { Gnb } from 'components/Gnb';
import { ReactNode } from 'react';
import { SettingTemplate } from './Setting/SettingTemplate';
import { useRecoilValue } from 'recoil';
import { isSettingState } from 'recoil/isSettingState';

export function CommonTemplate({ children }: { children: ReactNode }) {
	const isSetting = useRecoilValue(isSettingState);

	return (
		<div className='flex w-full'>
			<Gnb />
			{isSetting && <SettingTemplate />}
			{children}
			<FloatingBar charge={50} />
		</div>
	);
}
