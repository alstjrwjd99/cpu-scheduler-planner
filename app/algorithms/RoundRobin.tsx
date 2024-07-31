import { Task } from '../components/StackState';
import { ChartSettings } from '../components/StackState';

export function RoundRobin(stack: Task[], projectInfo: ChartSettings): Task[] {
    const timeSlice = 4;
    const startProject = new Date(projectInfo.startDate);
    const taskWithDate: Task[][] = [];

    const generateRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgba(${r}, ${g}, ${b}, 0.5)`;
    };

    stack.forEach((task) => {
        let taskDurationHours = task.duration;
        const graphColor = generateRandomColor();
        let tmpTaskList: Task[] = [];

        while (taskDurationHours > 0) {
            const hoursToAllocate = Math.min(taskDurationHours, timeSlice);
            const tmpTask: Task = {
                ...task,
                duration: hoursToAllocate,
                color: graphColor
            };

            tmpTaskList.push(tmpTask);
            taskDurationHours -= hoursToAllocate;
        }
        taskWithDate.push(tmpTaskList);
    });

    const totalTaskList: Task[] = [];
    let index = 0;
    let currentStartTime = new Date(startProject); // Keep track of the current start time

    while (totalTaskList.length < stack.reduce((acc, task) => acc + Math.ceil(task.duration / timeSlice), 0)) {
        taskWithDate.forEach(taskList => {
            if (taskList[index]) {
                const timeTask: Task = {
                    ...taskList[index],
                    date: new Date(currentStartTime)
                };
                totalTaskList.push(timeTask);
                currentStartTime.setDate(currentStartTime.getDate() + 1);
            }
        });
        index++;
    }

    return totalTaskList;
}