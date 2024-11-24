import { Snb } from 'components/Snb';
import { useState } from 'react';
import { GeneralTemplate } from './GeneralTemplate';
import { DeviceTemplate } from './DeviceTemplate';
import { NetworkTemplate } from './NetworkTemplate';
import { UserAuthority } from './UserAuthority';

const settingTabs = [
	<GeneralTemplate />,
	<DeviceTemplate />,
	<NetworkTemplate />,
	<></>,
	<UserAuthority/>
];

const SettingTab = ({ idx }: { idx: number }) => settingTabs[idx];

export function SettingTemplate() {
	const [menuIdx, setMenuIdx] = useState<number>(0);

	return (
		<div className='flex w-full'>
			<Snb
				selectedIdx={menuIdx}
				setMenuIdx={setMenuIdx}
			/>
			<SettingTab idx={menuIdx} />
		</div>
	);
}
