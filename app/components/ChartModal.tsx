"use client";

import { useRecoilValue } from 'recoil';
import { stackState, selectedAlgorithmState, chartSettingsState } from './StackState';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FCFS } from '../algorithms/FCFS';
import { Priority } from '../algorithms/Priority';
import { RoundRobin } from '../algorithms/RoundRobin';
import { SJF } from '../algorithms/SJF';
import { SRTF } from '../algorithms/SRTF';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
    const stack = useRecoilValue(stackState);
    const selectedAlgorithm = useRecoilValue(selectedAlgorithmState);
    const chartSettings = useRecoilValue(chartSettingsState);

    // 선택된 알고리즘에 따라 작업 배열을 처리합니다.
    let processedTasks = stack;
    switch (selectedAlgorithm) {
        case 'FCFS':
            processedTasks = FCFS(stack);
            break;
        case 'Priority':
            processedTasks = Priority(stack);
            break;
        case 'RoundRobin':
            processedTasks = RoundRobin(stack);
            break;
        case 'SJF':
            processedTasks = SJF(stack);
            break;
        case 'SRTF':
            processedTasks = SRTF(stack);
            break;
        default:
            processedTasks = stack;
    }

    const data = {
        labels: processedTasks.map(task => task.task),
        datasets: [
            {
                label: 'Duration (days)',
                data: processedTasks.map(task => task.duration),
                backgroundColor: 'rgba(54, 162, 235, 0.5)', // 색상 변경
                borderColor: 'rgba(54, 162, 235, 1)', // 색상 변경
                borderWidth: 2, // 테두리 두께 증가
                barThickness: 30, // 바 두께
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // 차트의 크기를 컨테이너에 맞게 조정
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    font: {
                        size: 14, // 레전드 폰트 크기
                        family: 'Arial, sans-serif', // 레전드 폰트
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw} days`;
                    },
                },
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // 툴팁 배경색
                titleColor: 'white', // 툴팁 제목 색상
                bodyColor: 'white', // 툴팁 내용 색상
                borderColor: 'rgba(255, 255, 255, 0.5)', // 툴팁 테두리 색상
                borderWidth: 1, // 툴팁 테두리 두께
                padding: 10, // 툴팁 내부 여백
                cornerRadius: 5, // 툴팁 모서리 둥글기
            },
            title: {
                display: true,
                text: chartSettings.projectName || 'Task Schedule Chart',
                font: {
                    size: 18, // 제목 폰트 크기
                    family: 'Arial, sans-serif', // 제목 폰트
                },
                color: '#333', // 제목 색상
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 12, // x축 레이블 폰트 크기
                        family: 'Arial, sans-serif', // x축 레이블 폰트
                    },
                },
                grid: {
                    display: false, // x축 그리드선 숨기기
                },
            },
            y: {
                ticks: {
                    font: {
                        size: 12, // y축 레이블 폰트 크기
                        family: 'Arial, sans-serif', // y축 레이블 폰트
                    },
                    stepSize: 1, // y축 스텝 크기
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)', // y축 그리드선 색상
                },
            },
        },
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-4/5 max-w-3xl relative shadow-lg">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div className="relative h-96">
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
}