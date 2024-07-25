"use client"; // 클라이언트 컴포넌트로 지정

import AddTask from './component/AddTask';
import Header from './component/Header';
import LeftSidebar from './component/LeftSidebar';
import RightSidebar from './component/RightSidebar';
import StackAndAlgorithm from './component/StackAlgorithm';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <LeftSidebar initialOpen={true} />
      <div className="flex-1 flex flex-col">
        <Header />
        <AddTask />
        <StackAndAlgorithm />
      </div>
      <RightSidebar initialOpen={true} />
    </main>
  );
}