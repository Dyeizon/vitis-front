import "./../Dashboard.css";
import React from "react";
import { useState, useEffect } from "react";
import CycleInfo from "./CycleInfo";
import { supabase } from "../../App";

export default function Cycles() {
    const [ciclos, setCiclos] = useState([]);

    useEffect(() => {
      getCiclos();
    }, []);

    async function getCiclos() {
        //const { data } = await supabase.from('ciclo').select('*, imagem_ciclo!inner(img), fungo_ciclo!inner(id_fungo)').order('id', { ascending: true });
        const { data } = await supabase.from('ciclo').select('*, imagem_ciclo(img), fungo_ciclo(id_fungo)').order('id', { ascending: true });
        setCiclos(data);


        console.log(data);
    }

    return (
        <section>
            <ul>
                {ciclos.map((ciclo) => (
                    <React.Fragment key={ciclo.id}>
                        <li className="py-8 mx-10" id={`ciclo`+ciclo.id} >
                            <CycleInfo dados={ciclo}/> 
                        </li>
                        <hr/>
                    </React.Fragment>
                ))}
            </ul>
        </section>
    );

}