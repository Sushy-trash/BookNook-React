
import { useState } from "react";
import productos from "../data/productos.json";
import "./Catalogo.css";
import "./Producto.css"
import Producto from "./Producto";

export default function Catalogo({ onAgregarAlCarrito }) {
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    return (
        <section id="catalogo" className="catalogo">
            <div className="container">
                <h2>Explora nuestro catálogo</h2>
                <p>Encuentra tu próxima historia favorita.</p>

                <div className="row g-4">
                    {productos.map((producto) => (
                        <div
                            className="col-12 col-sm-6 col-lg-4"
                            key={producto.id}
                        >
                            <Producto
                                producto={producto}
                                onVerDetalles={() =>
                                    setProductoSeleccionado(producto)
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>

            {productoSeleccionado && (
                <div
                    className="modal-fondo"
                    onClick={() => setProductoSeleccionado(null)}
                >
                    <div
                        className="modal-detalle"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-titulo"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-cerrar"
                            type="button"
                            aria-label="Cerrar detalles"
                            onClick={() => setProductoSeleccionado(null)}
                        >
                            &times;
                        </button>

                        <div className="modal-contenido">
                            <img
                                src={productoSeleccionado.imagen}
                                alt={productoSeleccionado.nombre}
                                className="modal-imagen"
                            />

                            <div className="modal-informacion">
                                <p className="producto-categoria">
                                    {productoSeleccionado.categoria}
                                </p>

                                <h2 id="modal-titulo">
                                    {productoSeleccionado.nombre}
                                </h2>

                                <p className="modal-descripcion">
                                    {productoSeleccionado.descripcion}
                                </p>

                                <p className="producto-precio">
                                    ${Number(
                                        productoSeleccionado.precio
                                    ).toLocaleString("es-CL")}
                                </p>
                                
                                <button
                                    className="producto-boton"
                                    type="button"
                                    onClick={() => {
                                        onAgregarAlCarrito(productoSeleccionado);
                                    }}
                                >
                                    Agregar al carrito
                                </button>

                                <button
                                    className="producto-boton"
                                    type="button"
                                    onClick={() => setProductoSeleccionado(null)}
                                >
                                    Volver al catálogo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
