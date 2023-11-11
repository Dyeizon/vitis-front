import "./Analise.css";
import CityInfo from "./Result/City/CityInfo";
import CitySelector from "./CitySelector";
import Fungi from "./Result/Fungi";

import { useState, useEffect, useContext } from "react";
import { supabase } from "../../App";

import { VitisContext } from "../../App";
import CyclesController from "./Cycles/CyclesController";

import placeholderImg from "./../../img/background.jpg";

export default function Analise() {
    const vitisContext = useContext(VitisContext);
    
    const [fungos, setFungos] = useState([]);

    useEffect(() => {
      getFungos();
    }, []);

    async function getFungos() {
      const { data } = await supabase.from('fungo').select();
      setFungos(data);
    }

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
                    <ul className="common-fungis" style={{display: vitisContext.city && vitisContext.cycle ? '' : 'none'}}>
                        {fungos.map((fungo) => (
                            <li>
                                <Fungi key={fungo.id} img={placeholderImg} name={fungo.nome} cientificName={fungo.nome_cientifico} desc={fungo.resumo}/>
                            </li>
                        ))}
                    </ul>
                </div>
                
        </section>
    );

}