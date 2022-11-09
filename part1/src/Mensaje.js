const Mensaje = (props)=>{ // props viene de propiedades
    return <h1 style={{color: props.color}}>{props.message}</h1>
}

export default Mensaje