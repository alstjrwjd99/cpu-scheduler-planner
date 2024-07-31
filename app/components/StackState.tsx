import { atom } from 'recoil';

export type Task = {
  title: string;
  priority: string;
  duration: number;
  memo: string;
  date? : Date | null;
  color?: string | null; 
};

export const stackState = atom<Task[]>({
  key: 'stackState',
  default: [
    {
      title: 'Design Mockups',
      priority: '상',
      duration: 42,
      memo: 'Create design mockups for the new project',
      date: new Date('2024-07-31T09:00:00'),
      color: 'rgba(255, 99, 132, 0.5)' // Example color
    },
    {
      title: 'API Integration',
      priority: '하',
      duration: 22,
      memo: 'Integrate the new API with existing services',
      date: new Date('2024-08-01T09:00:00'),
      color: 'rgba(54, 162, 235, 0.5)' // Example color
    },
    {
      title: 'Testing',
      priority: '중',
      duration: 27,
      memo: 'Perform end-to-end testing on the new features',
      date: new Date('2024-08-02T09:00:00'),
      color: 'rgba(255, 206, 86, 0.5)' // Example color
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
