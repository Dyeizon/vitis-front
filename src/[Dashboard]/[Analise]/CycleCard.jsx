export default function CycleCard({text, onClickEvent, selectedButton, cycleID, img}) {
    return (
        <button onClick={() => onClickEvent(cycleID)} className={`${selectedButton === cycleID ? "ciclo-selecionado" : ""} card-ciclo`} style={{backgroundImage: "url(" + img + ")"}}>
            <h2>{text}</h2>
        </button>
    );

}