import { useRecoilState } from 'recoil';
import { stackState, Task } from './StackState';

export default function TaskBlock() {
    const [stack, setStackState] = useRecoilState(stackState);

    const deleteTaskBlock = (index: number) => {
        setStackState((prevStack) => prevStack.filter((_, i) => i !== index));
    };

    return (
        <div className="bg-gray-100 p-4 border border-gray-300 rounded-lg shadow-md flex-1">
            <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-2">Todo List</h2>
                {stack.length === 0 ? (
                    <p className="text-gray-500">할일을 등록해주세요</p>
                ) : (
                    stack.map((item, index) => (
                        <div key={index} className="flex flex-row space-x-4 mb-2">
                            <div className="w-full max-w-md bg-blue-100 p-3 rounded border border-blue-300 flex flex-row items-center space-x-4 text-left">
                                <h3 className="font-bold flex-shrink-0">{item.task}</h3>
                                <p className="flex-shrink-0">우선순위: {item.priority}</p>
                                <p className="flex-shrink-0">예상 기간: {item.duration}일</p>
                                <p className="truncate flex-grow">{item.memo}</p>
                            </div>
                            <button
                                onClick={() => deleteTaskBlock(index)}
                                className="text-red-500 hover:text-red-700 flex-shrink-0"
                            >
                                삭제
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}