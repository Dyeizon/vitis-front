import { useState, useEffect } from "react";
import { supabase } from "../../App";
import FungiCard from "./FungiCard";
import React from "react";

export default function Fungis() {
    const [fungos, setFungos] = useState([]);

    useEffect(() => {
      getFungos();
    }, []);

    async function getFungos() {
        const { data } = await supabase.from('fungo').select('*, imagem_fungo!inner(img)').order('id', { ascending: true });
      setFungos(data);
    }

    return (
        <section className="fungis-page">
            <ul>
                {fungos.map((fungo) => (
                    <React.Fragment key={fungo.id}>
                        <li className="py-8" id={`fungo`+fungo.id} >
                            <FungiCard info={fungo}/> 
                        </li>
                        <hr/>
                    </React.Fragment>
                ))}
            </ul>
        </section>
    );

}