import React, { useContext } from "react";
import { useState, useEffect } from "react";
import FungiPopUp from "./FungiPopUp";
import { VitisContext } from "../../../App";

export default function Fungi({dadosFungo}) {
    const [popUp, setPopUp] = useState(false);
    const [childState, setChildState] = useState(false);
    const vitisContext = useContext(VitisContext);

    useEffect(() => {
      setPopUp(childState)
    }, [childState]);

    return (
      <>
        {popUp ? <FungiPopUp passChildState={setChildState} dados={dadosFungo}/> : ""}

        
        <div onClick={() => {setPopUp(!popUp); vitisContext.setPopUpOpen(!popUp)}} className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col">
          <div className="analise-fungi-img" style={{backgroundImage: `url(` + dadosFungo.imagem_fungo[0].img  + `)`}}></div>
          <div className="analise-fungi-info flex flex-col flex-grow px-6 py-4">
            <div className="analise-fungi-name mb-2">
              <span className="font-bold text-xl mb-2">{dadosFungo.nome}</span>{" "}
              <span className="text-xs">({dadosFungo.nome_cientifico})</span>
            </div>
            <p className="text-gray-700 text-base mb-5">{dadosFungo.resumo}</p>
    
            <div className="flex-grow" />
    
            <button
              onClick={() => setPopUp(!popUp)} className="analise-fungi-info-button inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-pink-300"
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
  