import "./producto.css"
export default function Producto({productos}){
    const [errorImagen, setErrorImagen] = useState(false);

    return(
        <article className="card producto-card">
            <div className="producto-imagen-contenedor">
                {productos.imagen && !errorImagen?(
                    <img
                        src={productos.imagen}
                        alt={productos.nombre}
                        className="producto-imagen"
                        loading="lazy"
                        onError={()=>setErrorImagen(true)}
                    />
                ):(
                    <div className="producto-placeholder">
                        Imagen no disponible
                    </div>
                )}
            </div>
            <div className="card-body">
                <p className="producto-categoria">
                    {productos.categoria}
                </p>

                <h3 className="card-title">
                    {productos.nombre}
                </h3>

                <p className="producto-precio">
                    ${Number(productos.precio).toLocaleString("es-CL")}
                </p>

                <button className="producto-boton">
                    Ver detalles
                </button>
            </div>

            
        </article>



    )


}