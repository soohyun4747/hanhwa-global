import { NetworkBox } from 'components/NetworkBox';
import { Bluetooth } from 'icons/Bluetooth';
import { HaLow } from 'icons/HaLow';
import { LoRa } from 'icons/LoRa';
import { SettingsEthernet } from 'icons/SettingsEthernet';
import { Wifi } from 'icons/Wifi';
import { CommonTemplate } from './CommonTemplate';
import { WifiTemplate } from './Network/WifiTemplate';
import { useState } from 'react';
import { EthernetTemplate } from './Network/EthernetTemplate';

const networkType = {
	wifi: 'wifi',
	ethernet: 'ethernet',
	wifiDirect: 'wifiDirect',
	wifiHalow: 'wifiHalow',
	wifiLora: 'wifiLora',
} as const;

type NetworkType = (typeof networkType)[keyof typeof networkType];

const networkList = [
	{
		type: networkType.wifi,
		icon: <Wifi fill='white' />,
		subTitle: 'Wifi',
		title: 'TP-Link_D5E4_5G',
	},
	{
		type: networkType.ethernet,
		icon: <SettingsEthernet fill='white' />,
		subTitle: 'Ethernet',
		title: 'TP-Link_D5E4_5G',
	},
	{
		type: networkType.wifiDirect,
		icon: <Bluetooth fill='white' />,
		subTitle: 'Wifi Direct',
		title: 'TP-Link_D5E4_5G',
	},
	{
		type: networkType.wifiHalow,
		icon: <HaLow fill='white' />,
		subTitle: 'Wifi HaLow',
		title: 'TP-Link_D5E4_5G',
	},
	{
		type: networkType.wifiLora,
		icon: <LoRa fill='white' />,
		subTitle: 'Wifi LoRa',
		title: 'TP-Link_D5E4_5G',
	},
];

const NetworkTabs: { [key in NetworkType]: any } = {
	[networkType.wifi]: WifiTemplate,
	[networkType.ethernet]: EthernetTemplate,
	[networkType.wifiDirect]: WifiTemplate,
	[networkType.wifiHalow]: WifiTemplate,
	[networkType.wifiLora]: WifiTemplate,
};

const NetworkTab = ({
	type,
	closeNetworkTab,
}: {
	type: NetworkType;
	closeNetworkTab: () => void;
}) => NetworkTabs[type]({ onClickBack: closeNetworkTab });

export function NetworkTemplate() {
	const [networkTabType, setNetworkTabType] = useState<NetworkType>();

	const closeNetworkTab = () => {
		setNetworkTabType(undefined);
	};

	return (
		<>
			{!networkTabType && (
				<CommonTemplate title={'Network'}>
					<div className='flex flex-col gap-[60px] font-semibold text-[28px]'>
						<div className='flex flex-col gap-[28px]'>
							<div className='text-gray-800'>Network Setting</div>
							<div className='grid grid-cols-2 gap-[20px]'>
								{networkList.map((network) => (
									<NetworkBox
										onClick={() =>
											setNetworkTabType(network.type)
										}
										icon={network.icon}
										subTitle={network.subTitle}
										title={network.title}
									/>
								))}
							</div>
						</div>
					</div>
				</CommonTemplate>
			)}
			{networkTabType && (
				<NetworkTab
					closeNetworkTab={closeNetworkTab}
					type={networkTabType}
				/>
			)}
		</>
	);
}
