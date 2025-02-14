"use client";

import { useRecoilState } from 'recoil';
import { selectedAlgorithmState } from './StackState';
import { useState } from 'react';
import ChartModal from './ChartModal';  // ChartModal 컴포넌트를 import 합니다.

export default function SelectAlgorithm() {
    const [selectedAlgorithm, setSelectedAlgorithm] = useRecoilState(selectedAlgorithmState);
    const [isModalOpen, setModalOpen] = useState(false);

    const algorithms = [
        { name: '먼저 들어온 애 부터 처리하기 (FCFS)', key: 'FCFS' },
        { name: '짧은 일부터 처리하기 (SJF)', key: 'SJF' },
        { name: '우선 순위 먼저 처리하기 (Priority)', key: 'Priority' },
        { name: '골고루 처리하기 (Round Robin)', key: 'RoundRobin' },
    ];

    const handleSelect = (key: string) => {
        setSelectedAlgorithm(key);
    };

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="bg-gray-100 p-4 border border-gray-300 rounded-lg shadow-md flex-1">
            <h2 className="text-lg font-bold mb-2">알고리즘 선택</h2>
            <ul className="space-y-1">
                {algorithms.map((algorithm) => (
                    <li
                        key={algorithm.key}
                        className={`p-2 border rounded-lg cursor-pointer ${selectedAlgorithm === algorithm.key ? 'bg-blue-200' : 'bg-white'
                            }`}
                        onClick={() => handleSelect(algorithm.key)}
                    >
                        {algorithm.name}
                    </li>
                ))}
            </ul>
            <div className="flex justify-end mt-4">
                <button
                    className="bg-blue-500 text-white p-2 rounded-lg border border-blue-600 hover:bg-blue-600"
                    onClick={openModal}
                >
                    일정 짜기
                </button>
            </div>
            <ChartModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}