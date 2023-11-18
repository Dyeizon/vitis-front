import React, { useContext } from "react";
import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { VitisContext, supabase } from "../../App";

export default function CycleInfo({dados}) {
    const [nomeFungos, setNomeFungos] = useState([]);
    const vitisContext = useContext(VitisContext);

    function sortImgByID(a, b) {
        return a.id - b.id;
    }

    function sortFungiNamesAsc(a, b) {
        return a.nome.localeCompare(b.nome);
    }

    dados.imagem_ciclo.sort(sortImgByID);

    useEffect(() => {
        getNomeFungos();
      }, []); //eslint-disable-line

    async function getNomeFungos() {      
        dados.fungo_ciclo.map(async (row) => {
            let { data } = await supabase.from('fungo').select('id, nome').eq('id', row.id_fungo);
            setNomeFungos(current => [...current, data[0]])
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

                    <a onClick={() => {vitisContext.setCurrentPage('fungis'); vitisContext.setFungiRefID('fungo2')}} href="#t">teste</a>

                <div style={{display: nomeFungos === 0 ? 'none' : ''}} className="mt-4 text-sm">
                    <h3 className="font-bold inline text-gray-800">Fungos atuantes: </h3>
                    <ul className="inline">
                        {nomeFungos.length > 0 && nomeFungos ? nomeFungos.sort(sortFungiNamesAsc).map((row, index) => (
                            <React.Fragment key={index}>
                                <li className="inline"> <a className="underline text-blue-700 cursor-pointer" onClick={() => {vitisContext.setCurrentPage('fungis'); vitisContext.setFungiRefID(`fungo${row.id}`)}} href={`#fungo${row.id}`}>{row.nome}</a>{index + 1 === nomeFungos.length ? '.' : (index + 2 === nomeFungos.length) ? ' e' : ','}</li>
                            </React.Fragment>
                        )) : 'Nossa base de dados não identificou nenhum fungo para este ciclo.'}
                    </ul>
                </div>
            </div>

        </>
    );
}