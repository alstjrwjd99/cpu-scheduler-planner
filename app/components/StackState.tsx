import { atom } from 'recoil';

export type Task = {
  title?: string;
  priority: string;
  duration: number;
  memo: string | null;
  date? : Date;
  color?: string; 
};

export const stackState = atom<Task[]>({
  key: 'stackState',
  default: [
    {
      title: 'Design Mockups',
      priority: '매우높음',
      duration: 42,
      memo: 'Create design mockups for the new project',
      date: new Date('2024-07-31T09:00:00'),
      color: 'rgba(255, 99, 132, 0.5)'
    },
    {
      title: 'API Integration',
      priority: '낮음',
      duration: 22,
      memo: 'Integrate the new API with existing services',
      date: new Date('2024-08-01T09:00:00'),
      color: 'rgba(54, 162, 235, 0.5)'
    },
    {
      title: 'Testing',
      priority: '중간',
      duration: 27,
      memo: 'Perform end-to-end testing on the new features',
      date: new Date('2024-08-02T09:00:00'),
      color: 'rgba(255, 206, 86, 0.5)'
    }
  ],
});

export const selectedAlgorithmState = atom<string | null>({
  key: 'selectedAlgorithmState',
  default: null,
});


export type ChartSettings = {
  projectName: string;
  startDate: Date;
  endDate: Date;
};

export const chartSettingsState = atom<ChartSettings>({
  key: 'chartSettingsState',
  default: {
    projectName: '',
    startDate: new Date(),
    endDate: new Date(),
  },
});
