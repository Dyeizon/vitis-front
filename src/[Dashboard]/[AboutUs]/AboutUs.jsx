import './AboutUs.css';

import React from 'react';
import { supabase } from "../../App";
import { useEffect, useState } from "react";
import ifc from './../../img/ifc.jpg';

import ProfileCard from './ProfileCard';

export default function AboutUs() {
    const [profiles, setProfiles] = useState([]);
    
    useEffect(() => {
        getInfo();
    }, []);

    async function getInfo() {
        const { data } = await supabase.from('grupo').select('*').order('nome', {ascending: true});
        if(data) setProfiles(data);
    }

    return (
        <section className="about-us">
            <div className="about-us-img-all" style={{backgroundImage: `url(` + ifc + `)`}}></div>
            <p className="mt-10 text-center w-2/3 m-auto about-us-desc">Somos acadêmicos de Ciências da Computação no Instituto Federal Catarinense Campus Videira, esse site é um projeto desenvolvido para as disciplinas de <span className='italic'>Desenvolvimento Web I</span> e <span className='italic'>Extensão e Pesquisa em Computação</span>. </p>
            <hr className='my-10'/>
            <div className="flex justify-center gap-10 flex-wrap align-center w-11/12 m-auto">
                {profiles.map((row, index) => (
                    <React.Fragment key={index}>
                        <ProfileCard imagem={row.img} nome={row.nome} github={row.github} linkedin={row.linkedin}/>
                    </React.Fragment>
                ))}
            </div>
            
        </section>
    );

}