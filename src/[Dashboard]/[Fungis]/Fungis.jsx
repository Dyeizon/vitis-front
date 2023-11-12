import "./Fungis.css";
import { useState, useEffect } from "react";
import { supabase } from "../../App";
import FungiCard from "./FungiCard";

export default function Fungis() {
    const [fungos, setFungos] = useState([]);

    useEffect(() => {
      getFungos();
    }, []);

    async function getFungos() {
        const { data } = await supabase
        .from('fungo')
        .select('*, imagem_fungo!inner(img)');
      setFungos(data);
    }

    return (
        <section className="fungis-page">
            <ul>
                {fungos.map((fungo) => (
                    <li id={`fungo`+fungo.id} key={fungo.id}>
                        <FungiCard info={fungo}/>
                    </li>
                ))}
            </ul>
        </section>
    );

}