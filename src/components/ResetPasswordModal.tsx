import { useState } from 'react';
import { Modal } from './Modal';
import { TextfieldPassword } from './TextFieldPassword';
import { NumPad } from './NumPad';

export function ResetPasswordModal({ close }: { close: () => void }) {
	const [currentPassword, setCurrentPassword] = useState<string>('');
	const [newPassword, setNewPassword] = useState<string>('');
	const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
	const [activatedField, setActivatedField] = useState<
		'current' | 'new' | 'confirm'
	>();

	const activatedFieldState = {
		current: setCurrentPassword,
		new: setNewPassword,
		confirm: setConfirmNewPassword,
	};

	return (
		<Modal
			title={'Reset password'}
			description={`Please enter informations below to reset your password.`}
			secondBtn={{
				label: 'Delete',
				color: 'black',
			}}
			content={
				<div className='flex items-end gap-[40px]'>
					<div className='flex flex-col gap-[40px]'>
						<TextfieldPassword
							className='h-[96px] w-[640px]'
							value={currentPassword}
							placeholder='Enter a current password'
							label='Current Password'
							onChange={(e) => setCurrentPassword(e.target.value)}
							onClick={() => setActivatedField('current')}
						/>
						<TextfieldPassword
							className='h-[96px] w-[640px]'
							value={newPassword}
							placeholder='Enter a new password'
							label='New Password'
							onChange={(e) => setNewPassword(e.target.value)}
							onClick={() => setActivatedField('new')}
						/>
						<TextfieldPassword
							className='h-[96px] w-[640px]'
							value={confirmNewPassword}
							placeholder='Enter a new password once again'
							label='Confirm New Password'
							onChange={(e) =>
								setConfirmNewPassword(e.target.value)
							}
							onClick={() => setActivatedField('confirm')}
						/>
					</div>
					<NumPad
						setValue={
							activatedField &&
							activatedFieldState[activatedField]
						}
					/>
				</div>
			}
			close={close}
		/>
	);
}
