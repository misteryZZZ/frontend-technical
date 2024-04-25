"use client"

import { useState } from 'react';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white p-4 md:flex md:justify-between md:items-center border-b-2 border-gray-200">
        <div className="flex justify-between items-center px-4 py-3 md:p-0">
          <h1 className="text-gray-800 text-xl max-[800px]:text-md font-bold">Hendriawan Yudhistira</h1>
          <button className="text-gray-800 focus:outline-none md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <nav className={`md:flex flex-col md:flex-row md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="block px-3 py-2 text-gray-800 md:text-gray-800 hover:text-blue-500 md:hover:text-blue-500">
            Menu 1
          </a>
          <a href="#" className="block px-3 py-2 text-gray-800 md:text-gray-800 hover:text-blue-500 md:hover:text-blue-500">
            Menu 2
          </a>
          <a href="#" className="block px-3 py-2 text-gray-800 md:text-gray-800 hover:text-blue-500 md:hover:text-blue-500">
            Menu 3
          </a>
        </nav>
      </header>
    );
}