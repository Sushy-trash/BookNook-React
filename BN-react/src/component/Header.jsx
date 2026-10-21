import { useState } from 'react';
import Logo from "./Logo";
export default function Header(){
    const [open, setOpen] = useState(false);
    return(
        <>
            <a classname="skip-link" href="#contenido">Saltar Contenido</a>
            <header classname="header">
                <nav classname="header-navegacion">
                    <a classname="navegacion-link" href="#inicio">inicio</a>
                    <a classname="navegacion-link" href="#catalogo">catalogo</a>
                    <a classname="navegacion-link" href="#nosotros">nosotros</a>
                    <a classname="navegacion-link" href="/admin.html">Admin</a>

                </nav>
                <button className="header-boton" onClick={() => setOpen(!open)}>
                    <a classname="btn-login "href="#login">Login</a>
                </button>
            </header>
        
        </>

    )

}