import { ButtonMedium } from 'components/ButtonMedium';
import { DropdownField } from 'components/DropdownField';
import { FloatingBar } from 'components/FloatingBar';
import { Modal } from 'components/Modal';
import { TextfieldPassword } from 'components/TextFieldPassword';
import { useEffect, useRef, useState } from 'react';

const userSystemLevels = {
	L1: 'System/L1/User',
	L2: 'System/L2/User',
	L6: 'System/L6/User',
	L9: 'System/L9/User',
};

type UserSystemLevels =
	(typeof userSystemLevels)[keyof typeof userSystemLevels];

export function LoginTemplate() {
	const [userSystemLevel, setUserSystemLevel] = useState<UserSystemLevels>(
		userSystemLevels.L1
	);
	const [password, setPassoword] = useState<string>('');
	const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
	const [invalidRFIDModal, setInvaldRFIDModal] = useState<boolean>(false);

	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (video) {
			const handleTimeUpdate = () => {
				// If the video is near its end, reset it
				if (video.currentTime >= video.duration - 7) {
					video.currentTime = 0;
					video.play(); // Force the loop behavior programmatically
				}
			};

			video.addEventListener('timeupdate', handleTimeUpdate);
			return () =>
				video.removeEventListener('timeupdate', handleTimeUpdate);
		}
	}, [videoRef.current]);

	return (
		<div className='p-[40px] pr-0 flex h-[100vh]'>
			<div className='flex-1 rounded-[20px] relative overflow-hidden p-[60px] flex justify-between flex-col'>
				<video
					className='w-full h-full object-cover absolute top-0 left-0'
					ref={videoRef}
					src='/videos/login.mp4' // Replace with your video source
					loop
					autoPlay
					muted
					controls={false}
				/>
				<div className='absolute inset-0 bg-video-gradient' />
				<FloatingBar transparent={true} />
				<div className='text-white text-[80px] font-medium leading-[110%] tracking-[-3px] z-[1] whitespace-pre-wrap'>
					{'Hanhwa\nElectric Blasting\nSystem'}
				</div>
			</div>
			<div className='flex-1 flex flex-col justify-between pt-[68px] pb-[120px] px-[100px]'>
				<img
					src='/images/Logo.png'
					className='w-[300px]'
				/>
				<div className='flex flex-col gap-[60px]'>
					<div className='flex flex-col gap-[40px]'>
						<div className='text-[80px] font-semibold leading-[110%] tracking-[-3px]'>
							Login
						</div>
						<p className='text-gray-600 text-[32px] font-medium leading-[140%]'>
							Please enter{' '}
							<span className='text-gray-800 font-bold'>
								password
							</span>{' '}
							or tag{' '}
							<span className='text-gray-800 font-bold'>
								RFID card
							</span>{' '}
							to the NFC recognition area.
						</p>
					</div>
					<div
						className={`flex flex-col ${
							isPasswordError ? 'gap-[46px]' : 'gap-[120px]'
						}`}>
						<div className='flex flex-col gap-[20px]'>
							<DropdownField
								menuList={[
									Object.values(userSystemLevels).map(
										(levelVal) => ({
											label: levelVal,
											selected:
												levelVal === userSystemLevel,
											onClick: () =>
												setUserSystemLevel(levelVal),
										})
									),
								]}
								id='login-user'
								value={userSystemLevel}
								style={{ borderWidth: 2 }}
							/>
							<TextfieldPassword
								value={password}
								onChange={(e) => setPassoword(e.target.value)}
								error={isPasswordError ? true : false}
							/>
						</div>
						<ButtonMedium color='black'>Login</ButtonMedium>
					</div>
				</div>
			</div>
			{invalidRFIDModal && (
				<Modal
					title={'Invalid RFID'}
					description={
						'Invalid RFID card, please tag again or try\nwith different card.'
					}
					firstBtn={{
						children: 'Close',
						color: 'black',
						onClick: () => setInvaldRFIDModal(false),
					}}
				/>
			)}
		</div>
	);
}
