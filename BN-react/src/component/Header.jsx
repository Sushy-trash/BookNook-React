import { useState } from 'react';
import Logo from "./Logo";
export default function Header({
    onLoginClick,
    usuarioActual,
    onLogout,
    onCarritoClick,
    cantidadCarrito,
    onInicioClick
}) {
    const [open, setOpen] = useState(false);
    return(
        <>
           
            <header className="header">
                <a className="skip-link" href="#inicio"><Logo/></a>
                
                <nav className="header-navegacion">
                    <a
                        className="navegacion-link"
                        href="#inicio"
                        onClick={onInicioClick}
                    >
                        Inicio
                    </a>
                    <a className="navegacion-link" href="#catalogo">Catálogo</a>
                    <a className="navegacion-link" href="#nosotros">Nosotros</a>
                    <a className="navegacion-link" href="#contacto">Contacto</a>
                    <a className="navegacion-link" href="/admin.html">Admin</a>
                    <button
                        type="button"
                        className="btn btn-outline-dark header-carrito"
                        onClick={onCarritoClick}
                    >
                        🛒 Carrito ({cantidadCarrito})
                    </button>
                    {usuarioActual ? (
                        <div className="header-user">
                            <span className="usuario-saludo">
                                ¡Hola, {usuarioActual.nombre}!
                            </span>

                            <button
                                type="button"
                                className="btn btn-outline-dark header-closeSession"
                                onClick={onLogout}
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-outline-dark header-login"
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