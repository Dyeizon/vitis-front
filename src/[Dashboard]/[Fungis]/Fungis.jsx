import { useState, useEffect, useRef } from "react";
import { supabase } from "../../App";
import FungiInfo from "./FungiInfo";
import React from "react";
import { useLocation } from "react-router-dom";

export default function Fungis() {
    const [fungos, setFungos] = useState([]);
    const scrollToElementRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
      getFungos();
      

      if (scrollToElementRef.current) {
        console.log(scrollToElementRef.current)
        scrollToElementRef.current.scrollIntoView();
      }
    }, []);

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

            <h1 id="teste">test</h1>
        </section>
    );

}