"use client"; // 클라이언트 컴포넌트로 지정

import { useState } from 'react';

export default function AddTask() {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('중요도');
    const [duration, setDuration] = useState('');
    const [memo, setMemo] = useState('');

    return (
        <section className="flex-1 m-7 p-7 space-y-4 text-black	bg-slate-300">
            {/* 해야할 일 입력 및 중요도 드롭다운 */}
            <div className="flex flex-row space-x-10">
                <input
                    type="text"
                    placeholder="해야할 일을 적어주세요"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="p-2 border rounded border-gray-300 w-full"
                />                    
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="p-2 border rounded border-gray-300 w-1/4"
                >
                    <option value="중요도">중요도</option>
                    <option value="높음">높음</option>
                    <option value="중간">중간</option>
                    <option value="낮음">낮음</option>
                </select>
                <input
                    type="number"
                    placeholder="예상 소요 기간(일)"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="p-2 border rounded border-gray-300 w-1/4"
                />
            </div>

            {/* 메모 입력 */}
            <div className="space-y-2">
                <label htmlFor="memo" className="block text-lg font-medium">메모</label>
                <textarea
                    id="memo"
                    placeholder="메모를 입력하세요"
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    className="p-2 border rounded border-gray-300 w-full h-24"
                />
            </div>

            {/* 버튼들 */}
            <div className="flex space-x-2">
                <button className="bg-gray-200 p-2 rounded border border-gray-300">자주 쓰는 일 등록</button>
                <button className="bg-blue-500 text-white p-2 rounded border border-blue-500 hover:bg-blue-600">추가하기</button>
            </div>
        </section>
    );
}