import "./Carrito.css"

export default function Carrito({
    carrito,
    onAumentarCantidad,
    onDisminuirCantidad,
    onEliminarProducto,
    onVolverCatalogo
}) {
const total = carrito.reduce(
    (acumulado, producto) =>
    acumulado + Number(producto.precio) * producto.cantidad,
    0
);


const tieneMarcadorGratis = total > 30000;

const dinero = (cantidad) =>
    Number(cantidad).toLocaleString("es-CL");

return (
    <section className="carrito container py-5">
        <h2>Mi carrito de compras</h2>

        {carrito.length === 0 ? (
            <div className="carrito-vacio">
                <p>Tu carrito está vacío.</p>

                <button
                    type="button"
                    className="producto-boton"
                    onClick={onVolverCatalogo}
                >
                    Volver al catálogo
                </button>
            </div>
        ) : (
            <>
                <div className="carrito-productos">
                    {carrito.map((producto) => (
                        <article
                            className="carrito-producto"
                            key={producto.id}
                        >
                            <div className="carrito-producto-imagen">
                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                />
                            </div>

                            <div className="carrito-producto-info">
                                <h3>{producto.nombre}</h3>

                                <p>
                                    Precio unitario: $
                                    {dinero(producto.precio)}
                                </p>

                                <p>
                                    Subtotal: $
                                    {dinero(
                                        Number(producto.precio) *
                                        producto.cantidad
                                    )}
                                </p>

                                <div className="carrito-cantidad">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            onDisminuirCantidad(producto.id)
                                        }
                                        aria-label={`Disminuir cantidad de ${producto.nombre}`}
                                    >
                                        −
                                    </button>

                                    <span>{producto.cantidad}</span>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            onAumentarCantidad(producto.id)
                                        }
                                        aria-label={`Aumentar cantidad de ${producto.nombre}`}
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    type="button"
                                    className="carrito-eliminar"
                                    onClick={() =>
                                        onEliminarProducto(producto.id)
                                    }
                                >
                                    Eliminar producto
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="carrito-resumen">
                    <h3>Resumen de compra</h3>

                    <p className="carrito-total">
                        Total: ${dinero(total)}
                    </p>

                    {tieneMarcadorGratis ? (
                        <div className="carrito-regalo">
                            <p>
                                ¡Felicitaciones! 🎉
                            </p>

                            <p>
                                Tu compra incluye un marcador de regalo gratis.
                            </p>
                        </div>
                    ) : (
                        <p className="carrito-progreso">
                            Te faltan $
                            {dinero(30001 - total)} para obtener tu marcador gratis.
                        </p>
                    )}

                    <button
                        type="button"
                        className="producto-boton"
                        onClick={onVolverCatalogo}
                    >
                        Seguir comprando
                    </button>
                </div>
            </>
        )}
    </section>
);


}
