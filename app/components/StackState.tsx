import { atom } from 'recoil';

export type Task = {
  task: string;
  priority: string;
  duration: number;
  memo: string;
};

export const stackState = atom<Task[]>({
  key: 'stackState', 
  default: [],
});

export const selectedAlgorithmState = atom<string | null>({
  key: 'selectedAlgorithmState',
  default: null,
});