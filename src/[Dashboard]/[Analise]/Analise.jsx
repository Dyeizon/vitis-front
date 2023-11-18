import CityInfo from "./Result/City/CityInfo";
import CitySelector from "./CitySelector";
import Fungi from "./Result/Fungi";

import { useState, useEffect, useContext } from "react";
import { supabase } from "../../App";

import { VitisContext } from "../../App";
import CyclesController from "./Cycles/CyclesController";

export default function Analise() {
    const vitisContext = useContext(VitisContext);

    const [fungis, setFungis] = useState([]);
    const [validFungis, setValidFungis] = useState([]);
    const [cycleName, setCycleName] = useState();
    const [fungiCycle, setFungiCycle] = useState([]);
    
    function fungisValidator(fungi) {
        return ( 
            (vitisContext.temp >= fungi.temp_min && fungi.temp_max >= vitisContext.temp) 
            && 
            (vitisContext.humidity >= fungi.umidade_min && fungi.umidade_max >= vitisContext.humidity)
            &&
            (fungiCycle.filter(e => e.id_fungo === fungi.id).length > 0)
        );
    }

    useEffect(() => {
        getCycleName();
        getFungiCycle();
    }, [vitisContext.cycle, vitisContext.city]);// eslint-disable-line

    useEffect(() => {
        setValidFungis(fungis.filter(fungisValidator));
    }, [fungiCycle]);// eslint-disable-line

    useEffect(() => {
      getFungis();
      
      return () => {
        // Desmontando componente...
        vitisContext.setTemp(null);
        vitisContext.setHumidity(null);
        vitisContext.setCity(null);
        vitisContext.setCycle(null);
      };
    }, []);// eslint-disable-line

    async function getFungis() {
        const { data } = await supabase.from('fungo').select('*, imagem_fungo!inner(img)').order('id', { ascending: true });
      setFungis(data);
    }

    async function getCycleName() {
        if(vitisContext.cycle) {
            const { data } = await supabase.from('ciclo').select('nome').eq('id', vitisContext.cycle);  
            if(data) setCycleName(data[0].nome);
        }
    }

    async function getFungiCycle() {
        if(vitisContext.cycle) {
            const { data } = await supabase.from('fungo_ciclo').select('id_fungo').eq('id_ciclo', vitisContext.cycle);
            if(data) setFungiCycle(data);
        }
    }

    return (
        <section className="analise">
                <CyclesController/>
                <CitySelector/>
                <hr/>
                <h1 className="text-xl text-red-700 p-10 text-center" style={{display: vitisContext.city && vitisContext.cycle ? 'none' : 'block'}}>Selecione acima o <b>ciclo atual</b> de sua viticultura e a <b>cidade</b> para gerar a análise.</h1>
                <div className="analise-result" style={{visibility: vitisContext.temp && vitisContext.city && vitisContext.cycle ? 'visible' : 'none', opacity: vitisContext.city && vitisContext.cycle ? '1' : '0', width: vitisContext.city && vitisContext.cycle ? '100%' : '0px'}}>
                    <CityInfo/>
                    <hr/>
                    
                    <h1 className="text-xl p-10 text-center">Potenciais fungos em <span className="font-bold">{vitisContext.city}</span> no periodo de <span className="font-bold">{cycleName}</span></h1>
                    {vitisContext.cycle === 1 ? <h1 className="text-md text-red-600 text-center">Alguns fungos podem sobreviver durante esse ciclo, mas ficam inativos.<br/><button className="underline text-blue-700 cursor-pointer" onClick={() => vitisContext.setCurrentPage('cycles')}>Verifique a página de ciclos</button></h1> : ''}

                    {vitisContext.cycle !== 1 ? 
                    <ul className="common-fungis" style={{display: vitisContext.city && vitisContext.cycle ? '' : 'none'}}>
                    {validFungis.length > 0 ? validFungis.map((fungo) => (
                            <li key={fungo.id}>
                                <Fungi dadosFungo={fungo}/>
                            </li>
                        )) : ""}
                    </ul>
                    : ''}

                    {vitisContext.cycle === 1 || validFungis.length > 0 ? "" : <h1 className="text-lg text-red-700 font-bold text-center">Não foram encontrados fungos em potencial para as condições informadas.</h1>}
                </div>
        </section>
    );

}