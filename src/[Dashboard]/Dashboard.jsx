import "./Dashboard.css";
import logo from "./../img/logo.png";
import { useState } from "react";

import Analise from "./Analise";
import Fungis from "./Fungis";
import Cycles from "./Cycles";
import AboutUs from "./AboutUs";

export default function Dashboard() {
    const [selected, setSelected] = useState("analise");
    return (
        <section className="dashboard">          
            <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="info">
                    <a href="/" className="flex justify-center items-center p-2 text-white">
                        <span className="mx-3">Vitis</span>
                        <img className="mx-3" src={logo} alt="Logo" />
                        <span className="mx-3">Vitis</span>
                    </a>
                </div>

                <div className="h-full py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li onClick={() => {setSelected("analise")}} className={`flex justify-center items-center p-2 text-white ${selected==="analise" ? "disableOption" : ""}`}>
                            <span>Análise</span>
                        </li>
                        <li onClick={() => {setSelected("fungis")}} className={`flex justify-center items-center p-2 text-white ${selected==="fungis" ? "disableOption" : ""}`}>
                            <span>Fungos</span>
                        </li>
                        <li onClick={() => {setSelected("cycles")}} className={`flex justify-center items-center p-2 text-white ${selected==="cycles" ? "disableOption" : ""}`}>
                            <span>Ciclos</span>
                        </li>
                        <li onClick={() => {setSelected("aboutUs")}} className={`flex justify-center items-center p-2 text-white ${selected==="aboutUs" ? "disableOption" : ""}`}>
                            <span>Sobre nós</span>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                {selected === "analise" ? <Analise/> : ""}
                {selected === "fungis" ? <Fungis/> : ""}
                {selected === "cycles" ? <Cycles/> : ""}
                {selected === "aboutUs" ? <AboutUs/> : ""}
            
            </div>
        </section>

    );

}