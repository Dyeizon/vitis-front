import "./Analise.css";
import CityInfo from "./Result/City/CityInfo";
import CitySelector from "./CitySelector";
import Fungi from "./Result/Fungi";

import { useContext } from "react";
import { VitisContext } from "../../App";
import CyclesController from "./Cycles/CyclesController";

import placeholderImg from "./../../img/background.jpg";

export default function Analise() {
    const vitisContext = useContext(VitisContext);
    
    return (
        <section className="analise">
                <CyclesController/>
                <CitySelector/>
                <hr/>
                <h1 className="text-xl text-red-700 p-10 text-center" style={{display: vitisContext.city && vitisContext.cycle ? 'none' : 'block'}}>Selecione acima o <b>ciclo atual</b> de sua viticultura e a <b>cidade</b> para gerar a análise.</h1>
                <div className="analise-result" style={{visibility: vitisContext.city && vitisContext.cycle ? 'visible' : 'none', opacity: vitisContext.city && vitisContext.cycle ? '1' : '0', width: vitisContext.city && vitisContext.cycle ? '100%' : '0px'}}>
                    <CityInfo/>
                    <hr/>
                    <h1 className="text-xl p-10">Fungos Comuns</h1>
                    <div className="common-fungis" style={{display: vitisContext.city && vitisContext.cycle ? '' : 'none'}}>
                        <Fungi img={placeholderImg} name="Míldio" cientificName="Plasmopara Viticola" desc="O míldio, doença de maior importância para a viticultura no Brasil, é também conhecido como mufa, mofo ou peronóspora e é causado pelo pseudofungo Plasmopara viticola" treatment="TRATAMENTO, TRATAMENTO"></Fungi>
                        <Fungi img={placeholderImg} name="NOME" cientificName="NOME CIENTIFICO" desc="DESCRICAO DESESCRICAOCRICAODES" treatment="TRATAMENTO, TRATAMENTO"></Fungi>
                        <Fungi img={placeholderImg} name="NOME" cientificName="NOME CIENTIFICO" desc="DESCRICAO DESESCRICAOCRICAODES" treatment="TRATAMENTO, TRATAMENTO"></Fungi>
                        <Fungi img={placeholderImg} name="NOME" cientificName="NOME CIENTIFICO" desc="DESCRICAO DESESCRICAOCRICAODES" treatment="TRATAMENTO, TRATAMENTO"></Fungi>
                        <Fungi img={placeholderImg} name="NOME" cientificName="NOME CIENTIFICO" desc="DESCRICAO DESESCRICAOCRICAODES" treatment="TRATAMENTO, TRATAMENTO"></Fungi>
                    </div>
                </div>
                
        </section>
    );

}