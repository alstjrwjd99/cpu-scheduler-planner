import { Task } from '../components/StackState';

export function RoundRobin(tasks: Task[]): Task[] {
    const timeSlice = 4; // 각 작업에 할당된 시간 조각 (시간 단위)
    const hoursPerDay = 8; // 하루에 일할 수 있는 총 시간

    // 작업들을 time slice 단위로 나누는 함수
    const distributeTime = (task: Task): Task[] => {
        const requiredTime = task.duration; // 각 작업에 필요한 시간
        const slices = Math.ceil(requiredTime / timeSlice); // 필요한 조각의 수
        
        return Array.from({ length: slices }, (_, i) => ({
            ...task,
            task: `${task.task} (Part ${i + 1})`,
            duration: Math.min(timeSlice, requiredTime - i * timeSlice), // 각 조각의 소요 시간
        }));
    };

    // 모든 작업을 time slice 단위로 나누고 순차적으로 재배치
    let distributedTasks: Task[] = [];
    tasks.forEach(task => {
        distributedTasks = [...distributedTasks, ...distributeTime(task)];
    });

    return distributedTasks;
}