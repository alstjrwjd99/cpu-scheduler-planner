"use client";

import { useRecoilValue } from 'recoil';
import { stackState, selectedAlgorithmState, chartSettingsState, Task } from './StackState';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, TimeScale, TooltipItem } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { FCFS } from '../algorithms/FCFS';
import { Priority } from '../algorithms/Priority';
import { RoundRobin } from '../algorithms/RoundRobin';
import { SJF } from '../algorithms/SJF';

// Register necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
);

export default function ChartModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
    let processedTasks = useRecoilValue(stackState);
    const projectInfo = useRecoilValue(chartSettingsState);
    const selectedAlgorithm = useRecoilValue(selectedAlgorithmState);
    const chartSettings = useRecoilValue(chartSettingsState);
    const formatDate = (date: Date): string => {
        return new Intl.DateTimeFormat('ko-KR', { month: 'short', day: '2-digit' }).format(date);
    };   

    switch (selectedAlgorithm) {
        case 'FCFS':
            processedTasks = FCFS(processedTasks, projectInfo);
            break;
        case 'Priority':
            processedTasks = Priority(processedTasks, projectInfo);
            break;
        case 'RoundRobin':
            processedTasks = RoundRobin(processedTasks, projectInfo);
            break;
        case 'SJF':
            processedTasks = SJF(processedTasks, projectInfo);
            break;
        default:
            processedTasks = processedTasks;
    }
    
    const data = {
        labels: processedTasks.map(task => task.date),
        datasets: [
            {
                label: '걸리는 시간(시)',
                data: processedTasks.map(task => ({
                    x: task.date,
                    y: task.duration <= 8 ? task.duration : 8,
                    title: task.title,
                    duration: task.duration,
                    date:task.date
                })),
                backgroundColor: processedTasks.map(task => task.color),
                borderColor: processedTasks.map(task => task.color),
                borderWidth: 2,
                barThickness: 30,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: chartSettings.projectName || 'Task Schedule Chart',
                font: {
                    size: 20,
                    family: 'Arial, sans-serif',
                },
                color: '#333',
            },
            tooltip: {
                callbacks: {
                    title: (tooltipItems: TooltipItem<'bar'>[]) => {
                        if (tooltipItems.length > 0) {
                            const item = tooltipItems[0].raw as { title: string };
                            return item.title;
                        }
                        return '';
                    },
                    label: (tooltipItem: TooltipItem<'bar'>) => {
                        const rawData = tooltipItem.raw as { date: Date };
                        return `${formatDate(rawData.date)}`;
                    }
                }
            }
        },
        scales: {
            x: {
                type: 'time' as const,
                time: {
                    unit: 'day' as const,
                    tooltipFormat: 'MMM dd',
                    displayFormats: {
                        day: 'MMM dd' // Format for x-axis labels
                    },
                },
                ticks: {
                    font: {
                        size: 12,
                        family: 'Arial, sans-serif',
                    },
                },
                grid: {
                    display: false,
                },
            },
            y: {
                min: 0,
                max: 8, // Set maximum value for y-axis
                ticks: {
                    font: {
                        size: 12,
                        family: 'Arial, sans-serif',
                    },
                    stepSize: 1,
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
            },
        },
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center p-4">
            <div className="bg-white p-6 rounded-lg w-full max-w-5xl relative shadow-lg">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div className="relative h-[600px] w-full">
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
}