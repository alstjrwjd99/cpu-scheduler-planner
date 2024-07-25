"use client"; // 클라이언트 컴포넌트로 지정

import { useState } from 'react';

interface SidebarProps {
  initialOpen?: boolean;
}

export default function LeftSidebar({ initialOpen = true }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div className={`transition-width duration-300 ${isOpen ? 'w-64' : 'w-16'} bg-gray-800 h-screen flex-shrink-0`}>
      <button 
        className="p-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '<' : '>'}
      </button>
      {isOpen && (
        <div className="text-white p-4">
          <p>Left Sidebar Content</p>
        </div>
      )}
    </div>
  );
}