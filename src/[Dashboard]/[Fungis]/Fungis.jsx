import { useState, useEffect } from "react";
import { supabase } from "../../App";
import FungiInfo from "./FungiInfo";
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
        <section>
            <ul>
                {fungos.map((fungo) => (
                    <React.Fragment key={fungo.id}>
                        <li className="py-8 mx-10" id={`fungo`+fungo.id} >
                            <FungiInfo dados={fungo}/> 
                        </li>
                        <hr/>
                    </React.Fragment>
                ))}
            </ul>
        </section>
    );

}