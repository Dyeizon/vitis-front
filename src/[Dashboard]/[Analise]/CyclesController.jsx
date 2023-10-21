import { useState } from "react";
import CycleCard from "./CycleCard";

import brotacaoImg from "./../../img/brotacao.jpg";
import dormenciaImg from "./../../img/dormencia.jpg";
import floracaoImg from "./../../img/floracao.jpg";
import crescimentoImg from "./../../img/crescimento.jpg";
import maturacaoImg from "./../../img/maturacao.jpg";

export default function ControladorCiclos({children}) {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
    }

    return (
        <div className="analise-ciclos-grid">
            <CycleCard onClickEvent={handleButtonClick} selectedButton={selectedButton} cycleID={1} img={dormenciaImg} text="Dormência"/>
            <CycleCard onClickEvent={handleButtonClick} selectedButton={selectedButton} cycleID={2} img={brotacaoImg} text="Brotação"/>
            <CycleCard onClickEvent={handleButtonClick} selectedButton={selectedButton} cycleID={3} img={floracaoImg} text="Floração"/>
            <CycleCard onClickEvent={handleButtonClick} selectedButton={selectedButton} cycleID={4} img={crescimentoImg} text={"Crescimento\ndos cachos"}/>
            <CycleCard onClickEvent={handleButtonClick} selectedButton={selectedButton} cycleID={5} img={maturacaoImg} text="Maturação"/>

            
        </div>
    );
}