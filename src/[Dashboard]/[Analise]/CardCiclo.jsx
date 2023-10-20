export default function CardCiclo({text, onClickEvent, selectedButton, idCiclo, img}) {
    return (
        <button onClick={() => onClickEvent(idCiclo)} className={`${selectedButton === idCiclo ? "ciclo-selecionado" : ""} card-ciclo`} style={{backgroundImage: "url(" + img + ")"}}>

        </button>
    );

}