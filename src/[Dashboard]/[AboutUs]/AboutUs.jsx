import './AboutUs.css';

import React from 'react';
import { supabase } from "../../App";
import { useEffect, useState } from "react";
import imgTodos from './../../img/background.jpg';

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
            <div className="about-us-img-all" style={{backgroundImage: `url(` + imgTodos + `)`}}></div>
            <p className="mt-10 text-center">semos a universal</p>
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