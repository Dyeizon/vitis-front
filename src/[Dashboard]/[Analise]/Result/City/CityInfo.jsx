import Thermometer from "./Thermometer";
import Humidity from "./Humidity";
import { useContext } from "react";
import { VitisContext } from "../../../../App";

export default function CityInfo() {
    const vitisContext = useContext(VitisContext);
    return (
            <div className="city-info my-10">
                <Thermometer temp={vitisContext.temp}/>
                <Humidity humidity={vitisContext.humidity}/>
            </div>
    );

}