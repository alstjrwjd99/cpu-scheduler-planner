import { Task } from '../components/StackState';

// SJF 알고리즘: duration 기준으로 정렬
export function SJF(tasks: Task[]): Task[] {
    return [...tasks].sort((a, b) => a.duration - b.duration);
}