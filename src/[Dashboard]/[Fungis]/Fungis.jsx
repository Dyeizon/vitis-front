import { useState, useEffect, useRef, useContext } from "react";
import { supabase } from "../../App";
import FungiInfo from "./FungiInfo";
import React from "react";
import { VitisContext } from "../../App";

export default function Fungis() {
    const [fungos, setFungos] = useState([]);
    const scrollToElementRef = useRef(null);
    const vitisContext = useContext(VitisContext);

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    useEffect(() => {
        getFungos();
        goToFungi();
    }, []); //eslint-disable-line

    async function goToFungi() {
        await delay(500);
        const element = document.getElementById(vitisContext.fungiRefID);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }

    async function getFungos() {
        const { data } = await supabase.from('fungo').select('*, imagem_fungo!inner(img)').order('id', { ascending: true });
        setFungos(data);
    }

    return (
        <section>
            <ul>
                {fungos.map((fungo) => (
                    <div id={`fungo`+fungo.id} ref={scrollToElementRef} key={fungo.id}>
                        <li  className="py-8 mx-10">
                            <FungiInfo dados={fungo}/>
                        </li>
                        <hr/>
                    </div>
                ))}
            </ul>
        </section>
    );

}