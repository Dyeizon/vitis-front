import React from "react";

export default function Fungi({img, name, cientificName, desc, treatment}) {
        
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={img} alt="Sunset in the mountains"/>
            <div className="px-6 py-4 h-full">
                <div className="analise-fungi-name"><span className="font-bold text-xl mb-2">{name}</span> <span className="text-xs">({cientificName})</span></div>
                <p className="text-gray-700 text-base">{desc}</p>

                <a href="/" className="mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Saiba mais
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            
            
        </div>
    );
}