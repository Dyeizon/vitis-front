import "./Dashboard.css";
import logo from "./../img/logo.png";
import { useContext } from "react";

import Analise from "./[Analise]/Analise";
import Fungis from "./[Fungis]/Fungis";
import Cycles from "./[Cycles]/Cycles";
import AboutUs from "./[AboutUs]/AboutUs";

import MobileMenu from "./MobileMenu";
import { VitisContext } from "../App";

export default function Dashboard() {
    const vitisContext = useContext(VitisContext);

    return (
        <section className="dashboard">   
            <MobileMenu/>
            <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="info">
                    <a href="/" className="flex justify-center items-center p-2 text-white">
                        <span className="mx-3">Vitis</span>
                        <img className="mx-3" src={logo} alt="Logo" />
                        <span className="mx-3">Vitis</span>
                    </a>
                </div>

                <div className="menu-content h-full py-4 overflow-y-auto">
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
            </aside>

            <div className="dashboard-content p-4 sm:ml-64">
                {vitisContext.currentPage === "analise" ? <Analise/> : ""}
                {vitisContext.currentPage === "fungis" ? <Fungis/> : ""}
                {vitisContext.currentPage === "cycles" ? <Cycles/> : ""}
                {vitisContext.currentPage === "aboutUs" ? <AboutUs/> : ""}
            </div>
        </section>

    );

}