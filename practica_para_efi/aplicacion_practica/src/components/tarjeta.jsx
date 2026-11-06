export default function Tarjeta({titulo = "Titulo sin definir.", precio = 0, descripcion = "Descripcion sin definir."}) {
    return(
        <>
            <div className = "col-span-4 bg-amber-200 p-3 rounded-2xl text-black m-3 hover:p-4 hover:m-2 shadow-md hover:shadow-xl shadow-cyan-900">
                <h3>{titulo}</h3>
                <hr />
                <p className = "text-xs text-start">{precio}</p>
                <hr />
                <p className = "text-xs text-start">{descripcion}</p>
            </div>
        </>
    )
};
