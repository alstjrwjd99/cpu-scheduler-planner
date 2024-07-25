"use client"; // 클라이언트 컴포넌트로 지정

import { useState } from 'react';

export default function Header() {
    // 상태 관리
    const [projectName, setProjectName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    // 더블 클릭 시 입력 모드로 전환
    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    // 입력 완료 후 상태 저장 및 편집 모드 종료
    const handleBlur = () => {
        setIsEditing(false);
    };

    // 입력 값 변경 시 상태 업데이트
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProjectName(e.target.value);
    };

    return (
        <header className="bg-blue-500 p-7 text-black text-center">
            <div className="w-full max-w-4xl flex justify-start space-x-4">
                <div className="flex-1 flex items-center space-x-2">
                    {isEditing ? (
                        <input
                            id="project-name"
                            type="text"
                            value={projectName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoFocus
                            className="w-full p-2 rounded border border-gray-300"
                        />
                    ) : (
                        <span className="block text-3xl font-large cursor-pointer"
                            onClick={handleDoubleClick}
                        >
                            {projectName || "프로젝트 이름 입력"}
                        </span>)}
                </div>

                {/* 시작 날짜 */}
                <div className="flex-1 flex items-center space-x-2">
                    <label htmlFor="start-date" className="block text-lg font-medium">시작 날짜</label>
                    <input
                        id="start-date"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="p-1 rounded border border-gray-300"
                    />
                </div>

                {/* 종료 날짜 */}
                <div className="flex-1 flex items-center space-x-2">
                    <label htmlFor="end-date" className="block text-lg font-medium">종료 날짜</label>
                    <input
                        id="end-date"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="p-1 rounded border border-gray-300"
                    />
                </div>
            </div>
        </header>
    );
}