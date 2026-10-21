import { useState } from 'react';
import Logo from "./Logo";
export default function Header(){
    const [open, setOpen] = useState(false);
    return(
        <>
            <a className="skip-link" href="#contenido">Saltar Contenido</a>
            <header className="header">
                <Logo/>
                <nav className="header-navegacion">
                    <a className="navegacion-link" href="#inicio">inicio</a>
                    <a className="navegacion-link" href="#catalogo">catalogo</a>
                    <a className="navegacion-link" href="#nosotros">nosotros</a>
                    <a className="navegacion-link" href="/admin.html">Admin</a>
                    <button className="header-boton" onClick={() => setOpen(!open)}>
                        <a href="#login">Login</a>
                    </button>
        

                </nav>
                
            </header>
        
        </>

    )

}