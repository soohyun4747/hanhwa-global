import { create } from 'zustand';

export interface IsSettingStore {
	isSetting: boolean;
	changeSetting: () => void;
}

export const useIsSettingStore = create<IsSettingStore>((set) => {
	return {
		isSetting: false,
		changeSetting: () => set((state) => ({ isSetting: !state.isSetting })),
	};
});
