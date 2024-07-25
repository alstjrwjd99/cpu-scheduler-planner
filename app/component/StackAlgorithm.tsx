"use client"; // 클라이언트 컴포넌트로 지정

export default function StackAndAlgorithm() {
    return (
        <section className="p-7 m-7 space-y-4 text-black flex space-x-20">
            {/* 스택 모양과 아이템 표시 */}
            <div className="bg-gray-100 p-4 border border-gray-300 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-2">스택 모양 그림</h2>
                <p className="text-gray-700">여기에 아이템들이 추가 및 삭제가 될 예정</p>
                {/* 스택 시뮬레이션을 보여줄 수 있는 영역 */}
                <div className="mt-4 p-2 bg-white border border-gray-200 rounded-lg">
                    {/* 여기에 실제 스택의 UI를 넣을 수 있습니다 */}
                    <p className="text-gray-500 text-center">스택 내용이 여기에 표시됩니다.</p>
                </div>
            </div>

            {/* 알고리즘 선택 */}
            <div className="bg-gray-100 p-4 border border-gray-300 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-2">알고리즘 선택</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>먼저 들어온 애 부터 처리하기 (FCFS)</li>
                    <li>짧은 일부터 처리하기 (SJF)</li>
                    <li>우선 순위 먼저 처리하기 (Priority Scheduling)</li>
                    <li>골고루 처리하기 (Round Robin)</li>
                </ul>
            </div>

            {/* 일정 짜기 버튼 */}
            <div className="flex justify-center">
                <button className="bg-blue-500 text-white p-2 rounded-lg border border-blue-600 hover:bg-blue-600">
                    일정 짜기
                </button>
            </div>
        </section>
    );
}