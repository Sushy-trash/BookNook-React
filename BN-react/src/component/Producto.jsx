
import { useState } from "react";
import "./Producto.css";

export default function Producto({ producto,onVerDetalles }) {
    const [errorImagen, setErrorImagen] = useState(false);

    return (
        <article className="card producto-card">
            <div className="producto-imagen-contenedor">
                {producto.imagen && !errorImagen ? (
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="producto-imagen"
                        loading="lazy"
                        onError={() => setErrorImagen(true)}
                    />
                ) : (
                    <div className="producto-placeholder">
                        Imagen no disponible
                    </div>
                )}
            </div>

            <div className="card-body">
                <p className="producto-categoria">
                    {producto.categoria}
                </p>

                <h3 className="card-title">
                    {producto.nombre}
                </h3>

                <p className="producto-precio">
                    ${Number(producto.precio).toLocaleString("es-CL")}
                </p>

                <button className="producto-boton" onClick={onVerDetalles}>
                    Ver detalles
                </button>
            </div>
        </article>
    );
}
