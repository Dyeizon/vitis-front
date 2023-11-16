import React, { useContext, useState } from "react";
import logo from './../img/logo.png'
import { VitisContext } from "../App";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);
    const vitisContext = useContext(VitisContext);

    return (
        <>
            <div className="mobile-menu-bar py-2">
                <a href="/" className="h-full"><img src={logo} alt="Logo" className="h-full"/></a>
                <div onClick={() => setOpen(!open)} className="space-y-2">
                    <div className="w-9 h-1 bg-white"></div>
                    <div className="w-9 h-1 bg-white"></div>
                    <div className="w-9 h-1 bg-white"></div>
                </div>
            </div>

            <div className={`mobile-menu-content`} style={{height: open ? '' : '0px'}}>
                <div style={{display: open ? '' : 'none'}} className="menu-content h-full py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li onClick={() => {vitisContext.setCurrentPage("analise")}} className={`flex justify-center items-center p-2 text-white ${vitisContext.currentPage==="analise" ? "selectedOption" : ""}`}>
                            <span>Análise</span>
                        </li>
                        <li onClick={() => {vitisContext.setCurrentPage("fungis")}} className={`flex justify-center items-center p-2 text-white ${vitisContext.currentPage==="fungis" ? "selectedOption" : ""}`}>
                            <span>Fungos</span>
                        </li>
                        <li onClick={() => {vitisContext.setCurrentPage("cycles")}} className={`flex justify-center items-center p-2 text-white ${vitisContext.currentPage==="cycles" ? "selectedOption" : ""}`}>
                            <span>Ciclos</span>
                        </li>
                        <li onClick={() => {vitisContext.setCurrentPage("aboutUs")}} className={`flex justify-center items-center p-2 text-white ${vitisContext.currentPage==="aboutUs" ? "selectedOption" : ""}`}>
                            <span>Sobre nós</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div onClick={() => setOpen(false)} style={{display: open ? 'block' : 'none'}} className="mobile-outside"></div>
        </>
    );
}