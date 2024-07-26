"use client";

import AddTask from './components/AddTask';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import StackAndAlgorithm from './components/StackAlgorithm';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <main className="flex min-h-screen">
      <LeftSidebar initialOpen={true} />
      <div className="flex-1 flex flex-col">
        <Header />
        <RecoilRoot>
          <AddTask />
          <StackAndAlgorithm />
        </RecoilRoot>
      </div>
      <RightSidebar initialOpen={true} />
    </main>
  );
}