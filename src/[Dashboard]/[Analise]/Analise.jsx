import "./../Dashboard.css";
import CitySelector from "./CitySelector";

import CyclesController from "./CyclesController";

export default function Analise() {
    return (
        <section className="analise">
                <CyclesController/>
                <CitySelector/>
        </section>
    );

}