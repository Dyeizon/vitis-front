import "./../Dashboard.css";
import { useState, useEffect } from "react";
import { supabase } from "../../App";
import Fungi from "../[Analise]/Result/Fungi";
import placeholderImg from "./../../img/background.jpg";

export default function Fungis() {
    const [fungos, setFungos] = useState([]);

    useEffect(() => {
      getFungos();
      console.log(fungos);
    }, []);

    async function getFungos() {
        const { data } = await supabase
        .from('fungo')
        .select('*, imagem_fungo!inner(img)');

      setFungos(data);

    }

    return (
        <section className="fungis-page">
            <ul className="common-fungis">
                {fungos.map((fungo) => (
                    <li key={fungo.id}>
                        <Fungi img={fungo.imagem_fungo[0].img} name={fungo.nome} cientificName={fungo.nome_cientifico} desc={fungo.resumo}/>
                    </li>
                ))}
            </ul>
        </section>
    );

}