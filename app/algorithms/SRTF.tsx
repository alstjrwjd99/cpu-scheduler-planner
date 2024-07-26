import { Task } from '../components/StackState';

export function SRTF(tasks: Task[]): Task[] {
    const sortedTasks = [...tasks].sort((a, b) => a.duration - b.duration);
    return sortedTasks;
}