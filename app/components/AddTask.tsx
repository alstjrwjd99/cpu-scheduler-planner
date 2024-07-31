"use client";

import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { stackState } from './StackState';

export default function AddTask() {
    const [title, setTask] = useState('');
    const [priority, setPriority] = useState('중요도');
    const [duration, setDuration] = useState(0);
    const [memo, setMemo] = useState('');
    const [stack, setStack] = useRecoilState(stackState);

    const addBlock = () => {
        if (title === '' || priority === '중요도' || duration == 0) {
            alert('항목을 전부 입력해 주세요')
            return
        }
        if (stack.length > 9) {
            alert('할일은 최대 10개 이내로 가능합니다')
            return
        }
        const newItem = {
            title: title,
            priority: priority,
            duration: duration * 8,
            memo: memo,
        };

        setStack(prevStack => [...prevStack, newItem]);
        setTask('');
        setPriority('중요도');
        setDuration(0);
        setMemo('');
    };

    return (
        <section className="flex-1 m-7 p-7 space-y-6 rounded border text-black bg-slate-300">
            <div className="flex flex-wrap gap-4 mb-4 justify-start">
                <div className="flex flex-col w-full sm:w-1/2 md:w-1/2">
                    <label htmlFor="title" className="block text-lg font-medium mb-2">해야할 일</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="해야할 일을 적어주세요"
                        value={title}
                        onChange={(e) => setTask(e.target.value)}
                        className="p-2 border rounded border-gray-300 w-full"
                    />
                </div>

                <div className="flex flex-col w-full sm:w-1/4">
                    <label htmlFor="priority" className="block text-lg font-medium mb-2">중요도</label>
                    <select
                        id="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="p-2 border rounded border-gray-300 w-full"
                    >
                        <option value="중요도">중요도</option>
                        <option value="매우높음">매우높음</option>
                        <option value="높음">높음</option>
                        <option value="중간">중간</option>
                        <option value="낮음">낮음</option>
                        <option value="매우낮음">매우낮음</option>
                    </select>
                </div>
                
                <div className="flex flex-col w-full sm:w-1/6">
                    <label htmlFor="duration" className="block text-lg font-medium mb-2">예상 소요 기간(일)</label>
                    <input
                        type="number"
                        id="duration"
                        value={duration}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 0) {
                                setDuration(value);
                            }
                        }}
                        className="p-2 border rounded border-gray-300 w-full"
                    />
                </div>
            </div>

            <div className="space-y-2 mb-4">
                <label htmlFor="memo" className="block text-lg font-medium mb-2">메모</label>
                <textarea
                    id="memo"
                    placeholder="메모를 입력하세요"
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    className="p-2 border rounded border-gray-300 w-full h-40 resize-none"
                />
            </div>
            <div className="flex justify-end space-x-2">
                <button className="bg-gray-200 p-2 rounded border border-gray-300">자주 쓰는 일 등록</button>
                <button
                    onClick={addBlock}
                    className="bg-blue-500 text-white p-2 rounded border border-blue-500 hover:bg-blue-600">추가하기</button>
            </div>
        </section>
    );
}