import { Button } from 'components/Button';
import { CommonTemplate } from './CommonTemplate';
import { GrayBox } from 'components/GrayBox';
import { useState } from 'react';
import { TimeHalfCircle } from 'components/TimeHalfCircle';
import { ButtonMedium } from 'components/ButtonMedium';

const calibrationStatus = {
	before: 'before',
	calibrating: 'calibrating',
	error: 'error',
} as const;

type CalibrationStatus =
	(typeof calibrationStatus)[keyof typeof calibrationStatus];

const calibrateMessage = {
	before: 'Please calibrate the measured value of the current sensor.',
	calibrating:
		'Calibrate the sensor for accurate current measurements.\nBe sure to wait until calibration is complete.',
	error: 'Calibration failed, Please try again',
};

export function CalibrationTemplate() {
	const [status, setStatus] = useState<CalibrationStatus>(
		calibrationStatus.before
	);

	return (
		<CommonTemplate title={'Calibration'}>
			<GrayBox>
				<div className='flex flex-col items-center'>
					<div className='text-center flex flex-col items-center gap-[16px]'>
						<div className='text-gray-600 text-[28px] font-semibold leading-[normal]'>
							Notice
						</div>
						<div
							className={`text-[40px] whitespace-pre-wrap ${
								status === calibrationStatus.error
									? 'font-semibold text-status-error leading-[120%]'
									: 'font-medium leading-[normal]'
							}`}>
							{calibrateMessage[status]}
						</div>
					</div>
					<TimeHalfCircle
						startTime={0}
						remainTime={0}
						error={
							status === calibrationStatus.error ? true : false
						}
					/>
					<div className='pt-[80px] w-[600px] pb-[12px]'>
						<ButtonMedium
							color='black'
							disabled={status === calibrationStatus.calibrating}>
							{status === calibrationStatus.calibrating
								? 'Calibrating...'
								: 'Start current calibration'}
						</ButtonMedium>
					</div>
				</div>
			</GrayBox>
		</CommonTemplate>
	);
}
