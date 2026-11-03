function Tarjeta({titulo = "titulo sin definir", descripcion = "descripcion sin definir"}) {
    return(
        <>
            <div className = "col-span-4 bg-amber-200 p-3 rounded-2xl text-black">
                <h3>{titulo}</h3>
                <hr />
                <p>{descripcion}</p>
            </div>
        </>
    )
}

export default Tarjeta
