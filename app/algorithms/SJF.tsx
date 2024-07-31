import { Task } from '../components/StackState';
import { ChartSettings } from '../components/StackState';

export function SJF(stack: Task[], projectInfo: ChartSettings): Task[] {
    const startProject = new Date(projectInfo.startDate);
    const LIMITHOUR = 8;
    const taskWithDate: Task[] = [];
    let currentStartTime = startProject;

    const generateRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgba(${r}, ${g}, ${b}, 0.5)`;
    };

    stack = [...stack].sort((a, b) => {
        return a.duration - b.duration;
    });

    stack.forEach(task => {
        let taskDurationHours = task.duration;
        const graphColor = generateRandomColor();

        // 초기 날짜 설정
        let dayOffset = 1;

        while (taskDurationHours > 0) {
            const hoursToAllocate = Math.min(taskDurationHours, LIMITHOUR);

            // 날짜 계산: 하루씩 증가시키기 위해 dayOffset을 사용
            const taskStart = new Date(currentStartTime);
            taskStart.setDate(taskStart.getDate() + dayOffset);

            const tmpTask = {
                ...task,
                duration: hoursToAllocate,
                date: taskStart,
                color: graphColor
            };

            taskWithDate.push(tmpTask);
            taskDurationHours -= hoursToAllocate;
            currentStartTime = new Date(taskStart);
        }
    });

    return taskWithDate;
}