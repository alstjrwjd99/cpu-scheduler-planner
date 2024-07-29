import { useRecoilState } from 'recoil';
import { stackState } from './StackState';

export default function TaskBlock() {
    const [stack, setStackState] = useRecoilState(stackState);

    const deleteTaskBlock = (index: number) => {
        setStackState((prevStack) => prevStack.filter((_, i) => i !== index));
    };

    const firstColumnTasks = stack.slice(0, 5);
    const secondColumnTasks = stack.slice(5);

    return (
        <div className="bg-gray-100 p-4 border border-gray-300 rounded-lg shadow-md flex-1">
            <h2 className="text-lg font-bold mb-2">Todo List</h2>
            {stack.length === 0 ? (
                <p className="text-gray-500">할일을 등록해주세요</p>
            ) : (
                <div className={`flex ${stack.length > 5 ? "flex-row" : "flex-col"}`}>
                    <div className="flex flex-col flex-1 space-y-2">
                        {firstColumnTasks.map((item, index) => (
                            <div key={index} className="flex flex-row space-x-4">
                                <div className="w-full bg-blue-100 p-3 rounded border border-blue-300 flex items-center space-x-4">
                                    <h3 className="font-bold flex-shrink-0">{item.task}</h3>
                                    <p className="truncate flex-grow">{item.memo}</p>
                                </div>
                                <button
                                    onClick={() => deleteTaskBlock(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    삭제
                                </button>
                            </div>
                        ))}
                    </div>
                    {stack.length > 5 && (
                        <div className="flex flex-col flex-1 space-y-2">
                            {secondColumnTasks.map((item, index) => (
                                <div key={index + 5} className="flex flex-row space-x-4">
                                    <div className="w-full bg-blue-100 p-3 rounded border border-blue-300 flex items-center space-x-4">
                                        <h3 className="font-bold flex-shrink-0">{item.task}</h3>
                                        <p className="truncate flex-grow">{item.memo}</p>
                                    </div>
                                    <button
                                        onClick={() => deleteTaskBlock(index + 5)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        삭제
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}