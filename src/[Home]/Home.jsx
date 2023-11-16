import "./Home.css";
import logo from "./../img/logo.png";

export default function Home() {
    return (
        <>
            <div className="home">
                <header>
                    <img src={logo} alt="Logo" />
                </header>
                <main>
                    <h1>Vitis</h1>
                    <a href="dashboard"><button className="font-bold">Analise a saúde das suas videiras</button></a>
                </main>
            </div>
        </>
    );
}