import './CardComponent.css'


function CardComponent(props) {
  return (
    <>
   
        <div className="card-component-header">
            <span id='cardcomponent-title'>{props.nome}</span>
            {props.icon}
        </div>
        <span id='cardcomponent-line'></span>
        <div className="cardcomponent-number" style={{fontSize: props.fontSizeCard}}>
            <h2>{props.value}</h2>
        </div>

    </>
  )
}

export default CardComponent