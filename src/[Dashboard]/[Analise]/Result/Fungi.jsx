import React from "react";
import { useContext } from "react";
import FungiPopUp from "./FungiPopUp";
import { VitisContext } from "../../../App";

export default function Fungi({ img, name, cientificName, desc }) {

    const vitisContext = useContext(VitisContext);

    function handleButton() {
      vitisContext.modalOpen ? vitisContext.setModalOpen(false) : vitisContext.setModalOpen(true);
    }

    return (
      <>
        <FungiPopUp/>

        <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col">
          <div className="analise-fungi-img">
              <img src={img} alt="Fungo" className="w-full" />
          </div>
          <div className="analise-fungi-info flex flex-col flex-grow px-6 py-4">
            <div className="analise-fungi-name mb-2">
              <span className="font-bold text-xl mb-2">{name}</span>{" "}
              <span className="text-xs">({cientificName})</span>
            </div>
            <p className="text-gray-700 text-base mb-5">{desc}</p>
    
            <div className="flex-grow" />
    
            <button
              onClick={() => handleButton()} className="analise-fungi-info-button inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-pink-300"
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
            </button>
          </div>
        </div>
      </>
    );
  }
  