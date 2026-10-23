import { useState } from 'react';
import Logo from "./Logo";
export default function Header({
    onLoginClick,
    usuarioActual,
    onLogout,
    onCarritoClick,
    cantidadCarrito
}) {
    const [open, setOpen] = useState(false);
    return(
        <>
           
            <header className="header">
                <a className="skip-link" href="#inicio"><Logo/></a>
                
                <nav className="header-navegacion">
                    <a className="navegacion-link" href="#inicio">Inicio</a>
                    <a className="navegacion-link" href="#catalogo">Catálogo</a>
                    <a className="navegacion-link" href="#nosotros">Nosotros</a>
                    <a className="navegacion-link" href="#contacto">Contacto</a>
                    <a className="navegacion-link" href="/admin.html">Admin</a>
                    <button
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={onCarritoClick}
                    >
                        🛒 Carrito ({cantidadCarrito})
                    </button>
                    {usuarioActual ? (
                        <>
                            <span className="usuario-saludo">
                                ¡Hola, {usuarioActual.nombre}!
                            </span>

                            <button
                                type="button"
                                className="btn btn-outline-dark"
                                onClick={onLogout}
                            >
                                Cerrar sesión
                            </button>
                        </>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-outline-dark"
                            onClick={onLoginClick}
                        >
                            Login
                        </button>
                    )}
                </nav>
                
            </header>
        
        </>

    )

}