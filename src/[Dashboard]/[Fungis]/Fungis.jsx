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

        return () => {
            vitisContext.setFungiRefID(null);
        };
    }, []); //eslint-disable-line

    async function goToFungi() {
        await delay(500);
        const element = document.getElementById(vitisContext.fungiRefID);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }

    async function getFungos() {
        const { data } = await supabase.from('fungo').select('*, imagem_fungo!inner(img), tratamento(descricao, tipo)').order('nome', { ascending: true });
        console.log(data);
        setFungos(data);
    }

    return (
        <section>
            <ul>
                {fungos.map((fungo) => (
                    <div id={`fungo`+fungo.id} ref={scrollToElementRef} key={fungo.id}>
                        <li  className="py-8 mx-10">
                            <FungiInfo dados={fungo}/>

                            <div className="float-left py-5">
                                <div className="flex align-center gap-2 leading-relaxed">
                                    <svg className="inline" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                                        viewBox="0 0 47.94 47.94" xmlSpace="preserve">
                                    <path style={{fill:'#ED8A19'}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                                        C22.602,0.567,25.338,0.567,26.285,2.486z"/>
                                    </svg>
                                    <p className="font-bold inline">Recomendações</p>
                                </div>

                                <ul className="list-disc list-inside">
                                    {fungo.tratamento.map((row) => {
                                        if(row.tipo === "Recomendação") {
                                            return(
                                                <li>{row.descricao}</li>
                                            );
                                        }
                                        return(<></>);
                                    })}
                                </ul>

                                <div className="flex align-center gap-2 leading-relaxed">
                                    <svg height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                                        viewBox="0 0 512.001 512.001" xmlSpace="preserve">
                                    <path style={{fill:'#2197D8'}} d="M12.715,467.755c-0.33,0.024-0.672,0.037-1.002,0.037c-0.855,0-1.71-0.049-2.553-0.147
                                        C10.345,467.694,11.53,467.743,12.715,467.755z"/>
                                    <g>
                                        <path style={{fill:'#2BA5F7'}} d="M408.728,98.584c12.522,0,22.687,10.152,22.687,22.675c0,6.255-2.541,11.924-6.646,16.029
                                            c-4.105,4.105-9.774,6.646-16.041,6.646h-6.194h-94.107h-6.194c-12.522,0-22.675-10.152-22.675-22.675
                                            c0-6.255,2.541-11.924,6.646-16.029s9.774-6.646,16.029-6.646H408.728z"/>
                                        <path style={{fill:'#2BA5F7'}} d="M212.401,44.206c12.522,0,22.675,10.152,22.675,22.687c0,6.255-2.541,11.924-6.646,16.029
                                            c-4.093,4.105-9.761,6.646-16.029,6.646h-0.965H106.884h-0.977c-12.522,0-22.687-10.152-22.687-22.675
                                            c0-6.267,2.541-11.936,6.646-16.041s9.786-6.646,16.041-6.646C105.906,44.206,212.401,44.206,212.401,44.206z"/>
                                    </g>
                                    <g>
                                        <path style={{fill:'#2197D8'}} d="M134.531,66.893c0-6.267,2.541-11.936,6.646-16.041c4.105-4.105,9.786-6.646,16.041-6.646h-51.311
                                            c-6.255,0-11.936,2.541-16.041,6.646c-4.105,4.105-6.646,9.774-6.646,16.041c0,12.522,10.164,22.675,22.687,22.675h0.977h50.334
                                            C144.695,89.568,134.531,79.415,134.531,66.893z"/>
                                        <path style={{fill:'#2197D8'}} d="M331.223,120.648c0-6.267,2.541-11.936,6.646-16.041c4.105-4.105,9.786-6.646,16.041-6.646h-51.311
                                            c-6.255,0-11.936,2.541-16.041,6.646c-4.105,4.105-6.646,9.774-6.646,16.041c0,12.522,10.165,22.675,22.687,22.675h0.977h50.334
                                            C341.388,143.322,331.223,133.17,331.223,120.648z"/>
                                    </g>
                                    <path style={{fill:'#F7B239'}} d="M471.291,435.527c-0.66,1.1-1.503,1.1-1.955,1.1H241.624c-0.452,0-1.283,0-1.955-1.1
                                        s-0.293-1.845-0.073-2.248l60.926-118.211c4.789,2.358,9.199,4.887,15.687,6.377c3.543,0.831,7.697,1.344,12.877,1.344
                                        c26.389,0,26.389-13.304,52.802-13.304c15.577,0,21.978,4.642,30.017,8.43l59.472,115.365
                                        C471.584,433.682,471.963,434.428,471.291,435.527z"/>
                                    <path style={{fill:'#F95428'}} d="M255.271,334.859l-43.382,84.138c-1.1,2.138-1.942,4.3-2.541,6.487h-0.012
                                        c-15.259,7.159-32.265,11.142-50.187,11.142c-15.173,0-29.687-2.859-43.028-8.063c-44.311-17.275-75.794-60.401-75.794-110.759
                                        c30.567,0,37.543,11.875,57.334,17.287c5.852,1.613,12.84,2.651,21.881,2.651c39.607,0,39.607-19.938,79.215-19.938
                                        C228.882,317.805,236.102,329.337,255.271,334.859z"/>
                                    <path style={{fill:'#2BA5F7'}} d="M295.892,256.072l12.535-24.324v-87.815h94.107v87.815l96.538,187.249
                                        c11.484,22.272-4.679,48.794-29.736,48.794H241.624c-10.323,0-19.144-4.508-25.142-11.374c-7.147-8.185-10.274-19.718-7.147-30.933
                                        h0.012c0.599-2.187,1.442-4.349,2.541-6.487l43.382-84.138L295.892,256.072z M471.291,435.527c0.672-1.1,0.293-1.845,0.086-2.248
                                        l-59.472-115.365c-8.039-3.787-14.44-8.43-30.017-8.43c-26.413,0-26.413,13.304-52.802,13.304c-14.636,0-21.16-4.08-28.563-7.721
                                        l-60.926,118.211c-0.22,0.403-0.599,1.148,0.073,2.248s1.503,1.1,1.955,1.1h227.712
                                        C469.788,436.627,470.631,436.627,471.291,435.527z"/>
                                    <path style={{fill:'#2197D8'}} d="M296.976,456.418c-3.008-8.185-4.325-19.718-3.008-30.933h0.005c0.252-2.187,0.607-4.349,1.069-6.487
                                        l18.261-84.138l17.098-78.787l5.275-24.324v-87.815h-27.249v87.815l-12.535,24.324l-40.621,78.787l-43.382,84.138
                                        c-1.1,2.138-1.942,4.3-2.541,6.487h-0.012c-3.128,11.215,0,22.748,7.147,30.933c5.999,6.866,14.819,11.374,25.142,11.374h65.934
                                        C303.212,467.792,299.5,463.284,296.976,456.418z"/>
                                    <path style={{fill:'#E09B2D'}} d="M316.209,321.445l-2.908,13.414l-18.264,84.138c-0.464,2.138-0.819,4.3-1.063,6.487h-0.012
                                        c-0.44,3.726-0.574,7.477-0.464,11.142h-51.873c-0.452,0-1.283,0-1.955-1.1s-0.293-1.845-0.073-2.248l60.926-118.211
                                        C305.311,317.426,309.722,319.955,316.209,321.445z"/>
                                    <path style={{fill:'#2BA5F7'}} d="M295.892,256.072l-40.621,78.787c-19.168-5.522-26.389-17.055-56.516-17.055
                                        c-39.607,0-39.607,19.938-79.215,19.938s-39.607-19.938-79.215-19.938c0,65.519,53.303,118.822,118.822,118.822
                                        c17.922,0,34.928-3.983,50.187-11.142c-3.128,11.215,0,22.748,7.147,30.933c-17.653,7.33-37.03,11.374-57.334,11.374
                                        c-82.831,0-149.987-67.157-149.987-149.987c0-64.457,40.658-119.396,97.723-140.617v-87.62h104.553v87.62
                                        C249.003,191.176,279.448,219.751,295.892,256.072z"/>
                                    <path style={{fill:'#2197D8'}} d="M152.526,467.645C72.774,464.188,9.16,398.412,9.16,317.805c0-64.457,40.658-119.396,97.723-140.617
                                        v-87.62h28.05v87.62c-21.99,21.221-37.653,76.16-37.653,140.617C97.281,398.424,121.788,464.188,152.526,467.645z"/>
                                    <g>
                                        <path style={{fill:'#FFFFFF'}} d="M258.553,260.887c-2.964,0-5.873-1.435-7.637-4.088c-13.051-19.617-31.49-34.277-53.327-42.399
                                            c-4.743-1.764-7.158-7.038-5.395-11.782c1.765-4.743,7.041-7.158,11.782-5.394c25.483,9.478,46.991,26.568,62.196,49.424
                                            c2.804,4.214,1.659,9.901-2.553,12.704C262.06,260.39,260.297,260.887,258.553,260.887z"/>
                                        <path style={{fill:'#FFFFFF'}} d="M180.894,186.35c-5.06,0-9.163-4.102-9.163-9.163v-27.146c0-5.06,4.102-9.163,9.163-9.163
                                            s9.163,4.102,9.163,9.163v27.146C190.057,182.248,185.954,186.35,180.894,186.35z"/>
                                    </g>
                                    <path style={{fill:'#E54728'}} d="M116.12,428.563c-44.311-17.275-75.794-60.401-75.794-110.759c30.567,0,37.543,11.875,57.334,17.287
                                        C99.297,371.975,106.077,404.789,116.12,428.563z"/>
                                    <g>
                                        <circle style={{fill:'#FFFFFF'}} cx="208.36" cy="66.893" r="9.163"/>
                                        <circle style={{fill:'#FFFFFF'}} cx="180.896" cy="120.105" r="9.163"/>
                                        <circle style={{fill:'#FFFFFF'}} cx="407.496" cy="121.253" r="9.163"/>
                                        <circle style={{fill:'#FFFFFF'}} cx="371.994" cy="174.47" r="9.163"/>
                                    </g>
                                    <g>
                                        <path style={{fill:'#333333'}} d="M507.217,414.801l-95.521-185.274v-76.57c16.172-1.501,28.876-15.142,28.876-31.698
                                            c0-17.557-14.284-31.841-31.841-31.841H302.234c-17.557,0-31.841,14.284-31.841,31.841c0,16.556,12.703,30.195,28.875,31.697v76.57
                                            l-3.459,6.707c-17.412-29.019-43.937-52.142-75.211-65.274V97.654c13.596-3.626,23.643-16.042,23.643-30.766
                                            c0-17.557-14.283-31.841-31.841-31.841H105.904c-17.557,0-31.841,14.284-31.841,31.841c0,14.726,10.052,27.146,23.653,30.768
                                            v73.298c-27.564,11.527-51.177,30.453-68.572,55.037C10.078,252.937,0,284.684,0,317.802c0,87.756,71.395,159.151,159.151,159.151
                                            c19.03,0,37.562-3.321,55.184-9.855c7.527,6.303,17.088,9.852,27.294,9.852h227.709c14.987,0,28.59-7.64,36.391-20.438
                                            C513.529,443.715,514.085,428.121,507.217,414.801z M288.719,121.26c0-7.452,6.063-13.516,13.516-13.516h106.498
                                            c7.454,0,13.516,6.063,13.516,13.516c0,7.452-6.063,13.516-13.516,13.516H302.235C294.783,134.775,288.719,128.712,288.719,121.26z
                                            M92.388,66.889c0-7.452,6.062-13.516,13.516-13.516h106.499c7.452,0,13.516,6.063,13.516,13.516s-6.062,13.516-13.516,13.516
                                            H105.904C98.45,80.404,92.388,74.342,92.388,66.889z M18.325,317.802c0-29.305,8.913-57.392,25.778-81.224
                                            c16.5-23.32,39.313-40.886,65.97-50.803c3.588-1.335,5.968-4.76,5.968-8.587V98.73h86.232v78.457c0,3.828,2.379,7.252,5.966,8.587
                                            c33.63,12.519,61.626,37.947,77.43,70.131l-34.87,67.635c-2.847-1.211-5.54-2.558-8.314-3.955
                                            c-10.196-5.131-21.752-10.946-43.724-10.946c-21.981,0-33.536,5.816-43.729,10.95c-9.584,4.824-17.861,8.992-35.489,8.992
                                            s-25.906-4.167-35.489-8.992c-10.194-5.132-21.749-10.95-43.729-10.95c-5.06,0-9.163,4.102-9.163,9.163
                                            c0,70.575,57.417,127.992,127.992,127.992c13.817,0,27.257-2.171,40.131-6.448c0.507,4.238,1.648,8.415,3.445,12.4
                                            c-14.001,4.567-28.611,6.882-43.575,6.882C81.499,458.627,18.325,395.453,18.325,317.802z M203.748,414.801
                                            c-0.666,1.291-1.24,2.608-1.767,3.938c-13.539,5.79-27.928,8.73-42.831,8.73c-57.222,0-104.349-44.054-109.246-100.026
                                            c11.427,1.225,18.25,4.66,25.907,8.515c10.194,5.132,21.749,10.95,43.729,10.95s33.536-5.816,43.729-10.95
                                            c9.584-4.824,17.861-8.992,35.489-8.992c17.622,0,25.9,4.166,35.485,8.99c2.61,1.313,5.268,2.646,8.134,3.914L203.748,414.801z
                                            M490.08,446.974c-4.446,7.295-12.2,11.649-20.743,11.649H241.628c-8.542,0-16.297-4.355-20.743-11.649s-4.763-16.183-0.849-23.775
                                            l96.538-187.249c0.669-1.299,1.019-2.738,1.019-4.199v-78.65h75.778v78.65c0,1.461,0.349,2.9,1.019,4.199l96.54,187.249
                                            C494.844,430.792,494.527,439.68,490.08,446.974z"/>
                                        <path style={{fill:'#333333'}} d="M479.522,429.079l-59.477-115.363c-0.924-1.792-2.414-3.23-4.237-4.089
                                            c-1.159-0.546-2.282-1.112-3.405-1.677c-7.1-3.573-15.147-7.622-30.516-7.622c-15.385,0-23.433,4.054-30.533,7.629
                                            c-6.288,3.168-11.255,5.669-22.275,5.669c-11.031,0-15.999-2.5-22.289-5.665c-0.738-0.371-1.477-0.743-2.223-1.111
                                            c-4.482-2.202-9.901-0.412-12.186,4.024l-60.883,118.107c-1.945,3.663-1.814,7.793,0.335,11.295
                                            c1.007,1.659,3.977,5.518,9.789,5.518h227.712c5.81,0,8.769-3.826,9.798-5.532c1.01-1.669,2.992-5.98,0.448-11.069
                                            C479.564,429.16,479.541,429.113,479.522,429.079z M252.896,427.468l51.681-100.256c5.906,2.566,13.237,4.738,24.505,4.738
                                            c15.374,0,23.42-4.052,30.518-7.627c6.29-3.169,11.26-5.671,22.29-5.671c11.017,0,15.986,2.501,22.275,5.666
                                            c0.329,0.165,0.656,0.33,0.985,0.495l52.925,102.657H252.896V427.468z"/>
                                    </g>
                                    <path style={{fill:'#FFFFFF'}} d="M438.646,378.503c-3.33,0-6.541-1.822-8.163-4.989L363.835,243.34
                                        c-0.662-1.293-1.007-2.723-1.007-4.176v-34.756c0-5.06,4.101-9.163,9.163-9.163c5.061,0,9.163,4.102,9.163,9.163v32.547
                                        l65.64,128.208c2.307,4.504,0.524,10.025-3.98,12.332C441.479,378.18,440.052,378.503,438.646,378.503z"/>
                                    </svg>
                                    <p className="font-bold">Tratamentos</p>
                                </div>

                                <ul className="list-disc list-inside">
                                    {fungo.tratamento.map((row) => {
                                        if(row.tipo === "Tratamento") {
                                            return(
                                                <li>{row.descricao}</li>
                                            );
                                        }
                                        return(<></>);
                                    })}
                                </ul>
                            </div>
                        </li>
                        <hr/>
                    </div>
                ))}
            </ul>
        </section>
    );

}