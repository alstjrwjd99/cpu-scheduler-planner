import { Task } from '../components/StackState';

export function Priority(tasks: Task[]): Task[] {
    const priorityMap: { [key: string]: number } = {
        '상': 1,
        '중': 2,
        '하': 3,
        '중요도':4,
    };

    return [...tasks].sort((a, b) => {
        const priorityDifference = priorityMap[a.priority] - priorityMap[b.priority];
        if (priorityDifference !== 0) {
            return priorityDifference; // 중요도가 다르면 우선순위대로 정렬
        } else {
            return a.duration - b.duration; // 중요도가 같으면 duration(소요 기간)이 짧은 순서로 정렬
        }
    });
}