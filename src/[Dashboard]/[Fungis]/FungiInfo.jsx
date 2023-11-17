import React from "react";
import { Carousel } from "@material-tailwind/react";

export default function FungiInfo({dados}) {
    return (
        <>
            <Carousel className="popup-carousel flex rounded-xl mr-7 float-left">
                {dados.imagem_fungo.map((img_fungo) => (
                    <img
                        key={img_fungo}
                        src={img_fungo.img}
                        alt="O fungo em ação"
                        className="h-full w-full object-cover"/>
                ))}
            </Carousel>

            <div className="popup-content py-3">
                <div className="mb-2"><span className='font-semibold'>{dados.nome}</span> <span className='text-sm italic'>({dados.nome_cientifico})</span></div>
                <p className="text-sm text-gray-700 mr-2"> {dados.descricao}</p>
                <div className="popup-content-icons pt-2 flex justify-around text-center">
                    <div className="border-dashed border-2 border-gray-400 rounded py-2 px-8">
                        <span className="font-bold">Temperatura</span><br/>de {dados.temp_min}°C a {dados.temp_max}°C
                    </div>

                    <div className="border-dashed border-2 border-gray-400 rounded py-2 px-8">
                    <span className="font-bold">Umidade</span><br/>de {dados.umidade_min}% a {dados.umidade_max}%
                    </div>
                </div>

                
            </div>

            <div className="popup-content-control py-5">
                <p className="font-bold">Formas de controle</p>
                <div className="popup-content-control-items">
                    
                </div>
            </div>
        </>
    );
}