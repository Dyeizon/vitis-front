import { useState } from "react";
import CardCiclo from "./CardCiclo";
import brotacaoImg from "./../../img/brotacao.jpg";
import dormenciaImg from "./../../img/dormencia.jpg";

export default function ControladorCiclos({children}) {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
    }

    return (
        <div className="analise-ciclos-grid">
            <CardCiclo onClickEvent={handleButtonClick} selectedButton={selectedButton} idCiclo={1} img={dormenciaImg} text="Dormência"/>
            <CardCiclo onClickEvent={handleButtonClick} selectedButton={selectedButton} idCiclo={2} img={brotacaoImg} text="Brotação"/>
            <CardCiclo onClickEvent={handleButtonClick} selectedButton={selectedButton} idCiclo={3} text="Floração"/>
            <CardCiclo onClickEvent={handleButtonClick} selectedButton={selectedButton} idCiclo={4} text={"Crescimento\ndos cachos"}/>
            <CardCiclo onClickEvent={handleButtonClick} selectedButton={selectedButton} idCiclo={5} text="Maturação"/>
        </div>
    );
}