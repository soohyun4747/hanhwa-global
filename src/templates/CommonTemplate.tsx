import { FloatingBar } from 'components/FloatingBar';
import { Gnb } from 'components/Gnb';
import { ReactNode } from 'react';
import { SettingTemplate } from './Setting/SettingTemplate';
import { useIsSettingStore } from 'stores/isSettingStore';

export function CommonTemplate({ children }: { children: ReactNode }) {
	const isSetting = useIsSettingStore((state) => state.isSetting);

	return (
		<div className='flex w-full'>
			<Gnb />
			{isSetting && <SettingTemplate />}
			{children}
			<FloatingBar charge={50} />
		</div>
	);
}
