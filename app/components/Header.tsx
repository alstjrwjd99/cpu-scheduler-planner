"use client"; // 클라이언트 컴포넌트로 지정

import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { chartSettingsState } from './StackState'; // 상태 파일 경로에 맞게 수정

export default function Header() {
    // Recoil 상태 관리
    const [chartSettings, setChartSettings] = useRecoilState(chartSettingsState);
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
        setChartSettings(prev => ({
            ...prev,
            projectName: e.target.value
        }));
    };

    return (
        <header className="bg-blue-500 p-7 text-black text-center">
            <div className="w-full max-w-4xl flex justify-start space-x-4">
                <div className="flex-1 flex items-center space-x-2">
                    {isEditing ? (
                        <input
                            id="project-name"
                            type="text"
                            value={chartSettings.projectName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoFocus
                            className="w-full p-2 rounded border border-gray-300"
                        />
                    ) : (
                        <span className="block text-3xl font-large cursor-pointer"
                            onClick={handleDoubleClick}
                        >
                            {chartSettings.projectName || "프로젝트 이름 입력"}
                        </span>)}
                </div>

                {/* 시작 날짜 */}
                <div className="flex-1 flex items-center space-x-2">
                    <label htmlFor="start-date" className="block text-lg font-medium">시작 날짜</label>
                    <input
                        id="start-date"
                        type="date"
                        value={chartSettings.startDate}
                        onChange={(e) => setChartSettings(prev => ({
                            ...prev,
                            startDate: e.target.value
                        }))}
                        className="p-1 rounded border border-gray-300"
                    />
                </div>

                {/* 종료 날짜 */}
                <div className="flex-1 flex items-center space-x-2">
                    <label htmlFor="end-date" className="block text-lg font-medium">종료 날짜</label>
                    <input
                        id="end-date"
                        type="date"
                        value={chartSettings.endDate}
                        onChange={(e) => setChartSettings(prev => ({
                            ...prev,
                            endDate: e.target.value
                        }))}
                        className="p-1 rounded border border-gray-300"
                    />
                </div>
            </div>
        </header>
    );
}