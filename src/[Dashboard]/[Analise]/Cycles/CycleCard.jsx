export default function CycleCard({text, onClickEvent, selectedButton, cycleID, img}) {
    
    
    return (
        <button onClick={() => onClickEvent(cycleID)} className={`${selectedButton === cycleID ? "selected-cycle" : ""} cycle-card`} style={{backgroundImage: "url(" + img + ")"}}>
            <h2>{text}</h2>
        </button>
    );

}