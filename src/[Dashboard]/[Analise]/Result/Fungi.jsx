import React from "react";

export default function Fungi({ img, name, cientificName, desc }) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col">
        <img src={img} alt="Fungo" className="w-full" />
        <div className="analise-fungi-info flex flex-col flex-grow px-6 py-4">
          <div className="analise-fungi-name mb-2">
            <span className="font-bold text-xl mb-2">{name}</span>{" "}
            <span className="text-xs">({cientificName})</span>
          </div>
          <p className="text-gray-700 text-base mb-5">{desc}</p>
  
          <div className="flex-grow" />
  
          <a
            href="/"
            className="analise-fungi-info-button inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Saiba mais
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }
  