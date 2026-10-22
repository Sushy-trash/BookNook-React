import { useState } from 'react';
import Logo from "./Logo";
export default function Header(){
    const [open, setOpen] = useState(false);
    return(
        <>
           
            <header className="header">
                <a className="skip-link" href="#contenido"><Logo/></a>
                
                <nav className="header-navegacion">
                    <a className="navegacion-link" href="#inicio">Inicio</a>
                    <a className="navegacion-link" href="#catalogo">Catalogo</a>
                    <a className="navegacion-link" href="#nosotros">Nosotros</a>
                    <a className="navegacion-link" href="/admin.html">Admin</a>
                    <button className="header-boton" onClick={() => setOpen(!open)}>
                        <a href="#login">Login</a>
                    </button>
        

                </nav>
                
            </header>
        
        </>

    )

}