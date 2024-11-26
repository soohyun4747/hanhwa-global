import { Snb } from 'components/Snb';
import { useState } from 'react';
import { GeneralTemplate } from './GeneralTemplate';
import { DeviceTemplate } from './DeviceTemplate';
import { NetworkTemplate } from './NetworkTemplate';
import { UserAuthorityTemplate } from './UserAuthorityTemplate';
import { CalibrationTemplate } from './CalibrationTemplate';

const settingTabs = [
	<GeneralTemplate />,
	<DeviceTemplate />,
	<NetworkTemplate />,
	<></>,
	<UserAuthorityTemplate/>,
	<CalibrationTemplate/>
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
