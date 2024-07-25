import { atom } from 'recoil';

export type Task = {
  task: string;
  priority: string;
  duration: string;
  memo: string;
};

export const stackState = atom<Task[]>({
  key: 'stackState', 
  default: [],
});