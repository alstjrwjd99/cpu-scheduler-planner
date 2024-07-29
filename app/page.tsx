"use client";

import AddTask from './components/AddTask';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import StackAndAlgorithm from './components/StackAlgorithm';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <main className="flex min-h-screen">
        <LeftSidebar initialOpen={true} />
        <div className="flex-1 flex flex-col">
          <Header />
          <AddTask />
          <StackAndAlgorithm />
        </div>
        <RightSidebar initialOpen={true} />
      </main>
    </RecoilRoot>
  );
}