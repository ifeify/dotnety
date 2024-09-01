'use client';

import React, { useState } from 'react';
import { Home, Server, Activity, ChevronLeft, ChevronRight } from 'lucide-react';

export default function VerticalNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'Deployment', icon: Server },
    { name: 'Test Endpoints', icon: Activity },
  ];

  return (
    <nav 
      className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-4">
          <button onClick={toggleNavbar} className="text-gray-300 hover:text-white">
            {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>
        <ul className="flex-grow">
          {navItems.map((item, index) => (
            <li key={index} className="mb-2">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
              >
                <item.icon size={20} className="mr-4" />
                <span className={`${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};