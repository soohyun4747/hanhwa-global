import { atom } from 'recoil';

export const isSettingState = atom<boolean>({
  key: 'isSettingState',
  default: false,
});