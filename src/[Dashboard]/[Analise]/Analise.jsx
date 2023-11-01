import "./../Dashboard.css";
import CityInfo from "./CityInfo";
import CitySelector from "./CitySelector";

import CyclesController from "./CyclesController";

export default function Analise() {
    return (
        <section className="analise">
                <CyclesController/>
                <CitySelector/>
                <hr/>
                <CityInfo/>
        </section>
    );

}