import { atom } from 'recoil';

export type Task = {
  task: string;
  priority: string;
  duration: number;
  memo: string;
};

export type ChartSettings = {
  projectName: string;
  startDate: string;
  endDate: string;
};

export const chartSettingsState = atom<ChartSettings>({
  key: 'chartSettingsState',
  default: {
      projectName: '',
      startDate: '',
      endDate: '',
  },
});

export const stackState = atom<Task[]>({
  key: 'stackState', 
  default: [],
});

export const selectedAlgorithmState = atom<string | null>({
  key: 'selectedAlgorithmState',
  default: null,
});