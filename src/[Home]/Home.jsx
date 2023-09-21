import "./Home.css";
import logo from "./../img/logo.png";

export default function Home() {
    return (
        <>
            <div className="home">
                <header>
                    <img src={logo} alt="" />
                </header>
                <main>
                    <h1>Vitis</h1>
                    <button class="font-bold py-2 px-4 rounded-full shadow">Analise a saúde das suas videiras</button>
                </main>
            </div>
        </>
    );
}