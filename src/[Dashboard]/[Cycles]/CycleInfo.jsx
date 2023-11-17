import React, { useContext } from "react";
import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { VitisContext, supabase } from "../../App";
import { useHref } from "react-router-dom";

export default function CycleInfo({dados}) {
    const [nomeFungos, setNomeFungos] = useState([]);
    const vitisContext = useContext(VitisContext);

    useEffect(() => {
        getNomeFungos();
      }, []); //eslint-disable-line

    async function getNomeFungos() {      
        dados.fungo_ciclo.map(async (row) => {
            let { data } = await supabase.from('fungo').select('nome').eq('id', row.id_fungo);
            setNomeFungos(current => [...current, data[0].nome])
        });
    }    

    return (
        <>
            <Carousel className="popup-carousel flex rounded-xl mr-7 float-left">
                {dados.imagem_ciclo.map((img_ciclo) => (
                    <img
                        key={img_ciclo}
                        src={img_ciclo.img}
                        alt="Como é a videira durante o ciclo"
                        className="h-full w-full object-cover"/>
                ))}
            </Carousel>

            <div className="popup-content py-3">
                <h2 className='font-semibold'>{dados.nome}</h2>
                <h3 className="text-sm text-gray-700 mr-2 mt-2 md:h-32"> {dados.resumo}</h3>

                    <a onClick={() => vitisContext.setCurrentPage('fungis')} href="https://xerosource.com/scroll-to-id-from-different-page-in-reactjs/" target="_blank">https://xerosource.com/scroll-to-id-from-different-page-in-reactjs/</a>

                <div style={{display: nomeFungos == 0 ? 'none' : ''}} className="mt-4 text-sm">
                    <h3 className="font-bold inline text-gray-800">Fungos atuantes: </h3>
                    <ul className="inline">
                        {nomeFungos.map((row, index) => {
                            // Último                        
                            if(index + 1 == nomeFungos.length) {
                                return (
                                    <React.Fragment key={index}>
                                        <li className="inline"> {row}.</li>
                                    </React.Fragment>
                                )
                            }

                            // Penúltimo
                            if(index + 2 == nomeFungos.length) {
                                return (
                                    <React.Fragment key={index}>
                                        <li className="inline">{row} e</li>
                                    </React.Fragment>
                                )
                            }

                            // Outros
                            return (
                            <React.Fragment key={index}>
                                <li className="inline">{row}, </li>
                            </React.Fragment>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </>
    );
}