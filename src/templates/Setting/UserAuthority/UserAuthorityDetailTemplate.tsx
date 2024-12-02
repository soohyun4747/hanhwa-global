import { ButtonBack } from 'components/ButtonBack';
import { CommonTemplate } from '../CommonTemplate';
import { InfoBox } from 'components/InfoBox';
import { InfoBoxHorizontal } from 'components/InfoBoxHorizontal';
import { Button, buttonColor } from 'components/Button';
import { InfoBoxEdit } from 'components/InfoBoxEdit';
import { useState } from 'react';
import { userLevel, UserLevel } from '../UserAuthorityTemplate';
import { GrayBox } from 'components/GrayBox';
import { Dropdown } from 'components/Dropdown';
import { ChevronBottom } from 'icons/ChevronBottom';
import { ButtonMedium } from 'components/ButtonMedium';
import { Plus } from 'icons/Plus';
import { Modal } from 'components/Modal';
import { TimeCircle } from 'components/TimeCircle';
import { ToastMessage } from 'components/ToastMessage';
import { Check } from 'icons/Check';
import { Minus } from 'icons/Minus';
import { ResetPasswordModal } from 'components/ResetPasswordModal';

export function UserAuthorityDetailTemplate({
	user,
	onClickBack,
}: {
	user: any;
	onClickBack: () => void;
}) {
	const [edit, setEdit] = useState<boolean>(false);
	const [userId, setUserId] = useState<string>('Blaster ID');
	const [userIdInput, setUserIdInput] = useState<string>('Blaster ID');
	const [company, setCompany] = useState<string>('Hanhwa');
	const [companyInput, setCompanyInput] = useState<string>('Hanhwa');
	const [level, setLevel] = useState<UserLevel>(user.level);
	const [levelInput, setLevelInput] = useState<UserLevel>(user.level);
	const [RFIDCard, setRFIDCard] = useState<boolean>(true);
	const [RFIDRegisterModal, setRFIDRegisterModal] = useState<boolean>(false);
	const [RFIDDeleteModal, setRFIDDeleteModal] = useState<boolean>(false);
	const [toastMessage, setToastMessage] = useState<string>('');
	const [userDeleteModal, setUserDeleteModal] = useState<boolean>(false);
	const [resetPasswordModal, setResetPasswordModal] =
		useState<boolean>(false);

	return (
		<>
			<CommonTemplate
				leftElements={
					edit
						? [
								<Button
									label={'Cancel'}
									onClick={() => setEdit(false)}
								/>,
								<Button
									label={'Save'}
									color='black'
								/>,
						  ]
						: [
								<Button
									label={'Edit'}
									onClick={() => setEdit(true)}
								/>,
						  ]
				}
				title={
					<div className='flex gap-[24px] items-center'>
						<ButtonBack onClick={() => onClickBack()} />
						<div>User Authority</div>
					</div>
				}>
				<>
					{edit ? (
						<div className='flex flex-col gap-[28px]'>
							<div className='flex flex-col gap-[20px]'>
								<InfoBoxEdit
									infoList={[
										{
											title: 'User ID',
											content: userIdInput,
											setContent: setUserIdInput,
										},
										{
											title: 'Company',
											content: companyInput,
											setContent: setCompanyInput,
										},
									]}
								/>
								<GrayBox>
									<>
										<div className='flex gap-[80px]'>
											<div className='flex flex-col gap-[16px] flex-1'>
												<div className='text-gray-500 text-[24px] font-medium'>
													Level
												</div>
												<Dropdown
													menuList={[
														Object.values(
															userLevel
														).map((levelVal) => ({
															label: levelVal,
															selected:
																levelVal ===
																levelInput,
															onClick: () =>
																setLevelInput(
																	levelVal
																),
														})),
													]}
													id='level-dropdown'
													element={
														<div
															id='level-dropdown'
															className='h-[92px] rounded-[12px] border border-gray-200 w-full p-[28px] bg-white flex justify-between items-center text-[28px] font-semibold leading-[130%]'>
															{levelInput}
															<ChevronBottom id='level-dropdown' />
														</div>
													}
													menuStyle={{
														width: '-webkit-fill-available',
														top: 108,
													}}
												/>
											</div>
											<div className='flex flex-1 flex-col gap-[16px]'>
												<div className='text-gray-500 text-[24px] font-medium'>
													RFID Card
												</div>
												{RFIDCard ? (
													<ButtonMedium
														onClick={() =>
															setRFIDDeleteModal(
																true
															)
														}
														color={
															buttonColor.black
														}
														className='h-[92px]'>
														<>
															<Minus />
															Register
														</>
													</ButtonMedium>
												) : (
													<ButtonMedium
														onClick={() =>
															setRFIDRegisterModal(
																true
															)
														}
														color={
															buttonColor.black
														}
														className='h-[92px]'>
														<>
															<Plus />
															Register
														</>
													</ButtonMedium>
												)}
											</div>
										</div>
										<div className='flex gap-[80px]'>
											<div className='flex flex-col gap-[16px] flex-1'>
												<div className='text-gray-500 text-[24px] font-medium'>
													Password
												</div>
												<ButtonMedium
													className='h-[92px]'
													onClick={() =>
														setResetPasswordModal(
															true
														)
													}>
													Change Password
												</ButtonMedium>
											</div>
											<div className='flex-1' />
										</div>
									</>
								</GrayBox>
							</div>
							<ButtonMedium
								className='h-[80px]'
								color={buttonColor.red}
								onClick={() => setUserDeleteModal(true)}>
								Delete User
							</ButtonMedium>
						</div>
					) : (
						<div className='flex flex-col gap-[20px]'>
							<InfoBox
								infoList={[
									{ title: 'User ID', content: userId },
									{ title: 'Company', content: company },
								]}
							/>
							<InfoBoxHorizontal
								infoList={[
									{ title: 'Level', content: level },
									{
										title: 'RFID Card',
										content: RFIDCard
											? 'Registered'
											: 'Not Registered',
										detail: '2024.00.00',
									},
								]}
							/>
						</div>
					)}
				</>
			</CommonTemplate>
			{RFIDDeleteModal && (
				<Modal
					title={'Delete RFID Card'}
					description={`Are you sure you want to delete the RFID\ncard?`}
					secondBtn={{
						label: 'Delete',
						color: 'black',
					}}
					close={() => setRFIDDeleteModal(false)}
				/>
			)}
			{RFIDRegisterModal && (
				<Modal
					title={'Register RFID Card'}
					description={`Please contact the card to the NFC\nrecognition area.`}
					secondBtn={{
						label: 'Delete',
						color: 'black',
					}}
					close={() => setRFIDRegisterModal(false)}
					content={<TimeCircle time={0} />}
				/>
			)}
			{userDeleteModal && (
				<Modal
					title={'Delete User'}
					description={`Are you sure you want to delete the\nuser?`}
					secondBtn={{
						label: 'Delete',
						color: 'black',
					}}
					close={() => setUserDeleteModal(false)}
				/>
			)}
			{resetPasswordModal && (
				<ResetPasswordModal
					close={() => setResetPasswordModal(false)}
				/>
			)}
			{toastMessage && (
				<ToastMessage
					icon={<Check fill='white' />}
					label={toastMessage}
				/>
			)}
		</>
	);
}
