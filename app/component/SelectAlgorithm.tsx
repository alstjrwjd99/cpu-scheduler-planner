"use client";
import { useRecoilState } from 'recoil';
import { stackState } from './StackState';
import TaskBlock from './TaskBlock';

export default function SelectAlgorithm() {
    return (
        <div className="bg-gray-100 p-4 border border-gray-300 rounded-lg shadow-md flex-1">
            <h2 className="text-lg font-bold mb-2">알고리즘 선택</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>먼저 들어온 애 부터 처리하기 (FCFS)</li>
                <li>짧은 일부터 처리하기 (SJF)</li>
                <li>우선 순위 먼저 처리하기 (Priority Scheduling)</li>
                <li>골고루 처리하기 (Round Robin)</li>
            </ul>
            <button className="bg-blue-500 text-white p-2 rounded-lg border border-blue-600 hover:bg-blue-600">
                일정 짜기
            </button>
        </div>

    )
}