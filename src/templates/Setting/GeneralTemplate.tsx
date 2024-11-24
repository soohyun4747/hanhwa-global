import DraggableList from 'react-draggable-list';
import { InfoBox } from '../../components/InfoBox';
import {
	DraggableListBox,
	DraggableListItem,
} from 'components/DraggableListBox';
import { SetStateAction, useState } from 'react';
import { GrayBox } from 'components/GrayBox';
import { ChevronRight } from 'icons/ChevronRight';
import { CommonTemplate } from './CommonTemplate';

const draggableList: DraggableListItem[] = [
	{ id: 1, content: 'English' },
	{ id: 2, content: '한국어' },
];

const temperatureInfo = [
	{ title: 'Ram', content: '0.66030496' },
	{ title: 'Battery', content: '0.66030496' },
	{ title: 'CPU', content: '0.66030496' },
];

export function GeneralTemplate() {
	const [languageList, setLanguageList] =
		useState<DraggableListItem[]>(draggableList);

	return (
		<CommonTemplate title={'General'} >
			<div className='flex flex-col gap-[60px] font-semibold text-[28px]'>
				<div className='flex flex-col gap-[28px]'>
					<div className='text-gray-800'>Temperature</div>
					<InfoBox infoList={temperatureInfo} />
				</div>
				<div className='flex flex-col gap-[28px]'>
					<div className='text-gray-800'>Nation / Language</div>
					<DraggableListBox
						list={languageList}
						setList={setLanguageList}
					/>
				</div>
				<div className='flex flex-col gap-[28px]'>
					<div className='text-gray-800'>Firmware</div>
					<GrayBox>
						<div className='flex justify-between items-center'>
							<div>Firmware update</div>
							<ChevronRight />
						</div>
					</GrayBox>
				</div>
				<div className='flex flex-col gap-[28px]'>
					<div className='text-gray-800'>Etc</div>
					<GrayBox>
						<div className='flex justify-between items-center'>
							<div>Function test</div>
							<ChevronRight />
						</div>
					</GrayBox>
				</div>
			</div>
		</CommonTemplate>
	);
}
