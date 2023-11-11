import Thermometer from "./Thermometer";
import Humidity from "./Humidity";

export default function CityInfo() {
    return (
            <div className="city-info my-10">
                <Thermometer/>
                <Humidity/>
            </div>

    );

}