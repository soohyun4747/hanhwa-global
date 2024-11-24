import { ButtonBack } from 'components/ButtonBack';
import { CommonTemplate } from '../CommonTemplate';
import { GrayBoxInfo, InfoBox } from 'components/InfoBox';
import { InfoBoxHorizontal } from 'components/InfoBoxHorizontal';
import { title } from 'process';
import { Button } from 'components/Button';

export function UserAuthorityDetailTemplate({
	user,
	onClickBack,
}: {
	user: any;
	onClickBack: () => void;
}) {
	const userInfo: GrayBoxInfo[] = [
		{ title: 'User ID', content: 'Blaster ID' },
		{ title: 'Company', content: 'Hanhwa' },
	];

	const userInfo2: GrayBoxInfo[] = [
		{ title: 'Level', content: user.level },
		{ title: 'RFID Card', content: 'Registered', detail: '2024.00.00' },
	];

	return (
		<CommonTemplate
			leftElements={[<Button label={'Edit'} />]}
			title={
				<div className='flex gap-[24px] items-center'>
					<ButtonBack onClick={() => onClickBack()} />
					<div>User Authority</div>
				</div>
			}>
			<div className='flex flex-col gap-[20px]'>
				<InfoBox infoList={userInfo} />
				<InfoBoxHorizontal infoList={userInfo2} />
			</div>
		</CommonTemplate>
	);
}
