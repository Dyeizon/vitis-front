export default function CardCiclo({text, onClickEvent, selectedButton, idCiclo}) {
    return (
        <button onClick={() => onClickEvent(idCiclo)} className={`${selectedButton === idCiclo ? "ciclo-selecionado" : ""} card-ciclo`}>
            <h2>{text}</h2>
        </button>
    );

}