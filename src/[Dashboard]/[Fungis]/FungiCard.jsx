import React from "react";

export default function FungiCard({info}) {
    return (
        <>
        <div className="fungis-images">
            <div style={{backgroundImage: `url(` + info.imagem_fungo[0].img + `)`}}></div>
            <div style={{backgroundImage: `url(` + info.imagem_fungo[1].img + `)`}}></div>
            <div style={{backgroundImage: `url(` + info.imagem_fungo[2].img + `)`}}></div>
            <div style={{backgroundImage: `url(` + info.imagem_fungo[3].img + `)`}}></div>
        </div>
            {info.id}
            {info.nome}
            {info.nome_cientifico}
            {info.resumo}
            {info.temp_min}
            {info.temp_max}
            {info.umidade_min}
            {info.umidade_max}
            
        </>
    );

}